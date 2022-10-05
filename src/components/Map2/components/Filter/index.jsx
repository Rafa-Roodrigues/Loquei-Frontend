import { Container, ButtonMinimize, ButtonOpen, BoxInputs, BoxButtons, BoxAutoComplete, GridInput } from './styles';

import { useEffect, useState } from "react";

import { useTheme } from '../../../../hooks/useTheme';

import { BiSearch } from 'react-icons/bi';
import { FaCheck } from 'react-icons/fa';

import axios from "axios";
import { api } from '../../../../services/axios';
import { useAnnouncement } from '../../../../hooks/useAnnouncement';

export function Filter({ setAddressCoordinates }) {
  const { themeIsActive } = useTheme();
  const { setAnnouncements } = useAnnouncement();

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const [stateMenu, setStateMenu] = useState(false);

  const [currentSelectValueState, setCurrentSelectValueState] = useState('');
  const [currentSelectValueCity, setCurrentSelectValueCity] = useState('');

  const [selectedCategories, setSelectedCategories] = useState([]);

  const [address, setAddress] = useState('');
  const [responseAddress, setResponseAddress] = useState([]);
  const [userInformation, setUserInformation] = useState([]);
  const [categories, setCategories] = useState([]);

  function handleChangeStateMenu() {
    setStateMenu(!stateMenu);
  }

  function handleSearchCity(state) {
    fetch(`./city/${state}.json`)
    .then(res => res.json())
    .then(res => {
        setCities(res);
        setCurrentSelectValueState(state);
    });
  }

  function handleSearchState() {
    fetch(`./states/states.json`)
    .then(response => response.json())
    .then(response => {
      setStates(response);
    });
  }

  async function handleSearchAddress() {
    const response = await axios.get(`https://viacep.com.br/ws/${currentSelectValueState}/${currentSelectValueCity}/${address}/json/`);
    setResponseAddress(response.data);
  }

  function getCategories() {
    api.get('/categories')
      .then(response => setCategories(response.data))
  }

  function handleForm(e) {
    e.preventDefault();

    let query = `/announcements/filter?`;

    if (address) {
      const [addressFull, district, zip, city, state] = address.split(', ');
      query = query + `endereco=${addressFull}&cidade=${city}&estado=${state}&cep=${zip}`;
    }

    if(min && max) {
      query = query + `&min=${min}&max=${max}`;
    }

    if(min && !max) {
      query = query + `&min=${min}`;
    }

    if(!min && max) {
      query = query + `&max=${max}`;
    }

    if(selectedCategories.length > 0) {
      query = query + "&categorias=";
      
      for (let categoryId of selectedCategories) {
        query = query + categoryId + ";"
      }
    }

    api.get(query)
    .then(response => {
      console.log(response.data)
      setAddressCoordinates([response.data.user.lat, response.data.user.lng])
      setAnnouncements(response.data.announcements);
    });
  }

  function handleSelectCategory(value) {
    const valueExists = selectedCategories.includes(value);

    if(!valueExists) {
      setSelectedCategories([...selectedCategories, value]);
    } else {
      const newArrayCategories = selectedCategories.filter(categoryId => categoryId != value);

      setSelectedCategories(newArrayCategories);
    }
  }

  useEffect(() => {
    handleSearchState();
    getCategories();
  }, []);

  useEffect(() => {
    if (address) {
      handleSearchAddress();
    }
  }, [address]);

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
            onChange={e => handleSearchCity(e.target.value)}
          >
            <option>{userInformation[0]}</option>
            {states.map((states, index) => (
              <option key={index}>{states}</option>
            ))}
          </select>

          <select
            className={themeIsActive && "dark_input"}
            onChange={e => setCurrentSelectValueCity(e.target.value)}
          >
            <option>{userInformation[1]}</option>
            <option>SÃO PAULO</option>

            {cities.map((city, index) => (
              <option key={index}>{city}</option>
            ))}
          </select>
        </BoxInputs>

        <BoxInputs>
          <h3>Pesquise por endereço</h3>
          <input
            placeholder="Digite um endereço..."
            className={themeIsActive && "dark_input"}
            onChange={e => setAddress(e.target.value)}
            value={address}
          />
          {(address.length > 0 && responseAddress.length > 0) && (
            <BoxAutoComplete className="box-autocomplete">
              {responseAddress.map((res, index) => (
                <button key={index} type="button" onClick={(event) => setAddress(event.target.innerText)}>
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
                <input 
                  type="checkbox" 
                  name={category.name.toLowerCase()}
                  value={category.id} 
                  onChange={e => handleSelectCategory(e.target.value)}
                />
                <span className={themeIsActive && "dark_checkbox"}><FaCheck className="icons" /></span>
              </label>
            ))}

          </div>
        </BoxInputs>

        <BoxInputs>
          <h3>Metragem do espaço - m²</h3>
          <GridInput>
            <input 
              className={themeIsActive && "dark_input"} 
              type="number" 
              placeholder="min" 
              onChange={e => setMin(e.target.value)}
            />
            <span>ex: 30</span>
          </GridInput>
          <GridInput>
            <input 
              className={themeIsActive && "dark_input"} 
              type="number" 
              placeholder="max" 
              onChange={e => setMax(e.target.value)}  
            />
            <span>ex: 100</span>
          </GridInput>
        </BoxInputs>

        <BoxButtons>
          <button type='submit'><BiSearch size={20} />Buscar</button>
        </BoxButtons>
      </Container>
    )
  );
}