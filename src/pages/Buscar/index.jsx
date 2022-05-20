import { useState } from 'react';

import { Header } from '../../components/Header';
import { CardHorizontal } from '../../components/Cards';
import { useTheme } from '../../hooks/useTheme';

import { BiFilterAlt, BiTargetLock, BiSearch } from 'react-icons/bi';
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
            {/* Buscar */}
            <div className="box_input">
              <h3>Localização</h3>
              <input className={themeIsActive && "dark"} type="text" placeholder="Digite algum endereço" />
              <BiTargetLock className="icon" size="25 " />
            </div>
            {/* Checkbox */}
            <div className="box_input">
              <h3>Tipo de espaço</h3>
              <div className="grid_checkbox">
                <label className="checkbox">
                  Casa
                  <input type="checkbox" placeholder="Casa" />
                  <span><FaCheck className="icons" /></span>
                </label>
                <label className="checkbox">
                  Pequenos espaços
                  <input type="checkbox" placeholder="Casa" />
                  <span><FaCheck className="icons" /></span>
                </label>
                <label className="checkbox">
                  Garagem
                  <input type="checkbox" placeholder="Casa" />
                  <span><FaCheck className="icons" /></span>
                </label>
                <label className="checkbox">
                  Salão de festa
                  <input type="checkbox" placeholder="Casa" />
                  <span><FaCheck className="icons" /></span>
                </label>
                <label className="checkbox">
                  Comércio
                  <input type="checkbox" placeholder="Casa" />
                  <span><FaCheck className="icons" /></span>
                </label>
                <label className="checkbox">
                  Escritório
                  <input type="checkbox" placeholder="Casa" />
                  <span><FaCheck className="icons" /></span>
                </label>
                <label className="checkbox">
                  Box
                  <input type="checkbox" placeholder="Casa" />
                  <span><FaCheck className="icons" /></span>
                </label>
              </div>
            </div>
            {/* Metragem */}
            <div className="box_input">
              <h3>Metragem do espaço - m²</h3>
              <div className="grid_input">
                <input className={themeIsActive && "dark"} type="number" placeholder="de" />
                <span>ex: 30</span>
              </div>
              <div className="grid_input">
                <input className={themeIsActive && "dark"} type="number" placeholder="até" />
                <span>ex: 100</span>
              </div>
            </div>
            {/* Quantidade de Garagens */}
            <div className="box_input">
              <h3>Quantidade de garagens</h3>
              <div className="grid_input">
                <input className={themeIsActive && "dark"} type="number" placeholder="de" />
                <span>ex: 0</span>
              </div>
              <div className="grid_input">
                <input className={themeIsActive && "dark"} type="number" placeholder="até" />
                <span>ex: 15</span>
              </div>
            </div>
            {/* Quantidade de Quartos */}
            <div className="box_input">
              <h3>Quantidade de quartos</h3>
              <div className="grid_input">
                <input className={themeIsActive && "dark"} type="number" placeholder="de" />
                <span>ex: 2</span>
              </div>
              <div className="grid_input">
                <input className={themeIsActive && "dark"} type="number" placeholder="até" />
                <span>ex: 4</span>
              </div>
            </div>
            {/* Quantidade de Banheiros */}
            <div className="box_input">
              <h3>Quantidade de banheiros</h3>
              <div className="grid_input">
                <input className={themeIsActive && "dark"} type="number" placeholder="de" />
                <span>ex: 0</span>
              </div>
              <div className="grid_input">
                <input className={themeIsActive && "dark"} type="number" placeholder="até" />
                <span>ex: 15</span>
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