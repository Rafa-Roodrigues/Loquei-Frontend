import { useRef } from "react";
import { Link } from "react-router-dom";

import Helmet from "react-helmet";

import { Header } from "../../components/Header";
import { CardVertical, CardHorizontal } from "../../components/Cards";
import { Footer } from "../../components/Footer";

import { AiFillShop } from 'react-icons/ai';
import { BiCar, BiCurrentLocation, BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { BsBoundingBoxCircles } from 'react-icons/bs';
import { MdOutlineMapsHomeWork, MdOutlineBusiness } from 'react-icons/md';
import { RiHomeSmile2Line } from 'react-icons/ri';

import { HomeContainer } from "./styles";
import imgNone from '../../assets/img/img-none.jpg';

export function Home() {
  const states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

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
    <HomeContainer>
      <Helmet>
        <title>Loquei | Home</title>
      </Helmet>
      <Header />
      <section className="box_categorias">
        <ul>
          <li>
            <Link to="/">
              <MdOutlineMapsHomeWork className="icons" size="30" />
            </Link>
            <span>Casa & Apartamentos</span>
          </li>
          <li>
            <Link to="/">
              <BiCar className="icons" size="30" />
            </Link>
            <span>Garagem</span>
          </li>
          <li>
            <Link to="/">
              <AiFillShop className="icons" size="30" />
            </Link>
            <span>Comércio</span>
          </li>
          <li>
            <Link to="/">
              <RiHomeSmile2Line className="icons" size="30" />
            </Link>
            <span>Salão de Festa</span>
          </li>
          <li>
            <Link to="/">
              <BsBoundingBoxCircles className="icons" size="30" />
            </Link>
            <span>Box</span>
          </li>
          <li>
            <Link to="/">
              <MdOutlineBusiness className="icons" size="30" />
            </Link>
            <span>Escritório</span>
          </li>
          <li>
            <Link to="/">
              <BiCurrentLocation className="icons" size="30" />
            </Link>
            <span>Pequenos espaços</span>
          </li>
        </ul>
      </section>
      <main className="content">
        <section className="box_estados">
          <span className="title_box">Onde você quer buscar?</span>
          <ul>
            {states.map(states => (
              <li><Link to="/">{states}</Link></li>
            ))}
          </ul>
        </section>

        <section className="box_cards_destaque">
          <span className="title">Destaque</span>

          <button onClick={handleLeftClick} className="button_arrow">
            <BiLeftArrowAlt size={20} color="#FFF" />
          </button>
          <button onClick={handleRightClick} className="button_arrow">
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
        </section>

        <section className="box_cards_vertical">
          <span className="title_box">Anúncios para você</span>

          <div className="box_margin">
            <div className="cards">
              <CardVertical 
                imgURL={imgNone}
                title="Garagem grande"
                address="Rua Fidélis Papini, 28 - Vila Prudente"
              />
            </div>
            <div className="cards">
              <CardVertical 
                imgURL={imgNone}
                title="Garagem grande"
                address="Rua Fidélis Papini, 28 - Vila Prudente"
              />
            </div>
            <div className="cards">
              <CardVertical 
                imgURL={imgNone}
                title="Garagem grande"
                address="Rua Fidélis Papini, 28 - Vila Prudente"
              />
            </div>
            <div className="cards">
              <CardVertical 
                imgURL={imgNone}
                title="Garagem grande"
                address="Rua Fidélis Papini, 28 - Vila Prudente"
              />
            </div>
          </div>
        </section>

        <section className="box_cards_horizontal">
          <CardHorizontal 
            imgURL={imgNone}
            title="Garagem grande"
            address="Rua Fidélis Papini, 28 - Vila Prudente"
          />
          <CardHorizontal 
            imgURL={imgNone}
            title="Garagem grande"
            address="Rua Fidélis Papini, 28 - Vila Prudente"
          />
          <CardHorizontal 
            imgURL={imgNone}
            title="Garagem grande"
            address="Rua Fidélis Papini, 28 - Vila Prudente"
          />
          <CardHorizontal 
            imgURL={imgNone}
            title="Garagem grande"
            address="Rua Fidélis Papini, 28 - Vila Prudente"
          />
        </section>
      </main>
      <Footer/>
    </HomeContainer>
  );
}