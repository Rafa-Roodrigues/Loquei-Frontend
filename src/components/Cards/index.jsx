import { Link } from 'react-router-dom';

import { BiArea, BiCar, BiBed } from 'react-icons/bi';
import { MdOutlineShower } from 'react-icons/md';
import { BsArrowRight } from 'react-icons/bs';

import { CardVerticalContainer, CardHorizontalContainer } from "./styles";

export function CardVertical(props) {
  return (
    <CardVerticalContainer>
      <img src={props.imgURL} alt="..." />
      <div className="box_info">
        <Link to="/">
          <h2>{props.title}</h2>
          <p>{props.address}</p>

          <ul>
            <li><BiArea className="icons" size={16} /> 100m²</li>
            <li><MdOutlineShower className="icons" size={16} /> 1</li>
            <li><BiBed className="icons" size={16} /> 0</li>
            <li><BiCar className="icons" size={16} /> 10</li>
          </ul>

          <span to="/">Mais informações...</span>
        </Link>
      </div>
    </CardVerticalContainer>
  );
}

export function CardHorizontal(props) {
  return (
    <CardHorizontalContainer>
      <img src={props.imgURL} alt="..." />
      <div className="box_info">
        <h2>{props.title}</h2>
        <p>{props.address}</p>

        <ul>
          <li><BiArea className="icons" size={16} /> 100m²</li>
          <li><MdOutlineShower className="icons" size={16} /> 1</li>
          <li><BiBed className="icons" size={16} /> 0</li>
          <li><BiCar className="icons" size={16} /> 10</li>
        </ul>

        <Link to="/">Contatar <BsArrowRight className="icons" size={16} /></Link>
      </div>
    </CardHorizontalContainer>
  );
}