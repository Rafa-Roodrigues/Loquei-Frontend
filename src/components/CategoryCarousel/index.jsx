import { Container, ContentLeft, ContentRight, BoxAutoComplete } from "./styles";

import garageImg from '../../assets/img/garage.jpg';
import eventualImg from '../../assets/img/eventual-space.jpg';
import commercialImg from '../../assets/img/commercial.jpg';
import othersImg from '../../assets/img/others-space.jpg';

export function CategoryCarousel() {
  return (
    <Container>
      <ContentLeft>
      </ContentLeft>
      <ContentRight>
        <img src={garageImg} alt="Imagem de uma garagem" />
        <p>Se você estiver procurando um lugar pequeno para montar seu negócio, a categoria <b>Garagem</b> deve ser a ideal para você.</p>
      </ContentRight>
    </Container>
  );
}