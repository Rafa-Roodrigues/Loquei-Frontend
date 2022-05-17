import { Link } from "react-router-dom";

import { Header } from '../../components/Header';
import { CardHorizontal, CardVertical } from "../../components/Cards";

import { MeusAnunciosContainer } from "./styles";
import imgNone from '../../assets/img/img-none.jpg';

export function MeusAnuncios() {
  return (
    <MeusAnunciosContainer>
      <Header />
      <div class="box_grid">
        <aside>
          <form>
            <h3>Encontar meus anúncios</h3>
            <input type="text" placeholder="Digite alguma informação do anuncio" />
          </form>

          <Link to="/">
            <span></span>
            <p>Criar um anúncio</p>
          </Link>
        </aside>
        <section className="box_content">
          <div className="card_vertical">
            <CardVertical 
              imgURL={imgNone}
              title="Garagem grande"
              address="Rua Fidélis Papini, 28 - Vila Prudente"
              delete={true}
            />
            <CardVertical 
              imgURL={imgNone}
              title="Garagem grande"
              address="Rua Fidélis Papini, 28 - Vila Prudente"
              delete={true}
            />
            <CardVertical 
              imgURL={imgNone}
              title="Garagem grande"
              address="Rua Fidélis Papini, 28 - Vila Prudente"
              delete={true}
            />
            <CardVertical 
              imgURL={imgNone}
              title="Garagem grande"
              address="Rua Fidélis Papini, 28 - Vila Prudente"
              delete={true}
            />
            <CardVertical 
              imgURL={imgNone}
              title="Garagem grande"
              address="Rua Fidélis Papini, 28 - Vila Prudente"
              delete={true}
            />
            <CardVertical 
              imgURL={imgNone}
              title="Garagem grande"
              address="Rua Fidélis Papini, 28 - Vila Prudente"
              delete={true}
            />
            <CardVertical 
              imgURL={imgNone}
              title="Garagem grande"
              address="Rua Fidélis Papini, 28 - Vila Prudente"
              delete={true}
            />
            <CardVertical 
              imgURL={imgNone}
              title="Garagem grande"
              address="Rua Fidélis Papini, 28 - Vila Prudente"
              delete={true}
            />
          </div>

          <div className="card_horizontal">
            <CardHorizontal 
              imgURL={imgNone}
              title="Garagem grande"
              address="Rua Fidélis Papini, 28 - Vila Prudente"
              delete={true}
            />
            <CardHorizontal 
              imgURL={imgNone}
              title="Garagem grande"
              address="Rua Fidélis Papini, 28 - Vila Prudente"
              delete={true}
            />
          </div>
        </section>
      </div>
    </MeusAnunciosContainer>
  );
}