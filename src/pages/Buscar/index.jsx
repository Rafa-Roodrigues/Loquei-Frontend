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
        <aside className="box_filtro">
          <form>
            {/* Buscar */}
            <div className="box_input">
              <h3>Localização</h3>
              <input class="input_busca" type="text" placeholder="Digite algum endereço" />
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
                <input type="text" placeholder="de" />
                <span>ex: 30</span>
              </div>
              <div className="grid_input">
                <input type="text" placeholder="até" />
                <span>ex: 100</span>
              </div>
            </div>
            {/* Quantidade de Garagens */}
            <div className="box_input">
              <h3>Quantidade de garagens</h3>
              <div className="grid_input">
                <input type="text" placeholder="de" />
                <span>ex: 0</span>
              </div>
              <div className="grid_input">
                <input type="text" placeholder="até" />
                <span>ex: 15</span>
              </div>
            </div>
            {/* Quantidade de Quartos */}
            <div className="box_input">
              <h3>Quantidade de quartos</h3>
              <div className="grid_input">
                <input type="text" placeholder="de" />
                <span>ex: 2</span>
              </div>
              <div className="grid_input">
                <input type="text" placeholder="até" />
                <span>ex: 4</span>
              </div>
            </div>
            {/* Quantidade de Banheiros */}
            <div className="box_input">
              <h3>Quantidade de banheiros</h3>
              <div className="grid_input">
                <input type="text" placeholder="de" />
                <span>ex: 0</span>
              </div>
              <div className="grid_input">
                <input type="text" placeholder="até" />
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