import { Header } from '../../components/Header';
import { CardHorizontal } from '../../components/Cards';

import { BiTargetLock } from 'react-icons/bi';

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
              <span>Localização</span>
              <input class="input_busca" type="text" placeholder="Digite algum endereço" />
              <BiTargetLock className="icon" size="25 " />
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