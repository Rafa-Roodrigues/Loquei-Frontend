import { Container } from './styles';

import circleImg from '../../assets/img/loading/circle.svg';
import pointerImg from '../../assets/img/loading/pointer.svg';

export function Spinner() {
  return (
    <Container>
      <img src={circleImg} alt="Base do carregamento" />
      <img src={pointerImg} alt="Ponteiro do carregamento" />
    </Container>
  )
}