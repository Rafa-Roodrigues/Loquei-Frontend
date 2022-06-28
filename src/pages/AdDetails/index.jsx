import { Container, Content, Left, Right, BoxImage, InformationList, Description, Title, BoxButtons } from "./styles";

import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { Header } from "../../components/Header";

import { apiWhatsapp } from "../../services/apiWhatsapp";

import { BiLeftArrowAlt, BiRightArrowAlt, BiArea } from 'react-icons/bi';
import { BsWhatsapp } from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const adInformation = {
  title: 'Garagem grande - SP/ZN',
  description: 'Garagem espaçosa que pode virar um comercio na zona norte de São Paulo. Esta localizado no bairro Parque Casa de Pedra.',
  place: {
    cep: "02319-120",
    logradouro: "Rua Elias de Almeida",
    bairro: "Parque Casa de Pedra",
    cidade: "São Paulo",
    uf: "SP",
  },
  imagesUrl: [
    'https://claudia.abril.com.br/wp-content/uploads/2020/02/garagem1-1.jpg',
    'https://dicasdecor.com/wp-content/uploads/2019/06/22352221_128286637922522_1082784199036895232_n.jpg',
    'https://static8.depositphotos.com/1524415/1033/i/600/depositphotos_10339645-stock-photo-clean-garage.jpg'
  ]
}

export function AdDetails() {
  const [indexImagem, setIndexImage] = useState(0);
  const [urlWhatsapp, setUrlWhatsapp] = useState('');

  function handleNextImage() {
    if (indexImagem < adInformation.imagesUrl.length) {
      setIndexImage(indexImagem + 1);
    }
  }

  function handlePreviousImage() {
    if (indexImagem > 0) {
      setIndexImage(indexImagem - 1);
    }
  }

  useEffect(() => {
    const response = apiWhatsapp(1, 'Gustavo Alves', '11986763137', '550346', 'Garagem grande');
    return setUrlWhatsapp(response);
  }, []);

  return (
    <Container>
      <Helmet>
        <title>Loquei | nome do produto</title>
      </Helmet>
      <Header />

      <Content>
        <Left>
          <BoxImage>
            <div>
              <img src={adInformation.imagesUrl[indexImagem]} alt="Imagem do local" />

              {indexImagem > 0 && (
                <button type="button" onClick={handlePreviousImage} className="previous">
                  <BiLeftArrowAlt size={26} color="#FFF" />
                </button>
              )}

              {indexImagem < adInformation.imagesUrl.length - 1 && (
                <button type="button" onClick={handleNextImage} className="next">
                  <BiRightArrowAlt size={26} color="#FFF" />
                </button>
              )}
            </div>
            <ul>
              {adInformation.imagesUrl.map((image, index) => (
                <li>
                  <button type="button" onClick={() => setIndexImage(index)}>
                    <img src={image} alt="Prévia da imagem" />
                  </button>
                </li>
              ))}
            </ul>
          </BoxImage>

          <BoxButtons>
            <a href={urlWhatsapp} target="_blank">
              <BsWhatsapp /> <span>Whatsapp</span>
            </a>
          </BoxButtons>

          <Title>{adInformation.title}</Title>
          <Description className="description">{adInformation.description}</Description>

          <InformationList>
            <li>
              <HiOutlineLocationMarker size={26} color="#7A46DB" />
              <p>{adInformation.place.logradouro}, {adInformation.place.bairro}, {adInformation.place.cidade}, {adInformation.place.uf}</p>
            </li>
            <li>
              <BiArea size={26} color="#7A46DB" />
              <p>30m² - Metros quadrados</p>
            </li>
          </InformationList>
        </Left>
        <Right>

        </Right>
      </Content>
    </Container>
  );
}