import { Link } from "react-router-dom";

import { Container, Content, PolicyAndTerms } from './styles';

export function Footer() {

  return (
    <Container>
      <Content>
        <div>
          <a href="https://whimsical.com/loquei-time-de-desenvolvimento-UMEpzSbfdNXpcZk4YWUpcY" target="_blank">Desenvolvedores</a>
        </div>
        <ul>
          <li>parceiro 1</li>
          <li>parceiro 2</li>
          <li>parceiro 3</li>
        </ul>
      </Content>
      <PolicyAndTerms>
        <p><Link to="/">Termo de uso</Link>, <Link to="/">Política de Privacidade</Link> e <Link to="/">Sobre a Loquei</Link>.</p>
        <span>&copy; Loquei Company 2022 </span>
      </PolicyAndTerms>
    </Container>
  );
}