import { Container, ButtonMinimize, ButtonOpen, BoxInputs, BoxButtons, BoxAutoComplete, GridInput } from './styles';

import { useEffect, useState } from "react";

import { useTheme } from '../../../../hooks/useTheme';

import { BiSearch } from 'react-icons/bi';
import { FaCheck } from 'react-icons/fa';

import axios from "axios";
import { api } from '../../../../services/axios';

export function Filter({ userCoordinates, setAnnouncementsFiltered, setUserCoordinates }) {
  const { themeIsActive } = useTheme();

  const [stateMenu, setStateMenu] = useState(false);

  const [responseState, setResponseState] = useState([]);
  const [responseCity, setResponseCity] = useState([]);

  const [currentSelectValueState, setCurrentSelectValueState] = useState('');
  const [currentSelectValueCity, setCurrentSelectValueCity] = useState('');

  const [valueInput, setValueInput] = useState('');
  const [responseAddress, setResponseAddress] = useState([]);
  const [userInformation, setUserInformation] = useState([]);
  const [categories, setCategories] = useState([]);

  function handleChangeStateMenu() {
    setStateMenu(!stateMenu);
  }

  function handleSearchCity(state) {
    fetch(`./states/${state}.json`, {
      headers: {
        Accept: "application/json"
      }
    }).then(res => res.json())
      .then(res => {
        setResponseCity(res);
        setCurrentSelectValueState(state);
      });
  }

  async function searchStates() {
    const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`);

    const data = [];

    response.data.map(state => {
      data.push(state.sigla);
    });

    setResponseState(data.sort());
  }

  async function handleSearchAddress() {
    if (!currentSelectValueState && !currentSelectValueCity) {
      const response = await axios.get(`https://viacep.com.br/ws/${userInformation[0]}/${userInformation[1]}/${valueInput}/json/`);
      setResponseAddress(response.data);
    } else {
      const response = await axios.get(`https://viacep.com.br/ws/${currentSelectValueState}/${currentSelectValueCity}/${valueInput}/json/`);
      setResponseAddress(response.data);
    }
  }

  function handleValueInChangeSelectCity(city) {
    setCurrentSelectValueCity(city);
  }

  function getCategories() {
    api.get('/categories')
      .then(response => setCategories(response.data))
  }

  function handleForm(e) {
    e.preventDefault();
    if (valueInput) {
      const [address, district, zip, city, state] = valueInput.split(', ');
      api.get(`/announcements/filter?endereco=${address}&cidade=${city}&estado=${state}&cep=${zip}`)
        .then(response => {
          console.log(response.data)
          setAnnouncementsFiltered(response.data.announcements)
          setUserCoordinates([response.data.user_lat, response.data.user_lng])
        })
    }
  }

  async function getAddressByLocale() {
    if (!userCoordinates[0] == 0 && !userCoordinates[1] == 0) {
      const response = await axios.post('http://www.mapquestapi.com/geocoding/v1/reverse?key=yYg4Anyz9aM6grzG9jivrFi1MwDg0wfi', {
        location: {
          latLng: {
            lat: `${userCoordinates[0]}`,
            lng: `${userCoordinates[1]}`
          }
        },
        options: {
          thumbMaps: false
        }
      });

      const resCep = await axios.get(`https://viacep.com.br/ws/${response.data.results[0].locations[0].postalCode.replace('-', '')}/json/`);

      setUserInformation([resCep.data.uf, resCep.data.localidade]);
    }
  }

  useEffect(() => {
    searchStates();
    getCategories();
    getAddressByLocale();
  }, []);

  useEffect(() => {
    if (valueInput) {
      handleSearchAddress();
    }
  }, [valueInput]);

  return (
    stateMenu ? (
      <ButtonOpen type="button" onClick={handleChangeStateMenu}>
        <BiSearch size={30} />
      </ButtonOpen>
    ) : (
      <Container onSubmit={handleForm}>
        <ButtonMinimize type="button" onClick={handleChangeStateMenu}></ButtonMinimize>

        <BoxInputs>
          <h3>Localidade - UF</h3>
          <select
            className={themeIsActive && "dark_input"}
            onChange={event => handleSearchCity(event.target.value)}
          >
            <option>{userInformation[0]}</option>
            {responseState.map((states, index) => (
              <option key={index}>{states}</option>
            ))}
          </select>

          <select
            className={themeIsActive && "dark_input"}
            onChange={event => handleValueInChangeSelectCity(event.target.value)}
          >
            <option>{userInformation[1]}</option>
            <option>SÃO PAULO</option>

            {responseCity.map((city, index) => (
              <option key={index}>{city.split(':')[1]}</option>
            ))}
          </select>
        </BoxInputs>

        <BoxInputs>
          <h3>Pesquise por endereço</h3>
          <input
            type="text"
            title="Faça uma busca"
            placeholder="Digite um endereço..."
            className={themeIsActive && "dark_input"}
            onChange={event => setValueInput(event.target.value)}
            value={valueInput}
          />
          {(valueInput.length > 0 && responseAddress.length > 0) && (
            <BoxAutoComplete className="box-autocomplete">
              {responseAddress.map((res, indec) => (
                <button key={index} type="button" onClick={(event) => setValueInput(event.target.innerText)}>
                  <p>{res.logradouro}, {res.bairro}, {res.cep}, {res.localidade}, {res.uf}</p>
                </button>
              ))}
            </BoxAutoComplete>
          )}
        </BoxInputs>

        <BoxInputs>
          <h3>Tipo de espaço</h3>
          <div className="grid_checkbox">
            {categories.map((category, index) => (
              <label key={index} className="checkbox">
                {category.name}
                <input type="checkbox" name={category.name.toLowerCase()} value={category.name} />
                <span className={themeIsActive && "dark_checkbox"}><FaCheck className="icons" /></span>
              </label>
            ))}

          </div>
        </BoxInputs>

        <BoxInputs>
          <h3>Metragem do espaço - m²</h3>
          <GridInput>
            <input className={themeIsActive && "dark_input"} type="number" placeholder="min" />
            <span>ex: 30</span>
          </GridInput>
          <GridInput>
            <input className={themeIsActive && "dark_input"} type="number" placeholder="max" />
            <span>ex: 100</span>
          </GridInput>
        </BoxInputs>

        <BoxButtons>
          <button><BiSearch size={20} /> Buscar</button>
        </BoxButtons>
      </Container>
    )
  );
}