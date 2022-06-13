import { ContainerBuscar, BoxGrid, BoxMobileSearch, BoxFilter } from "./styles";

import { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useGetLocation } from "../../hooks/useGetLocation";

import Helmet from "react-helmet";

import { Header } from '../../components/Header';

import { BiFilterAlt, BiSearch } from 'react-icons/bi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { FaCheck } from 'react-icons/fa';

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import { IconLocal, IconSpace } from "../../components/IconLeaflet";


export function Buscar() {
  const { themeIsActive } = useTheme();
  const [stateMenu, setStateMenu] = useState('block');

  function handleOpenMenu() {
    setStateMenu('block');
  }

  function handleCloseMenu() {
    setStateMenu('none');
  }

  const { coords } = useGetLocation();


  return (
    <ContainerBuscar>
      <Helmet>
        <title>Loquei | Buscar</title>
      </Helmet>
      <Header />

      <BoxGrid>
        {/* <BoxMobileSearch>
          <form>
            <input type="text" placeholder="Pesquisar por algum local..." />
            <button><BiSearch size={30} /></button>
          </form>
          <button className="button_open" onClick={handleOpenMenu}>
            <BiFilterAlt size={30} />
          </button>
        </BoxMobileSearch> */}

        <BoxFilter style={{ display: stateMenu }}>
          <button className="button_close" onClick={handleCloseMenu}>
            <IoMdClose size={20} color="#FFF" />
          </button>
          <form>
            <div className="box_input">
              <h3>Localização</h3>
              <input className={themeIsActive && "dark_input"} type="text" placeholder="Digite algum endereço" />
              <HiOutlineLocationMarker className="icon" size="25 " />
            </div>

            <div className="box_input">
              <h3>Tipo de espaço</h3>
              <div className="grid_checkbox">
                <label className="checkbox">
                  Comercial
                  <input type="checkbox" placeholder="Comercial" />
                  <span className={themeIsActive && "dark_checkbox"}><FaCheck className="icons" /></span>
                </label>
                <label className="checkbox">
                  Espaço eventual
                  <input type="checkbox" placeholder="Espaço eventual" />
                  <span className={themeIsActive && "dark_checkbox"}><FaCheck className="icons" /></span>
                </label>
                <label className="checkbox">
                  Garagem
                  <input type="checkbox" placeholder="Garagem" />
                  <span className={themeIsActive && "dark_checkbox"}><FaCheck className="icons" /></span>
                </label>
                <label className="checkbox">
                  Outros espaços
                  <input type="checkbox" placeholder="Outros espaços" />
                  <span className={themeIsActive && "dark_checkbox"}><FaCheck className="icons" /></span>
                </label>
                <label className="checkbox">
                  Box
                  <input type="checkbox" placeholder="Box" />
                  <span className={themeIsActive && "dark_checkbox"}><FaCheck className="icons" /></span>
                </label>
              </div>
            </div>

            <div className="box_input">
              <h3>Metragem do espaço - m²</h3>
              <div className="grid_input">
                <input className={themeIsActive && "dark_input"} type="number" placeholder="de" />
                <span>ex: 30</span>
              </div>
              <div className="grid_input">
                <input className={themeIsActive && "dark_input"} type="number" placeholder="até" />
                <span>ex: 100</span>
              </div>
            </div>
          </form>
        </BoxFilter>

        {!coords ? (
          <span>carregando</span>
        ) : (
          <MapContainer 
            center={[coords[0], coords[1]]} 
            zoom={16} 
            style={{ width: "100%", height: "100%" }}
          >
            <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/${themeIsActive ? 'dark-v10' : 'light-v10'}/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ3VzdGF2MGsiLCJhIjoiY2tnODluaHlmMGYwOTJzb3puNGQ5M3JtYyJ9.oCWjv8e5vZqFdl_jja_Ecg`} />
            <Marker 
              position={[coords[0], coords[1]]} 
              icon={IconLocal}
            >
            </Marker>

            <Marker 
              position={[coords[0] - 0.009, coords[1] - 0.02]} 
              icon={IconSpace}
            >
              <Popup>
                Garagem grande
              </Popup>
            </Marker>
          </MapContainer>
        )}
      </BoxGrid>
    </ContainerBuscar>
  );
}