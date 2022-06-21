import { ContainerBuscar, BoxGrid, BoxFilter } from "./styles";

import { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useGetLocation } from "../../hooks/useGetLocation";

import Helmet from "react-helmet";

import { Header } from '../../components/Header';
import { Filter } from "./components/Filter";

import { BiFilterAlt, BiSearch } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';
import { FaCheck } from 'react-icons/fa';

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import { IconLocal, IconSpace } from "../../components/IconLeaflet";


export function Buscar() {
  const { themeIsActive } = useTheme();

  const { coords } = useGetLocation();


  return (
    <ContainerBuscar>
      <Helmet>
        <title>Loquei | Buscar</title>
      </Helmet>
      <Header />

      <BoxGrid>
        <Filter />

        {!coords ? (
          <span>carregando</span>
        ) : (
          <MapContainer 
            center={[coords[0], coords[1]]} 
            zoom={16} 
            style={{ width: "100%", height: "100%" }}
          >
            <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/${themeIsActive ? 'navigation-guidance-night-v4' : 'navigation-guidance-day-v4'}/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ3VzdGF2MGsiLCJhIjoiY2tnODluaHlmMGYwOTJzb3puNGQ5M3JtYyJ9.oCWjv8e5vZqFdl_jja_Ecg`} />
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