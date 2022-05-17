import { Header } from '../../components/Header';
import { CardHorizontal } from '../../components/Cards';

import { BiTargetLock } from 'react-icons/bi';
import { FaCheck } from 'react-icons/fa';

import { ContainerBuscar } from "./styles";
import imgNone from '../../assets/img/img-none.jpg';


export function Buscar() {
  return (
    <ContainerBuscar>
      <Header />

      <div className="box_grid">
        <section className="box_filtro">
          <form>
            <div className="box_input">
              <h3>Localização</h3>
              <input class="input_busca" type="text" placeholder="Digite algum endereço" />
              <BiTargetLock className="icon" size="25 " />
            </div>
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
          </form>
        </section>
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