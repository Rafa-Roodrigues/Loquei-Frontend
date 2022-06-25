import { useState } from 'react';

import Modal from 'react-modal';

import { BiArea } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';

import { CardVerticalContainer, CardHorizontalContainer } from "./styles";
import { AlertModal } from '../../../../components/AlertModal';

export function CardVertical({getValue, isDelete, listAnnouncements}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const title = getValue('title');
  const address = getValue('address');
  const number = getValue('number');
  const city = getValue('city');
  const state = getValue('state');
  const meters = getValue('meters');

  function haddleChangeStateModal() {
    setModalIsOpen(!modalIsOpen);
  }

  return (
    <CardVerticalContainer>
      <div className="box_image">
      </div>
      <div className="box_info">
      <div>
          <h2>{title}</h2>
          <p>
            {address ? `${address}, ` : ''} 
            {number ? `${number}, ` : ''} 
            {city ? `${city}, ` : ''}
            {state ? `${state}` : ''}
          </p>

          <ul>
            {meters ? (
              <>
                <li>Detalhes:</li>
                <li><BiArea className="icons" size={16} /> {meters}m²</li>
              </>
            ) : ''}
          </ul>
        </div>
      
        <a className="details">Detalhes <BsArrowRight className="icons" size={16} /></a> 
      </div>

      <AlertModal 
        isOpen={modalIsOpen} 
        onRequestClose={haddleChangeStateModal} 
        text="Você deseja mesmo excluir este post?"
        nameAction="Deletar"
      />
    </CardVerticalContainer>
  );
}

export function CardHorizontal({getValue, isDelete, listAnnouncements}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const title = getValue('title');
  const address = getValue('address');
  const number = getValue('number');
  const city = getValue('city');
  const state = getValue('state');
  const meters = getValue('meters');

  function haddleChangeStateModal() {
    setModalIsOpen(!modalIsOpen);
  }

  return (
    <CardHorizontalContainer>
      <div className="box_image">
      </div>

      <div className="box_info">
        <div>
          <h2>{title}</h2>
          <p>
            {address ? `${address}, ` : ''} 
            {number ? `${number}, ` : ''} 
            {city ? `${city}, ` : ''}
            {state ? `${state}` : ''}
          </p>

          <ul>
            {meters ? (
              <>
                <li>Detalhes:</li>
                <li><BiArea className="icons" size={16} /> {meters}m²</li>
              </>
            ) : ''}
          </ul>
        </div>
      
        <a className="details">Detalhes <BsArrowRight className="icons" size={16} /></a> 
      </div>
      <AlertModal 
        isOpen={modalIsOpen} 
        onRequestClose={haddleChangeStateModal} 
        text="Você deseja mesmo excluir este post?"
        nameAction="Deletar"
      />
    </CardHorizontalContainer>
  );
}