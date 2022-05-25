import { Container } from "./styles";
import { Link } from "react-router-dom";

export function PreviewEstados() {
  const states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
  
  return (
    <Container>
      <span className="title_box">Onde você quer buscar?</span>
      <ul>
        {states.map(states => (
          <li><Link to="/buscar">{states}</Link></li>
        ))}
      </ul>
    </Container>
  );
}