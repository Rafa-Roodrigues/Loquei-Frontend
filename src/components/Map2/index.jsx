import { Container } from "./styles";

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useMap } from 'react-leaflet/hooks';

import { useTheme } from '../../hooks/useTheme';

import { Filter } from "./components/Filter";
import { IconLocalGreen, IconLocalPurple, IconSpaceGreen, IconSpacePurple } from "../IconLeaflet";
import { useAnnouncement } from "../../hooks/useAnnouncement";

export function ChangeView({ addressCoordinates }) {
  const map = useMap();

  map.flyTo({ lat: addressCoordinates[0], lng: addressCoordinates[1] }, map.getZoom());

  return null;
}

function LocationMarker({ setAddressCoordinates, addressCoordinates }) {
  const [position, setPosition] = useState(null);

  const map = useMap();
  const { themeIsActive } = useTheme();


  useEffect(() => {

    if(addressCoordinates[0] && addressCoordinates[1]) {
      setPosition(addressCoordinates);
      
    } else {
      map.locate().on("locationfound", (e) => {
        setAddressCoordinates([e.latlng.lat, e.latlng.lng])
        setPosition(e.latlng);
        map.setView(e.latlng, 15);
      });
    }
    
  }, [map, addressCoordinates]);

  return position === null ? null : (
    <Marker position={position} icon={themeIsActive ? IconLocalGreen : IconLocalPurple}></Marker>
  )
}

export function Map() {
  const [addressCoordinates, setAddressCoordinates] = useState(["",""]);
  
  const {announcements} = useAnnouncement();

  console.log(announcements);
 
  const { themeIsActive } = useTheme();

  function ThemeMap() {
    const light = 'https://api.mapbox.com/styles/v1/mapbox/navigation-guidance-day-v4/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ3VzdGF2MGsiLCJhIjoiY2tnODluaHlmMGYwOTJzb3puNGQ5M3JtYyJ9.oCWjv8e5vZqFdl_jja_Ecg';
    const dark = 'https://api.mapbox.com/styles/v1/mapbox/navigation-guidance-night-v4/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ3VzdGF2MGsiLCJhIjoiY2tnODluaHlmMGYwOTJzb3puNGQ5M3JtYyJ9.oCWjv8e5vZqFdl_jja_Ecg';
    
    if(themeIsActive) {
      return <TileLayer url={dark} />
    }
  
    return <TileLayer url={light} />
  }

  useEffect(() => {
    ThemeMap();
  }, [themeIsActive]);

  return (
    <Container>
      <Filter setAddressCoordinates={setAddressCoordinates}/>
      <MapContainer
        center={addressCoordinates}
        zoom={8}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "100%" }}
      >

        <LocationMarker
          addressCoordinates={addressCoordinates} 
          setAddressCoordinates={setAddressCoordinates} 
        /> 
        
        <ThemeMap />

        <ChangeView addressCoordinates={addressCoordinates} />

        {announcements.map(announcement => (
          <Marker
            position={[announcement.latitude, announcement.longitude]}
            icon={themeIsActive ? IconSpaceGreen : IconSpacePurple}
            key={announcement.id}
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