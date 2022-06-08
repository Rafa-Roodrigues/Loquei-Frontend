import { Link } from "react-router-dom";

import boxImg from '../../assets/img/box-space.jpg';
import garageImg from '../../assets/img/garage.jpg';
import eventualImg from '../../assets/img/eventual-space.jpg';
import commercialImg from '../../assets/img/commercial.jpg';
import othersImg from '../../assets/img/others-space.jpg';

import { Container, CategoryCards } from "./styles";

export function CategorySpecifications() {
  return (
    <Container>
      <span className="title_box">O que se encaixa em</span>
      <CategoryCards>
        <Link to="/">
          <h3>Garagem</h3>
          <p>Espaço médio</p>
        </Link>
        <img src={garageImg} alt="Espaço de uma garagem" />
      </CategoryCards>
      <CategoryCards>
        <Link to="/">
          <h3>Box</h3>
          <p>Espaço pequeno</p>
        </Link>
        <img src={boxImg} alt="Espaço de um box" />
      </CategoryCards>
      <CategoryCards>
        <Link to="/">
          <h3>Espaço eventual</h3>
          <p>Espaço grande</p>
        </Link>
        <img src={eventualImg} alt="Espaço eventual" />
      </CategoryCards>
      <CategoryCards>
        <Link to="/">
          <h3>Comercial</h3>
          <p>Espaço médio</p>
        </Link>
        <img src={commercialImg} alt="Espaço comercial" />
      </CategoryCards>
      <CategoryCards>
        <Link to="/">
          <h3>Outros espaços</h3>
          <p>Espaços pequenos</p>
        </Link>
        <img src={othersImg} alt="Outros pequenos espaços" />
      </CategoryCards>
    </Container>
  );
}