import { Link } from 'react-router-dom';
import { useState } from 'react';

import { HeaderContainer } from './styles';

import { BiSearch, BiGridAlt, BiUser } from 'react-icons/bi';
import { HiMenu } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { Logo } from '../Logo';


export function Header() {
  const [stateMenu, setStateMenu] = useState('none');

  function changeStateMenu() {
    if (stateMenu === 'none') {
      setStateMenu('flex');
    } else {
      setStateMenu('none');
    }

    return;
  }

  return (
    <HeaderContainer>
      <Logo imageHeight={38} imageWidth={38} textSize={35} />
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/">Buscar</Link>
            <BiSearch className="icons" size={24} />
          </li>
          <li>
            <Link to="/meus-anuncios"> Meus anúncios</Link>
            <BiGridAlt className="icons" size={24} />
          </li>
          <li>
            <Link to="/login">Entrar</Link>
            <BiUser className="icons" size={24} />
          </li>
          <li>
            <button>Anunciar</button>
          </li>
        </ul>
      </nav>

      <nav className="navigation_mobile">
        <button className="button_anunciar">Anunciar</button>
        <button className="button_menu" onClick={changeStateMenu}>
          <HiMenu size={32} color="#616161" />
        </button>
      </nav>

      <div className="box_menu" style={{display: stateMenu}}>
        <div className="menu">
          <header>
            <button onClick={changeStateMenu}>
              <IoMdClose size={40} color="#fff" />
            </button>
          </header>
          <ul>
            <li>
              <Link to="/">Buscar</Link>
              <BiSearch className="icons" size={24} />
            </li>
            <li>
              <Link to="/meus-anuncios"> Meus anúncios</Link>
              <BiGridAlt className="icons" size={24} />
            </li>
            <li>
              <Link to="/login">Entrar</Link>
              <BiUser className="icons" size={24} />
            </li>
          </ul>
        </div>
      </div>
    </HeaderContainer>
  );
}