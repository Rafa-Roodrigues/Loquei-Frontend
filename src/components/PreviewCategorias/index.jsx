import { Container } from "./styles";

import { Link } from "react-router-dom";

import { AiFillShop } from 'react-icons/ai';
import { BiCar, BiCurrentLocation } from 'react-icons/bi';
import { BsBoundingBoxCircles } from 'react-icons/bs';
import { MdOutlineMapsHomeWork, MdOutlineBusiness } from 'react-icons/md';
import { RiHomeSmile2Line } from 'react-icons/ri';

export function PreviewCategorias() {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/buscar">
            <MdOutlineMapsHomeWork className="icons" size="30" />
          </Link>
          <span>Casa & Apartamentos</span>
        </li>
        <li>
          <Link to="/buscar">
            <BiCar className="icons" size="30" />
          </Link>
          <span>Garagem</span>
        </li>
        <li>
          <Link to="/buscar">
            <AiFillShop className="icons" size="30" />
          </Link>
          <span>Comércio</span>
        </li>
        <li>
          <Link to="/buscar">
            <RiHomeSmile2Line className="icons" size="30" />
          </Link>
          <span>Salão de Festa</span>
        </li>
        <li>
          <Link to="/buscar">
            <BsBoundingBoxCircles className="icons" size="30" />
          </Link>
          <span>Box</span>
        </li>
        <li>
          <Link to="/buscar">
            <MdOutlineBusiness className="icons" size="30" />
          </Link>
          <span>Escritório</span>
        </li>
        <li>
          <Link to="/buscar">
            <BiCurrentLocation className="icons" size="30" />
          </Link>
          <span>Pequenos espaços</span>
        </li>
      </ul>
    </Container>
  );
}