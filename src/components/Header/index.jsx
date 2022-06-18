import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MdLogout, MdFormatListBulleted, MdAdd,  MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';
import { RiNotification2Line } from 'react-icons/ri';
import { HeaderContainer, Perfil, BoxContent } from './styles';

import { useTheme } from "../../hooks/useTheme";

import { BiSearch, BiUser } from 'react-icons/bi';
import { HiMenu } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';

import { Logo } from '../Logo';
import { useAuthentication } from '../../hooks/useAutenticacao';

export function Header() {
  const [stateMenu, setStateMenu] = useState('none');

  const { authentication, destroyAuthentication } = useAuthentication();
  const { themeIsActive, changeTheme } = useTheme();
  const navigate = useNavigate();

  function changeStateMenu() {
    if (stateMenu === 'none') {
      setStateMenu('flex');
    } else {
      setStateMenu('none');
    }
  }

  return (
    <HeaderContainer>
      <Logo size={140} />
      <nav className="navigation">
        {authentication ? (
          <BoxContent>
            <button><RiNotification2Line className="icons" size={22}/></button>
            <button type="button" onClick={changeTheme}>
              {themeIsActive ? (
                <MdOutlineLightMode className="icons" size={24} />
              ) : (
                <MdOutlineDarkMode className="icons" size={24} />
              ) }
              </button>

            <Perfil>
              <div id="box_image">
                {authentication.image?.url 
                  ? <img src={authentication.image.url} alt="imagem do usuário" />
                  : `${authentication.name[0]}${authentication.lastname[0]}`
                }
              </div>

              <div id="box_name">
                <p>Ola,</p>
                <p>{authentication.name} {authentication.lastname}</p>
              </div>

              <div id="box_info_login">
                <ul>
                  <li>
                    <Link to="/anunciar">
                      <MdAdd className="icons" size={24}/>
                      Anunciar
                    </Link>
                  </li>
                  <li>
                    <Link to="meus-anuncios">
                      <MdFormatListBulleted className="icons" size={24}/>
                      Meus anúncios
                    </Link>
                  </li>
                  <li>
                    <Link to="/perfil">
                      <BiUser className="icons" size={24} />
                      Perfil
                    </Link>
                  </li>
                  <li>
                    <Link to="/buscar">
                      <BiSearch className="icons" size={24} />
                      Buscar
                    </Link>
                  </li>
                  <li>
                    <button onClick={() => {
                      destroyAuthentication();
                      navigate('/login');
                    }}>
                      <MdLogout className="icons" size={24}/>
                      Sair
                    </button>
                  </li>
                </ul>
              </div>
            </Perfil>
          </BoxContent>
        ) : (
          <ul id="box_info">
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
        ) }
      </nav>

      <nav className="navigation_mobile">
        {authentication ? (
          <Link className="button_registrar" to="/anunciar">Anunciar</Link>
        ) : (
          <Link className="button_registrar" to="/registro">Cadastrar-se</Link>
        )}
        <button className="button_menu" onClick={changeStateMenu}>
          <HiMenu size={32} color="#616161" />
        </button>
      </nav>

      <div className="box_menu" style={{display: stateMenu}}>
        <div className="menu">
          <header>
            {authentication && (
              <div>
                <p>Ola,</p>
                <p>{`${authentication.name} ${authentication.lastname}`}</p>
              </div>
            )}
            
            <button onClick={changeStateMenu}>
              <IoMdClose size={35} color="#fff" />
            </button>
          </header>
          {authentication ? (
            <ul>
              <li>
                <Link to="/anunciar">Anunciar</Link>
                <MdAdd className="icons" size={24}/>
              </li>
              <li>
                <Link to="meus-anuncios">Meus anúncios</Link>
                <MdFormatListBulleted className="icons" size={24}/>
              </li>
              <li>
                <Link to="/perfil">Perfil</Link>
                <BiUser className="icons" size={24} />
              </li>
              <li>
                <Link to="/buscar">Buscar</Link>
                <BiSearch className="icons" size={24} />
              </li>
              <li>
                <Link to="/chat">Notificações</Link>
                <RiNotification2Line className="icons" size={24} />
              </li>
              <li>
                <button onClick={() => {
                  destroyAuthentication();
                  navigate('/loginn');
                }}>Sair</button>
                <MdLogout className="icons" size={24}/>
              </li>
              <li>
                <button type="button" onClick={changeTheme}>
                  {themeIsActive ? 'Modo Escuro' : 'Modo Claro'}
                </button>
                
                  {themeIsActive ? (
                  <MdOutlineLightMode className="icons" size={24}/>
                ) : (
                  <MdOutlineDarkMode className="icons" size={24}/>
                ) }
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to="/buscar">Buscar</Link>
                <BiSearch className="icons" size={24} />
              </li>
              <li>
                <Link to="/login">Entrar</Link>
                <BiUser className="icons" size={24} />
              </li>
            </ul>
          )}
        </div>
      </div>
    </HeaderContainer>
  );
}