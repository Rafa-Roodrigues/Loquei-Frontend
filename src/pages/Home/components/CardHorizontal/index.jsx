import { Link } from 'react-router-dom';

import { BiArea } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';

import { CardHorizontalContainer } from "./styles";

export function CardHorizontal({ data }) {

  return (
    <CardHorizontalContainer>
      <img src={data.url} alt="Imagem do anúncio" />

      <div className="box_info">
        <h2>{data.title}</h2>
        <p>{data.adress}, {data.number}, {data.zip_code} - {data.district} - {data.city} - {data.state}</p>

        <ul>
          <li>Detalhes:</li>
          <li><BiArea className="icons" size={16} /> {data.meter}m²</li>
        </ul>

        <Link to={`/anuncio/${data.id}`}>Detalhes <BsArrowRight className="icons" size={16} /></Link>
      </div>
    </CardHorizontalContainer>
  );
}