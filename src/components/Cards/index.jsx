import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Modal from 'react-modal';

import { BiArea } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';

import { CardVerticalContainer, CardHorizontalContainer } from "./styles";
import { AlertModal } from '../AlertModal';
import toast from 'react-hot-toast';
import { api } from '../../services/axios';
import { Spinner } from '../Spinner';
import { useAuthentication } from '../../hooks/useAutenticacao';

export function CardVertical({data, isDelete, listAnnouncements}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { authentication } = useAuthentication();

  function haddleChangeStateModal() {
    setModalIsOpen(!modalIsOpen);
  }

  function deleteAnnouncement(id) {
    setLoading(true)
    api.delete(`/users/announcements/${id}`, {
      headers: {
        Authorization: `Bearer ${authentication.token}`,
      }
    })
    .then(() => {
      toast.success('Seu anúncio foi deletado com sucesso!');
      listAnnouncements(id);
    })
    .catch((err) => {

      if(err.response.status === 500){
        toast.error('Não foi possível deletar seu anúncio!');
        return;
      }

      toast.error(err.response.data.message);
    })
    .finally(() => setLoading(false))
  }

  return (
    <CardVerticalContainer>
      {!data.images[0] ? (
        <div className="box_image">
        </div>
      ) : (
        <img src={data.images[0].url} alt="Imagem do anúncio" />
      )}

      <div className="box_info">
        <Link to="/">
          <h2>{data.title}</h2>
          <p>{data.adress.adress}, {data.adress.number}, {data.adress.zip_code} - {data.adress.district} - {data.adress.city} - {data.adress.state}</p>

          <ul>
            <li>Detalhes:</li>
            <li><BiArea className="icons" size={16} /> {data.meter}m²</li>
          </ul>

        </Link>
        {
          !isDelete 
          ? <Link className="details" to="/">Detalhes <BsArrowRight className="icons" size={16} /></Link> 
          : <button className="delete" onClick={() => deleteAnnouncement(data.id)} disabled={loading ? true : false}>
              {loading ? <Spinner/> : 'Excluir anúncio'}
            </button>
        }
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

export function CardHorizontal({data, isDelete, listAnnouncements}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { authentication } = useAuthentication();

  function haddleChangeStateModal() {
    setModalIsOpen(!modalIsOpen);
  }

  function deleteAnnouncement(id) {
    setLoading(true)
    api.delete(`/users/announcements/${id}`, {
      headers: {
        Authorization: `Bearer ${authentication.token}`,
      }
    })
    .then(() => {
      toast.success('Seu anúncio foi deletado com sucesso!');
      listAnnouncements(id)
    })
    .catch((err) => {

      if(err.response.status === 500){
        toast.error('Não foi possível deletar seu anúncio!');
        return;
      }

      toast.error(err.response.data.message);
    })
    .finally(() => setLoading(false))
  }

  return (
    <CardHorizontalContainer>
      {!data.images[0] ? (
        <div className="box_image">
        </div>
      ) : (
        <img src={data.images[0].url} alt="Imagem do anúncio" />
      )}

      <div className="box_info">
        <h2>{data.title}</h2>
        <p>{data.adress.adress}, {data.adress.number}, {data.adress.zip_code} - {data.adress.district} - {data.adress.city} - {data.adress.state}</p>

        <ul>
          <li>Detalhes:</li>
          <li><BiArea className="icons" size={16} /> {data.meter}m²</li>
        </ul>

        {
          !isDelete 
          ? <Link to="/">Detalhes <BsArrowRight className="icons" size={16} /></Link>
          : <button className="delete" onClick={() => deleteAnnouncement(data.id)}>
            {loading ? <Spinner/> : 'Excluir anúncio'}
          </button>
        }
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