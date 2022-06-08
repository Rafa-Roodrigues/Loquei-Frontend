import { Container } from "./styles";

import Helmet from "react-helmet";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { CardVertical, CardHorizontal } from "../../components/Cards";

import { PreviewFilter } from "../../components/PreviewFilter";
import { PreviewEstados } from "../../components/PreviewEstados";
import { CarroselCards } from "../../components/CarroselCards";
import { CategorySpecifications } from "../../components/CategorySpecifications";

import imgNone from '../../assets/img/img-none.jpg';

export function Home() {
  return (
    <Container>
      <Helmet>
        <title>Loquei | Home</title>
      </Helmet>

      <Header />
      <PreviewFilter />
      
      <main className="content">
        <PreviewEstados />

        <CarroselCards />

        <section className="box_cards_vertical">
          <span className="title_box">Anúncios para você</span>

          <div className="box_margin">
            <div className="cards">
              <CardVertical 
                imgURL={imgNone}
                title="Garagem grande"
                address="Rua Fidélis Papini, 28 - Vila Prudente"
              />
            </div>
            <div className="cards">
              <CardVertical 
                imgURL={imgNone}
                title="Garagem grande"
                address="Rua Fidélis Papini, 28 - Vila Prudente"
              />
            </div>
            <div className="cards">
              <CardVertical 
                imgURL={imgNone}
                title="Garagem grande"
                address="Rua Fidélis Papini, 28 - Vila Prudente"
              />
            </div>
            <div className="cards">
              <CardVertical 
                imgURL={imgNone}
                title="Garagem grande"
                address="Rua Fidélis Papini, 28 - Vila Prudente"
              />
            </div>
          </div>
        </section>

        <section className="box_cards_horizontal">
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

        <CategorySpecifications />
      </main>
      <Footer/>
    </Container>
  );
}