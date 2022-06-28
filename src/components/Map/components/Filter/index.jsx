import { Container, BoxInputs, BoxButtons, BoxAutoComplete, GridInput } from './styles';

import { useEffect, useState } from "react";

import { useTheme } from '../../../../hooks/useTheme';

import { BiSearch } from 'react-icons/bi';
import { FaCheck } from 'react-icons/fa';

import axios from "axios";

export function Filter() {
  const { themeIsActive } = useTheme();

  const [ responseState, setResponseState ] = useState([]);
  const [ responseCity, setResponseCity ] = useState([]);

  const [ currentSelectValueState, setCurrentSelectValueState ] = useState('');
  const [ currentSelectValueCity, setCurrentSelectValueCity ] = useState('');

  const [ valueInput, setValueInput ] = useState('');
  const [ responseAddress, setResponseAddress ] = useState([]);
  const [userInformation, setUserInformation] = useState([]);
  
  async function searchStates() {
    const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`);

    const data = [];

    response.data.map(state => {
      data.push(state.sigla);
    });

    setResponseState(data.sort());
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

  async function getInformationViaIp() {
    const resIp = await axios.get('https://api.ipify.org?format=json');

    const resInformation = await axios.get(`http://ip-api.com/json/${resIp.data.ip}`);

    setUserInformation([resInformation.data.region, resInformation.data.city]);
  }

  async function handleSearchAddress() {
    if(!currentSelectValueState && !currentSelectValueCity) {
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

  useEffect(() => {
    getInformationViaIp();
    searchStates();
  }, []);

  useEffect(() => {
    if(valueInput) {
      handleSearchAddress();
    }
  }, [valueInput]);

  return (
    <Container>
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
            {responseAddress.map(res => (
              <button type="button" onClick={(event) => setValueInput(event.target.innerText)}>
                <p>{res.logradouro}, {res.bairro}, {res.cep}, {res.localidade}, {res.uf}</p>
              </button>
            ))}
          </BoxAutoComplete>
        )}
      </BoxInputs>
      <BoxInputs>
        <h3>Localidade - UF</h3>
        <select 
          className={themeIsActive && "dark_input"}
          onChange={event => handleSearchCity(event.target.value)}
        >
          <option>...</option> 
          {responseState.map(states => (
            <option>{states}</option>
          ))}
        </select>

        <select 
          className={themeIsActive && "dark_input"} 
          onChange={event => handleValueInChangeSelectCity(event.target.value)}
        >
          <option></option> 
          {responseCity.map((city) => (
            <option>{city.split(':')[1]}</option>
          ))}
        </select>
      </BoxInputs>

      <BoxInputs>
        <h3>Tipo de espaço</h3>
        <div className="grid_checkbox">
          <label className="checkbox">
            Comercial
            <input type="checkbox" placeholder="Comercial" />
            <span className={themeIsActive && "dark_checkbox"}><FaCheck className="icons" /></span>
          </label>
          <label className="checkbox">
            Espaço eventual
            <input type="checkbox" placeholder="Espaço eventual" />
            <span className={themeIsActive && "dark_checkbox"}><FaCheck className="icons" /></span>
          </label>
          <label className="checkbox">
            Garagem
            <input type="checkbox" placeholder="Garagem" />
            <span className={themeIsActive && "dark_checkbox"}><FaCheck className="icons" /></span>
          </label>
          <label className="checkbox">
            Outros espaços
            <input type="checkbox" placeholder="Outros espaços" />
            <span className={themeIsActive && "dark_checkbox"}><FaCheck className="icons" /></span>
          </label>
          <label className="checkbox">
            Box
            <input type="checkbox" placeholder="Box" />
            <span className={themeIsActive && "dark_checkbox"}><FaCheck className="icons" /></span>
          </label>
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
  );
}