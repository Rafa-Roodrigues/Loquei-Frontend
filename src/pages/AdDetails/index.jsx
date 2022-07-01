import { Container, Content, Left, Right, BoxImage, InformationList, Description, Title, BoxButtons } from "./styles";

import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { Header } from "../../components/Header";
import { CardHorizontal } from "./components/CardHorizontal";

import { apiWhatsapp } from "../../services/apiWhatsapp";
import { Footer } from '../../components/Footer';

import { BiLeftArrowAlt, BiRightArrowAlt, BiArea } from 'react-icons/bi';
import { BsWhatsapp } from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/axios";
import { useAuthentication } from "../../hooks/useAutenticacao";

import toast from "react-hot-toast";

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

const dados = {
  meter: "30",
  title: "Garagem grande - SP/ZN",
  description: "Garagem espaçosa que pode virar um comercio na zona norte de São Paulo. Esta localizado no bairro Parque Casa de Pedra.",
  id: 12,
  id_adress: 12,
  id_category: 1,
  id_user: 1,

  images: [
    {
      etag: "\"0x8DA52DF0C8FE708\"",
      id: 35,
      id_announcement: 12,
      name: "8c8591235587d2ce3bbf5973f41ccfd2-Captura de Tela (2).png",
      url: "https://claudia.abril.com.br/wp-content/uploads/2020/02/garagem1-1.jpg"
    }
  ],

  adress: [
    {
      adress: "Avenida dos Autonomistas",
      city: "Osasco",
      complement: "Casa",
      district: "Vila Yara",
      id: 12,
      latitude: "-23.538978",
      longitude: "-46.765336",
      number: "1400",
      state: "SP",
      zip_code: "06020-010"
    }
  ],

  category: {
    id: 1,
    id_image: 1,
    name: "Loja"
  }
}

export function AdDetails() {
  const { authentication } = useAuthentication();

  const navigate = useNavigate();

  const [indexImagem, setIndexImage] = useState(0);
  const [urlWhatsapp, setUrlWhatsapp] = useState('');

  const { destroyAuthentication } = useAuthentication();

  const [announcement, setAnnouncement] = useState({});
  const [listAnnouncements, setListAnnouncements] = useState([]);

  const [images, setImages] = useState([]);

  const { id } = useParams();

  function handleNextImage() {
    if (indexImagem < images.length) {
      setIndexImage(indexImagem + 1);
    }
  }

  function handlePreviousImage() {
    if (indexImagem > 0) {
      setIndexImage(indexImagem - 1);
    }
  }

  async function request() {
    try {
      const response = await api.get(`/announcements/details/${id}`, {
        headers: {
          Authorization: `Bearer ${authentication.token}`,
        }
      });

      const announcementImages = [];
      response.data.images.forEach((announcement) => {
        announcementImages.push(announcement.url);
      });

      setAnnouncement(response.data);
      setImages(announcementImages);

      const fullName = response.data.user.name + " " + response.data.user.lastname;
      const whatsapp = apiWhatsapp(response.data.user.id, fullName, response.data.user.whatsapp, '550346', response.data.title);
      setUrlWhatsapp(whatsapp);

      const announcementsGeneral = await api.get(`/announcements/limit/${id}`, {
        headers: {
          Authorization: `Bearer ${authentication.token}`,
        }
      });

      setListAnnouncements(announcementsGeneral.data);
    } catch (err) {
      if (err.response.status === 500) {
        toast.error('Não foi possível buscar informações do anúncio!');
        return;
      }

      if (err.response.status === 401) {
        destroyAuthentication();
        navigate('/login');
        return;
      }

      toast.error(err.response.data.message);
    }
  }

  useEffect(() => {
    request();
  }, [id]);

  return (
    <>
      <Container>
        <Helmet>
          <title>Loquei | Detalhes do anúncio</title>
        </Helmet>
        <Header />

        <Content>
          <Left>
            <BoxImage>
              <div>
                <img src={images[indexImagem]} alt="Imagem do local" />

                {indexImagem > 0 && (
                  <button type="button" onClick={handlePreviousImage} className="previous">
                    <BiLeftArrowAlt size={26} color="#FFF" />
                  </button>
                )}

                {indexImagem < images.length - 1 && (
                  <button type="button" onClick={handleNextImage} className="next">
                    <BiRightArrowAlt size={26} color="#FFF" />
                  </button>
                )}

              </div>
              <ul>
                {images.map((image, index) => (
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

            <Title>{announcement?.title}</Title>
            <Description className="description">{announcement?.description}</Description>

            <InformationList>
              <li>
                <HiOutlineLocationMarker size={26} color="#7A46DB" />
                <p>{announcement?.adress?.adress}, {announcement?.adress?.district}, {announcement?.adress?.city}, {announcement?.adress?.state}</p>
              </li>
              <li>
                <BiArea size={26} color="#7A46DB" />
                <p>{announcement.meter}m² - Metros quadrados</p>
              </li>
            </InformationList>
          </Left>
          <Right>
            {listAnnouncements.map(announcement => (
              <CardHorizontal data={announcement} />
            ))}
          </Right>
        </Content>
      </Container>
      {/* <Footer /> */}
    </>
  );
}