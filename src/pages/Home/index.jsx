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

const dados = {
	meter: "150",
	title: "Shopping União",
	description: "Shopping que fica na cidade de osasco",
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
			url: "https://imagestoredemoday.blob.core.windows.net/imagensprodutos/8c8591235587d2ce3bbf5973f41ccfd2-Captura de Tela (2).png"
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
      <PreviewFilter />
      
      <main className="content">
        <PreviewEstados />

        <CarroselCards />

        <section className="box_cards_vertical">
          <span className="title_box">Anúncios para você</span>

          <div className="box_margin">
            <div className="cards">
              <CardVertical data={dados} />
            </div>
          </div>
        </section>

        <section className="box_cards_horizontal">
          <CardHorizontal 
            data={dados}
          />
        </section>

        <CategorySpecifications />
      </main>
      <Footer/>
    </Container>
  );
}