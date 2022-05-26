import { Link } from "react-router-dom";

import { FooterContainer } from './styles';

export function Footer() {

  return (
    <FooterContainer>
      <div className="box_content">
        CONTENT
      </div>
      <div className="box_politica">
        <p><Link to="/">Termo de uso</Link>, <Link to="/">Política de Privacidade</Link> e <Link to="/">Sobre a Loquei</Link>.</p>
        <span>&copy; Loquei Company 2022 </span>
      </div>
    </FooterContainer>
  );
}