import { Container } from "./styles";

import { useState } from "react";

import { Link } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import { useTheme } from '../../hooks/useTheme';
import { useGetLocation } from "../../hooks/useGetLocation";

import { Filter } from "./components/Filter";
import { IconLocal, IconSpace } from "../IconLeaflet";

export function Map({ announcementsFiltered, setAnnouncementsFiltered }) {
  const light = 'https://api.mapbox.com/styles/v1/mapbox/navigation-guidance-day-v4/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ3VzdGF2MGsiLCJhIjoiY2tnODluaHlmMGYwOTJzb3puNGQ5M3JtYyJ9.oCWjv8e5vZqFdl_jja_Ecg';
  const dark = 'https://api.mapbox.com/styles/v1/mapbox/navigation-guidance-night-v4/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ3VzdGF2MGsiLCJhIjoiY2tnODluaHlmMGYwOTJzb3puNGQ5M3JtYyJ9.oCWjv8e5vZqFdl_jja_Ecg';

  const { coords } = useGetLocation();
  const { themeIsActive } = useTheme();

  console.log(announcementsFiltered);

  return (
    <Container>
      <Filter setAnnouncementsFiltered={setAnnouncementsFiltered} />
      {(!coords) ? (
        <span>carregando</span>
      ) : (
        <MapContainer
          center={[coords[0], coords[1]]}
          zoom={15}
          scrollWheelZoom={false}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer url={themeIsActive ? dark : light} />
          <Marker
            position={[coords[0], coords[1]]}
            icon={IconLocal}
          >
          </Marker>

          {/* {announcementsFiltered.map(announcement => (
            <Marker
              position={[announcement.adress.latitude, announcement.adress.longitude]}
              icon={IconSpace}
            >
              <Popup>
                <Link to="/ad-details" className="ad-information">
                  <h2>{announcement.title}</h2>
                  <p>{announcement.adress} | {announcement.city} - {announcement.state}</p>
                  <p>CEP: {announcement.zip_code}</p>
                </Link>
              </Popup>
            </Marker>
          ))} */}

        </MapContainer>
      )}
    </Container>
  );
}