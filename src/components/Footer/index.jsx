import { Link } from "react-router-dom";

import { Container, Content, PolicyAndTerms } from './styles';

import weame from '../../assets/parceiros/weame.svg';
import techmark from '../../assets/parceiros/techmark.svg';
import braillincode from '../../assets/parceiros/braillincode.svg';

export function Footer() {

  return (
    <Container>
      <Content>
        <ul>
          <li>
            <img id="techmark" src={techmark} alt="Logo do parceiro Techmark" />
          </li>
          <li>
            <img id="weame" src={weame} alt="Logo do parceiro We e Me" />
          </li>
          <li>
            <img id="braillincode" src={braillincode} alt="Logo do parceiro BraillinCode" />
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