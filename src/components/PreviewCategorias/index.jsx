import { Container } from "./styles";

import { useRef } from "react";
import { Link } from "react-router-dom";

import { AiFillShop } from 'react-icons/ai';
import { BiCar, BiCurrentLocation, BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { BsBoundingBoxCircles } from 'react-icons/bs';
import { RiHomeSmile2Line } from 'react-icons/ri';

export function PreviewCategorias() {
  const carousel = useRef(null)

  function handleLeftClick(event) {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;

    event.preventDefault();
  }

  function handleRightClick(event) {
    carousel.current.scrollLeft += carousel.current.offsetWidth;
    
    event.preventDefault();
  }

  return (
    <Container>
      <button onClick={handleLeftClick}>
        <BiLeftArrowAlt size={20} color="#FFF" />
      </button>
      <button onClick={handleRightClick}>
        <BiRightArrowAlt size={20} color="#FFF" />
      </button>
      <ul ref={carousel}>
        <li>
          <Link to="/buscar">
            <BiCar className="icons" size="23" />
          </Link>
          <span>Garagem</span>
        </li>
        <li>
          <Link to="/buscar">
            <RiHomeSmile2Line className="icons" size="23" />
          </Link>
          <span>Salão de Festa</span>
        </li>
        <li>
          <Link to="/buscar">
            <BsBoundingBoxCircles className="icons" size="22" />
          </Link>
          <span>Box</span>
        </li>
        <li>
          <Link to="/buscar">
            <AiFillShop className="icons" size="23" />
          </Link>
          <span>Comércio</span>
        </li>
        <li>
          <Link to="/buscar">
            <BiCurrentLocation className="icons" size="23" />
          </Link>
          <span>Pequenos espaços</span>
        </li>
      </ul>
    </Container>
  );
}