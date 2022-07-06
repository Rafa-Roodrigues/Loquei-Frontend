import { Container } from "./styles";
import { useEffect, useState } from 'react';

import Helmet from "react-helmet";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { CardHorizontal } from './components/CardHorizontal';
import { CardVertical } from './components/CardVertical';

import { Map } from "../../components/Map";
import { CategoryCarousel } from "../../components/CategoryCarousel";

export function Home() {
  const [announcementsFiltered, setAnnouncementsFiltered] = useState([]);

  return (
    <Container>
      <Helmet>
        <title>Loquei | Home</title>
      </Helmet>

      <Header />
      <CategoryCarousel />
      <Map announcementsFiltered={announcementsFiltered} setAnnouncementsFiltered={setAnnouncementsFiltered} />
      <main className="content">
        {announcementsFiltered.length > 0 ? (
          <>
            <section className="box_cards_vertical">
              <span className="title_box">Resultados da sua busca:</span>

              <div className="box_margin">
                {announcementsFiltered.map((announcement, index) => (
                  <div className="cards" key={index}>
                    <CardVertical data={announcement} />
                  </div>
                ))}
              </div>
            </section>

            <section className="box_cards_horizontal">
              {announcementsFiltered.map((announcement, index) => (
                <CardHorizontal data={announcement} key={index} />
              ))}
            </section>
          </>
        ) : (
          <h2 id="not_found">Nenhum anúncio encontrado nas proximidades...</h2>
        )}

      </main>
      <Footer />
    </Container>
  );
}