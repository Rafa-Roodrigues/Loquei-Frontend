import { Link } from "react-router-dom";

import { useTheme } from "../../hooks/useTheme";

import { MdLightMode, MdDarkMode } from 'react-icons/md';

import { FooterContainer } from './styles';

export function Footer() {
  const { themeIsActive, changeTheme } = useTheme();

  return (
    <FooterContainer>
      <div className="box_content">
      <button onClick={changeTheme} type="button">
        {themeIsActive ? (
        <>
          <MdLightMode/>
          Light Mode
        </>
        ) : (
        <>
          <MdDarkMode/>
          Dark Mode
        </>
        ) }
      </button>
      </div>
      <div className="box_politica">
        <p><Link to="/">Termo de uso</Link>, <Link to="/">Política de Privacidade</Link> e <Link to="/">Sobre a Loquei</Link>.</p>
        <span>&copy; Loquei Company 2022 </span>
      </div>
    </FooterContainer>
  );
}