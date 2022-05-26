import { useState } from 'react';

import Helmet from "react-helmet";

import { Header } from '../../components/Header';
import { CardHorizontal, CardVertical } from '../../components/Cards';
import { useTheme } from '../../hooks/useTheme';

import { BiGridAlt, BiListUl } from 'react-icons/bi';
import { FaCheck } from 'react-icons/fa';

import { ContainerAnunciar } from "./styles";

import iconImageUpload from '../../assets/img/image-upload.svg';

export function Anunciar() {
  const { themeIsActive } = useTheme();
  const [stateMenu, setStateMenu] = useState(false);
  const [stateCard, setStateCard] = useState(false);

  function handleChangeStateMenu(event) {
    event.preventDefault();

    setStateMenu(!stateMenu);
  }

  function handleChangeStateCard(event) {
    event.preventDefault();

    setStateCard(!stateCard);
  }

  return (
    <ContainerAnunciar>
      <Helmet>
        <title>Loquei | Anunciar</title>
      </Helmet>
      <Header />

      <div className="box_grid">
        <aside className="box_filtro" style={stateMenu ? {bottom: "80%"} : {bottom: "0"}}>
          <form>
            <div className="box_input">
              <h3>Tipo do espaço</h3>
              <div className="grid_checkbox">
                <label className="checkbox">
                  Casa
                  <input type="checkbox" placeholder="Casa" />
                  <span className={themeIsActive && "dark_checkbox"}><FaCheck className="icons" /></span>
                </label>
                <label className="checkbox">
                  Pequenos espaços
                  <input type="checkbox" placeholder="Casa" />
                  <span className={themeIsActive && "dark_checkbox"}><FaCheck className="icons" /></span>
                </label>
                <label className="checkbox">
                  Garagem
                  <input type="checkbox" placeholder="Casa" />
                  <span className={themeIsActive && "dark_checkbox"}><FaCheck className="icons" /></span>
                </label>
                <label className="checkbox">
                  Salão de festa
                  <input type="checkbox" placeholder="Casa" />
                  <span className={themeIsActive && "dark_checkbox"}><FaCheck className="icons" /></span>
                </label>
                <label className="checkbox">
                  Comércio
                  <input type="checkbox" placeholder="Casa" />
                  <span className={themeIsActive && "dark_checkbox"}><FaCheck className="icons" /></span>
                </label>
                <label className="checkbox">
                  Escritório
                  <input type="checkbox" placeholder="Casa" />
                  <span className={themeIsActive && "dark_checkbox"}><FaCheck className="icons" /></span>
                </label>
                <label className="checkbox">
                  Box
                  <input type="checkbox" placeholder="Casa" />
                  <span className={themeIsActive && "dark_checkbox"}><FaCheck className="icons" /></span>
                </label>
              </div>
            </div>

            <div className="box_input">
              <h3>Título *</h3>
              <input className={themeIsActive && "dark_input"} placeholder="Digite o título do anúncio" required />
            </div>

            <div className="box_input">
              <h3>CEP *</h3>
              <input className={themeIsActive && "dark_input"} placeholder="Digite o cep do espaço" required />
            </div>

            <div className="box_input">
              <h3>Número *</h3>
              <input className={themeIsActive && "dark_input"} placeholder="Digite o número do espaço" required />
            </div>

            <div className="box_input">
              <h3>Complemento </h3>
              <input className={themeIsActive && "dark_input"} placeholder="Digite o complemento do espaço" required />
            </div>

            <div className="box_input">
              <h3>Metragem do espaço - m²*</h3>
              <input className={themeIsActive && "dark_input"} type="number" placeholder="Digite metragem do espaço em m²" />
            </div>
          </form>
        </aside>

        <section className="box_content">
          <div className="box_preview_image">
            <div className="preview_container">
            </div>
            <div className="preview_container">
            </div>
            <div className="preview_container">
            </div>
            <div className="preview_container">
            </div>
            <div className="preview_container">
            </div>
          </div>

          <div className="box_card">
            <div className="alternative">
              <BiGridAlt className="icons" size="22" />
              <label>
                <input type="checkbox" onInputCapture={handleChangeStateCard} />
                <span></span>
              </label>
              <BiListUl className="icons" size="22" />
            </div>
            <div className="card">
              <label className={stateCard ? "upload horizontal" : "upload"}>
                <input type="file" name="myImage" accept="image/*" />
                <i><img src={iconImageUpload} /></i>
              </label>
              {stateCard ? (
                <CardHorizontal
                  title="Digite seu título"
                  address="Rua Exenplo, 01 - Bairro, Cidade, Estado"
                  creation
                />
              ) : (
                <CardVertical 
                  title="Digite seu título"
                  address="Rua Exenplo, 01 - Bairro, Cidade, Estado"
                  creation
                />
              )}
            </div>
          </div>

          <button className="button_publicar">Publicar</button>
        </section>

        <button 
          className="box_mobile" 
          onClick={handleChangeStateMenu}
          style={stateMenu ? {bottom: "80%"} : {bottom: "0"}}
        >
          <div></div>
          Editar os anúncios
        </button>

        <section className="box_anuncios">
          anuncios
        </section>
      </div>
    </ContainerAnunciar>
  );
}