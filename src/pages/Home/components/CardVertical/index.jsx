import { Link } from 'react-router-dom';

import { BiArea } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';

import { CardVerticalContainer } from "./styles";

export function CardVertical({ data }) {
  return (
    <CardVerticalContainer>
      <img src={data.url} alt="Imagem do anúncio" />
      <div className="box_info">
        <h2>{data.title}</h2>
        <p>{data.adress}, {data.number}, {data.zip_code} - {data.district} - {data.city} - {data.state}</p>

        <ul>
          <li>Detalhes:</li>
          <li><BiArea className="icons" size={16} /> {data.meter}m²</li>
        </ul>

        <Link className="details" to={`/anuncio/${data.id}`}>Detalhes <BsArrowRight className="icons" size={16} /></Link>
      </div>
    </CardVerticalContainer>
  );
}