import { Link } from 'react-router-dom';
import { useState } from 'react';

import { HeaderContainer } from './styles';

import { useTheme } from "../../hooks/useTheme";

import { BiSearch, BiUser } from 'react-icons/bi';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';
import { HiMenu } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';

import { Logo } from '../Logo';


export function Header() {
  const { themeIsActive, changeTheme } = useTheme();

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
      <Logo size={140} />
      <nav className="navigation">
        <ul>
          <li className="search">
            <Link className="link" to="/buscar">Buscar</Link>
            <BiSearch className="icons" size={24} />
          </li>
          <li>
            <Link className="link" to="/login">Entrar</Link>
            <BiUser className="icons" size={24} />
          </li>
          <li>
            <button type="button" onClick={changeTheme}>
            {themeIsActive ? (
              <MdOutlineLightMode className="icons" size={24} />
            ) : (
              <MdOutlineDarkMode className="icons" size={24} />
            ) }
            </button>
          </li>
          <li>
            <Link className="button_registrar" to="/registro">Cadastrar-se</Link>
          </li>
        </ul>
      </nav>

      <nav className="navigation_mobile">
        <Link className="button_registrar" to="/registro">Cadastrar-se</Link>
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
            <button type="button" onClick={changeTheme}>
            {themeIsActive ? (
              <MdOutlineLightMode className="icons" size={24} />
            ) : (
              <MdOutlineDarkMode className="icons" size={24} />
            ) }
            </button>
            <li>
              <Link to="/buscar">Buscar</Link>
              <BiSearch className="icons" size={24} />
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