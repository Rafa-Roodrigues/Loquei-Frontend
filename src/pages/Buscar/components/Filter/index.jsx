import { BoxInputs, Container, GridInput, BoxAutoComplete } from './styles';

import { useEffect, useState } from 'react';

import { useTheme } from '../../../../hooks/useTheme';

import { FaCheck } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BiArrowToLeft } from 'react-icons/bi';

import axios from 'axios';
import { get } from 'react-hook-form';

//https://api.tomtom.com/search/2/search/Rua.json?countrySet=brazil&minFuzzyLevel=1&maxFuzzyLevel=2&view=Unified&relatedPois=off&key=a1UphnSvWEVz0BN9R28fb0FmJXCFpgvW

export function Filter() {
  const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

  const { themeIsActive } = useTheme();

  const [ valueInput, setValueInput ] = useState('');
  const [ responseAddress, setResponseAddress ] = useState([]);
  const [ responseCity, setResponseCity ] = useState([]);
  const [ getState, setGetState ] = useState([]);
  const [ uf, setUf ] = useState([]);
  const [ city, setCity ] = useState([]);

  async function getStates() {
    const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`);
    setGetState(response.data);
  }

  async function handleSearchAddress() {
    const response = await axios.get(`https://viacep.com.br/ws/${uf}/${city}/${valueInput}/json/`);
    setResponseAddress(response.data);
  }

  async function handleSearchCity(state) {
    const response = await axios.get(`http://api.geonames.org/searchJSON?q=${state.split('|')[1]}&country=BR&featureClass=A&username=mind`);
    setResponseCity(response.data.geonames);
    setUf(state.split(' | ')[0]);
  }

  useEffect(() => {
    getStates();
  }, []);

  useEffect(() => {
    if(valueInput) {
      handleSearchAddress();
    }
  }, [valueInput]);

  return (
    <Container>
      <BoxInputs>
        <h3>Localização</h3>
        <input 
          className={themeIsActive && "dark_input"} 
          type="text" 
          placeholder="Digite algum endereço"
          onChange={event => setValueInput(event.target.value)}
        />
        <HiOutlineLocationMarker className="icon" size="25" />

        {(valueInput.length > 0 && responseAddress.length > 0) && (
          <BoxAutoComplete>
            {responseAddress.map(res => (
              <button type="button">
                <h4>{res.logradouro}, {res.bairro}</h4>
                <p>CEP: {res.cep}</p>
                <p>{res.localidade} - {res.uf}</p>
              </button>
            ))}
          </BoxAutoComplete>
        )}
      </BoxInputs>

      <BoxInputs>
        <h3>Estado e cidade</h3>

        <select onChange={event => handleSearchCity(event.target.value)}>
          {getState.map(states => (
            <option>{states.sigla} | {states.nome}</option>
          ))}
        </select>

        <select onChange={event => setCity(event.target.value)}>
          {responseCity.map((city, index) => (
            <>
              {index > 0 && (
                <option>{city.toponymName}</option>
              )}
            </>
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
          <input className={themeIsActive && "dark_input"} type="number" placeholder="de" />
          <span>ex: 30</span>
        </GridInput>
        <GridInput>
          <input className={themeIsActive && "dark_input"} type="number" placeholder="até" />
          <span>ex: 100</span>
        </GridInput>
      </BoxInputs>
    </Container>
  );
}