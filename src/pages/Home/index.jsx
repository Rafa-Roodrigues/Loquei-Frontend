import { Container } from "./styles";

import Helmet from "react-helmet";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { CardVertical, CardHorizontal } from "../../components/Cards";

import { Map } from "../../components/Map";
import { CategoryCarousel } from "../../components/CategoryCarousel";

const dados = {
	meter: "30",
	title: "Garagem grande - SP/ZN",
	description: "Garagem espaçosa que pode virar um comercio na zona norte de São Paulo. Esta localizado no bairro Parque Casa de Pedra.",
	id: 12,
	id_adress: 12,
	id_category: 1,
	id_user: 1,
	
	images: [
		{
			etag: "\"0x8DA52DF0C8FE708\"",
			id: 35,
			id_announcement: 12,
			name: "8c8591235587d2ce3bbf5973f41ccfd2-Captura de Tela (2).png",
			url: "https://claudia.abril.com.br/wp-content/uploads/2020/02/garagem1-1.jpg"
		}
	],
	
	adress: [
		{
			adress: "Avenida dos Autonomistas",
			city: "Osasco",
			complement: "Casa",
			district: "Vila Yara",
			id: 12,
			latitude: "-23.538978",
			longitude: "-46.765336",
			number: "1400",
			state: "SP",
			zip_code: "06020-010"
		}
	],
	
	category: {
		id: 1,
		id_image: 1,
		name: "Loja"
	}
}

export function Home() {
  return (
    <Container>
      <Helmet>
        <title>Loquei | Home</title>
      </Helmet>

      <Header />
      <CategoryCarousel />
			<Map />
      <main className="content">
        <section className="box_cards_vertical">
          <span className="title_box">Resultados da sua busca:</span>

          <div className="box_margin">
            <div className="cards">
              <CardVertical data={dados} />
            </div>
            <div className="cards">
              <CardVertical data={dados} />
            </div>
            <div className="cards">
              <CardVertical data={dados} />
            </div>
            <div className="cards">
              <CardVertical data={dados} />
            </div>
            <div className="cards">
              <CardVertical data={dados} />
            </div>
            <div className="cards">
              <CardVertical data={dados} />
            </div>
            <div className="cards">
              <CardVertical data={dados} />
            </div>
          </div>
        </section>

        <section className="box_cards_horizontal">
          <CardHorizontal data={dados} />
          <CardHorizontal data={dados} />
          <CardHorizontal data={dados} />
          <CardHorizontal data={dados} />
          <CardHorizontal data={dados} />
          <CardHorizontal data={dados} />
        </section>
      </main>
      <Footer/>
    </Container>
  );
}