import { Container } from "./styles";
import { useRef } from "react";

import { CardVertical } from "../Cards";
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

import imgNone from '../../assets/img/img-none.jpg';

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
            imgURL={imgNone}
            title="Garagem grande"
            address="Rua Fidélis Papini, 28 - Vila Prudente"
          />
        </div>
        <div className="card">
          <CardVertical 
            key="2"
            imgURL={imgNone}
            title="Garagem grande"
            address="Rua Fidélis Papini, 28 - Vila Prudente"
          />
        </div>
        <div className="card">
          <CardVertical 
            key="3"
            imgURL={imgNone}
            title="Garagem grande"
            address="Rua Fidélis Papini, 28 - Vila Prudente"
          />
        </div>
        <div className="card">
          <CardVertical 
            key="4"
            imgURL={imgNone}
            title="Garagem grande"
            address="Rua Fidélis Papini, 28 - Vila Prudente"
          />
        </div>
        <div className="card">
          <CardVertical 
            key="5"
            imgURL={imgNone}
            title="Garagem grande"
            address="Rua Fidélis Papini, 28 - Vila Prudente"
          />
        </div>
        <div className="card">
          <CardVertical 
            key="6"
            imgURL={imgNone}
            title="Garagem grande"
            address="Rua Fidélis Papini, 28 - Vila Prudente"
          />
        </div>
      </div>
    </Container>
  );
}