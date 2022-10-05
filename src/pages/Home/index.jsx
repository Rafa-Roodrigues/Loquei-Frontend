import { Container } from "./styles";
import { useState } from 'react';

import Helmet from "react-helmet";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { CardHorizontal } from './components/CardHorizontal';
import { CardVertical } from './components/CardVertical';

import { Map } from "../../components/Map2";
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
      <Footer />
    </Container>
  );
}