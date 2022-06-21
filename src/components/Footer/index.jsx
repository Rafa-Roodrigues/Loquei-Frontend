import { Link } from "react-router-dom";

import { Container, Content, PolicyAndTerms } from './styles';

import weame from '../../assets/parceiros/weame.svg';
import techmark from '../../assets/parceiros/techmark.svg';

export function Footer() {

  return (
    <Container>
      <Content>
        <div>
          <a href="https://whimsical.com/loquei-time-de-desenvolvimento-UMEpzSbfdNXpcZk4YWUpcY" target="_blank">
            Conheça nossos parceiros
          </a>
        </div>
        <ul>
          <li>
            <img id="weame" src={weame} alt="Logo do parceiro We e Me"/>
          </li>
          <li>
            <img id="techmark" src={techmark} alt="Logo do parceiro We e Me"/>
          </li>
          <li>
            <img id="weame" src={weame} alt="Logo do parceiro We e Me"/>
          </li>
        </ul>
      </Content>
      <PolicyAndTerms>
        <p><Link to="/">Termo de uso</Link>, <Link to="/">Política de Privacidade</Link> e <Link to="/">Sobre a Loquei</Link>.</p>
        <span>&copy; Loquei Company 2022 </span>
      </PolicyAndTerms>
    </Container>
  );
}