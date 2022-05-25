import { useState } from 'react';
import { Link } from 'react-router-dom';

import { BiArea, BiCar, BiBed } from 'react-icons/bi';
import { MdOutlineShower } from 'react-icons/md';
import { BsArrowRight } from 'react-icons/bs';

import { CardVerticalContainer, CardHorizontalContainer } from "./styles";

export function CardVertical(props) {
  const [statePop, setStatePop] = useState(false);

  function haddleOpenPop() {
    setStatePop(true);
  }

  function haddleClosePop() {
    setStatePop(false);
  }

  return (
    <CardVerticalContainer>
      {!props.imgURL ? (
        <div className="box_image">
        </div>
      ) : (
        <img src={props.imgURL} alt={props.title} />
      )}
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

        </Link>
        {
          !props.delete 
          ? <Link className="information" to="/">Mais informações...</Link> 
          : <button onClick={haddleOpenPop}>Excluir anúncio</button>
        }
      </div>

      {(statePop) && (
        <div className="pop_confirmation">
          <div className="pop">
            <h2>Confirme!</h2>
            <p>Você deseja mesmo excluir este post?</p>
            <div className="box_buttons">
              <button className="delete">Deletar</button>
              <button className="cancel" onClick={haddleClosePop}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </CardVerticalContainer>
  );
}

export function CardHorizontal(props) {
  const [statePop, setStatePop] = useState(false);

  function haddleOpenPop() {
    setStatePop(true);
  }

  function haddleClosePop() {
    setStatePop(false);
  }

  return (
    <CardHorizontalContainer>
      {!props.imgURL ? (
        <div className="box_image">
        </div>
      ) : (
        <img src={props.imgURL} alt={props.title} />
      )}
      <div className="box_info">
        <h2>{props.title}</h2>
        <p>{props.address}</p>

        <ul>
          <li><BiArea className="icons" size={16} /> 100m²</li>
          <li><MdOutlineShower className="icons" size={16} /> 1</li>
          <li><BiBed className="icons" size={16} /> 0</li>
          <li><BiCar className="icons" size={16} /> 10</li>
        </ul>

        {
          !props.delete 
          ? <Link to="/">Contatar <BsArrowRight className="icons" size={16} /></Link>
          : <button className="delete" onClick={haddleOpenPop}>Excluir anúncio</button>
        }

      {(statePop) && (
        <div className="pop_confirmation">
          <div className="pop">
            <h2>Confirme!</h2>
            <p>Você deseja mesmo excluir este post?</p>
            <div className="box_buttons">
              <button className="delete">Deletar</button>
              <button className="cancel" onClick={haddleClosePop}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
      </div>
    </CardHorizontalContainer>
  );
}