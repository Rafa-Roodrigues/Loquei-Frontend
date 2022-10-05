import { Container } from "./styles";

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useMap } from 'react-leaflet/hooks';

import { useTheme } from '../../hooks/useTheme';

import { Filter } from "./components/Filter";
import { IconLocal, IconSpace, IconEasterEgg } from "../IconLeaflet";
import { api } from "../../services/axios";

export function ChangeView({ center }) {
  const map = useMap();
  console.log("SEI LAAAAAAAA", center);
  map.flyTo({ lat: center[0], lng: center[1] }, 15);

  return null;
}

function LocationMarker({ setUserCoordinates }) {
  const [position, setPosition] = useState(null);

  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setUserCoordinates([e.latlng.lat, e.latlng.lng])
      setPosition(e.latlng);
      console.log(e.latlng.lat, e.latlng.lng);
      map.setView([e.latlng.lat, e.latlng.lng], 15);
    });
  }, [map]);

  return position === null ? null : (
    <Marker position={position} icon={IconLocal}>
    </Marker>
  )
}

export function Map({ announcementsFiltered, setAnnouncementsFiltered }) {
  const [userCoordinates, setUserCoordinates] = useState(["0", "0"]);
  const light = 'https://api.mapbox.com/styles/v1/mapbox/navigation-guidance-day-v4/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ3VzdGF2MGsiLCJhIjoiY2tnODluaHlmMGYwOTJzb3puNGQ5M3JtYyJ9.oCWjv8e5vZqFdl_jja_Ecg';
  const dark = 'https://api.mapbox.com/styles/v1/mapbox/navigation-guidance-night-v4/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ3VzdGF2MGsiLCJhIjoiY2tnODluaHlmMGYwOTJzb3puNGQ5M3JtYyJ9.oCWjv8e5vZqFdl_jja_Ecg';

  const { themeIsActive } = useTheme();

  async function getAnnouncementsByLocale() {
    const response = await api.post('/announcements', {
      lat: userCoordinates[0],
      lng: userCoordinates[1]
    });

    setAnnouncementsFiltered(response.data.announcements);
  }

  useEffect(() => {
    getAnnouncementsByLocale();
  }, [userCoordinates]);

  return (
    <Container>
      <Filter userCoordinates={userCoordinates} setUserCoordinates={setUserCoordinates} setAnnouncementsFiltered={setAnnouncementsFiltered} />
      <MapContainer
        center={userCoordinates}
        zoom={15}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "100%" }}
      >
        <LocationMarker setUserCoordinates={setUserCoordinates} />

        <TileLayer url={themeIsActive ? dark : light} />

        <Marker position={userCoordinates} icon={IconLocal} />

        <ChangeView center={userCoordinates} />

        <Marker
          position={[-23.5921533, -46.6877636]}
          icon={IconEasterEgg}
        >
          <Popup>
            <Link to="/easteregg">
              Como você me achou? Não clique aqui!
            </Link>
          </Popup>
        </Marker>

        {announcementsFiltered.map((announcement, index) => (
          <Marker
            position={[announcement.latitude, announcement.longitude]}
            icon={IconSpace}
            key={index}
          >
            <Popup>
              <Link to={`/anuncio/${announcement.id}`} className="ad-information">
                <h2>{announcement.title}</h2>
                <p>{announcement.adress} | {announcement.city} - {announcement.state}</p>
                <p>CEP: {announcement.zip_code}</p>
              </Link>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Container>
  );
}