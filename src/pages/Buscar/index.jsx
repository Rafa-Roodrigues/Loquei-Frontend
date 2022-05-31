import { useState } from 'react';

import Helmet from "react-helmet";

import { Header } from '../../components/Header';
import { CardHorizontal } from '../../components/Cards';
import { useTheme } from '../../hooks/useTheme';

import { BiFilterAlt, BiSearch } from 'react-icons/bi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { FaCheck } from 'react-icons/fa';

import { ContainerBuscar } from "./styles";
import imgNone from '../../assets/img/img-none.jpg';


export function Buscar() {
  const { themeIsActive } = useTheme();
  const [stateMenu, setStateMenu] = useState('block');

  function handleOpenMenu() {
    setStateMenu('block');
    console.log(stateMenu);
  }
  
  function handleCloseMenu() {
    setStateMenu('none');
    console.log(stateMenu);
  }

  return (
    <ContainerBuscar>
      <Helmet>
        <title>Loquei | Buscar</title>
      </Helmet>
      <Header />

      <div className="box_grid">
        <section className="box_mobile">
          <form>
            <input type="text" placeholder="Pesquisar por algum local..." />
            <button><BiSearch size={30} /></button>
          </form>
          <button className="button_open" onClick={handleOpenMenu}>
            <BiFilterAlt size={30} />
          </button>
        </section>
        <aside className="box_filtro" style={{display: stateMenu}}>
          <button className="button_close" onClick={handleCloseMenu}>
            <IoMdClose size={20} color="#FFF" />
          </button>
          <form>
            <div className="box_input">
              <h3>Localização</h3>
              <input className={themeIsActive && "dark_input"} type="text" placeholder="Digite algum endereço" />
              <HiOutlineLocationMarker className="icon" size="25 " />
            </div>

            <div className="box_input">
              <h3>Tipo de espaço</h3>
              <div className="grid_checkbox">
                <label className="checkbox">
                  Comercial
                  <input type="checkbox" placeholder="Casa" />
                  <span className={themeIsActive && "dark_checkbox"}><FaCheck className="icons" /></span>
                </label>
                <label className="checkbox">
                  Pequenos espaços
                  <input type="checkbox" placeholder="Casa" />
                  <span className={themeIsActive && "dark_checkbox"}><FaCheck className="icons" /></span>
                </label>
                <label className="checkbox">
                  Garagem
                  <input type="checkbox" placeholder="Casa" />
                  <span className={themeIsActive && "dark_checkbox"}><FaCheck className="icons" /></span>
                </label>
                <label className="checkbox">
                  Salão de festa
                  <input type="checkbox" placeholder="Casa" />
                  <span className={themeIsActive && "dark_checkbox"}><FaCheck className="icons" /></span>
                </label>
                <label className="checkbox">
                  Box
                  <input type="checkbox" placeholder="Casa" />
                  <span className={themeIsActive && "dark_checkbox"}><FaCheck className="icons" /></span>
                </label>
              </div>
            </div>

            <div className="box_input">
              <h3>Metragem do espaço - m²</h3>
              <div className="grid_input">
                <input className={themeIsActive && "dark_input"} type="number" placeholder="de" />
                <span>ex: 30</span>
              </div>
              <div className="grid_input">
                <input className={themeIsActive && "dark_input"} type="number" placeholder="até" />
                <span>ex: 100</span>
              </div>
            </div>
          </form>
        </aside>
        <section className="box_content">
          <CardHorizontal 
            imgURL={imgNone}
            title="Garagem grande"
            address="Rua Fidélis Papini, 28 - Vila Prudente"
          />
          <CardHorizontal 
            imgURL={imgNone}
            title="Garagem grande"
            address="Rua Fidélis Papini, 28 - Vila Prudente"
          />
          <CardHorizontal 
            imgURL={imgNone}
            title="Garagem grande"
            address="Rua Fidélis Papini, 28 - Vila Prudente"
          />
        </section>
        <section className="box_anuncios">
          anuncios
        </section>
      </div>
    </ContainerBuscar>
  );
}