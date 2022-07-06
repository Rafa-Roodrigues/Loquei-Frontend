import { Link } from "react-router-dom";

import { Container, Content, PolicyAndTerms } from './styles';

import weame from '../../assets/parceiros/weame.svg';
import techmark from '../../assets/parceiros/techmark.svg';
import braillincode from '../../assets/parceiros/braillincode.svg';
import jm from '../../assets/parceiros/jm.png';
import imoveis from '../../assets/parceiros/imoveis.png';
import eventos from '../../assets/parceiros/eventos.png';

export function Footer() {

  return (
    <Container>
      <Content>
        <h2>Conheça nossos parceiros</h2>
        <ul>
          <li>
            <a href="">
              <img id="imoveis" src={imoveis} alt="Logo do parceiro galeria imóveis" />
            </a>
          </li>
          <li>
            <a href="">
              <img id="jm" src={jm} alt="Logo do parceiro JM Construções" />
            </a>
          </li>
          <li>
            <a href="">
              <img id="eventos" src={eventos} alt="Logo do parceiro Martins Trip" />
            </a>
          </li>
          <li>
            <img id="techmark" src={techmark} alt="Logo do parceiro Techmark" />
          </li>
          <li>
            <img id="weame" src={weame} alt="Logo do parceiro We e Me" />
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