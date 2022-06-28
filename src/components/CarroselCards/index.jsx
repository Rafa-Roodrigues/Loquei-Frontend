import { Container } from "./styles";
import { useRef } from "react";

import { CardVertical } from "../Cards";
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

import imgNone from '../../assets/img/img-none.jpg';

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
			adress: "Rua Elias de Almeida",
			city: "São Paulo",
			complement: "Garagem",
			district: "Parque Casa de Pedra",
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

export function CarroselCards() {
  const carousel = useRef(null);

  function handleLeftClick() {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  function handleRightClick() {
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  return (
    <Container>
      <span className="title">Destaque</span>

      <button type="button" onClick={handleLeftClick} className="button_arrow">
        <BiLeftArrowAlt size={20} color="#FFF" />
      </button>
      <button type="button" onClick={handleRightClick} className="button_arrow">
        <BiRightArrowAlt size={20} color="#FFF" />
      </button>

      <div className="box_carousel" ref={carousel}>
        <div className="card">
          <CardVertical
            key="1"
            data={dados}
          />
        </div>
        <div className="card">
          <CardVertical
            key="2"
            data={dados}
          />
        </div>
        <div className="card">
          <CardVertical
            key="3"
            data={dados}
          />
        </div>
        <div className="card">
          <CardVertical
            key="4"
            data={dados}
          />
        </div>
        <div className="card">
          <CardVertical
            key="5"
            data={dados}
          />
        </div>
        <div className="card">
          <CardVertical
            key="6"
            data={dados}
          />
        </div>
      </div>
    </Container>
  );
}