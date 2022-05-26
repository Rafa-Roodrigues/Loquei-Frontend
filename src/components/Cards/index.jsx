import { useState } from 'react';
import { Link } from 'react-router-dom';

import Modal from 'react-modal';

import { BiArea } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';

import { CardVerticalContainer, CardHorizontalContainer } from "./styles";
import { AlertModal } from '../AlertModal';

export function CardVertical(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function haddleChangeStateModal() {
    setModalIsOpen(!modalIsOpen);
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
            <li>Detalhes:</li>
            <li><BiArea className="icons" size={16} /> 100m²</li>
          </ul>

        </Link>
        {
          !props.delete 
          ? <Link className="details" to="/">Detalhes <BsArrowRight className="icons" size={16} /></Link> 
          : <button onClick={haddleChangeStateModal}>Excluir anúncio</button>
        }
      </div>

      <AlertModal isOpen={modalIsOpen} onRequestClose={haddleChangeStateModal} />
    </CardVerticalContainer>
  );
}

export function CardHorizontal(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function haddleChangeStateModal() {
    setModalIsOpen(!modalIsOpen);
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
          <li>Detalhes:</li>
          <li><BiArea className="icons" size={16} /> 100m²</li>
        </ul>

        {
          !props.delete 
          ? <Link to="/">Detalhes <BsArrowRight className="icons" size={16} /></Link>
          : <button className="delete" onClick={haddleChangeStateModal}>Excluir anúncio</button>
        }
      </div>
      <AlertModal isOpen={modalIsOpen} onRequestClose={haddleChangeStateModal} />
    </CardHorizontalContainer>
  );
}