import { Container } from "./styles";

import { Link } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import { useTheme } from '../../hooks/useTheme';
import { useGetLocation } from "../../hooks/useGetLocation";  

import { Filter } from "./components/Filter";
import { IconLocal, IconSpace } from "../IconLeaflet";

export function Map() {
  const light = 'https://api.mapbox.com/styles/v1/mapbox/navigation-guidance-day-v4/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ3VzdGF2MGsiLCJhIjoiY2tnODluaHlmMGYwOTJzb3puNGQ5M3JtYyJ9.oCWjv8e5vZqFdl_jja_Ecg';
  const dark = 'https://api.mapbox.com/styles/v1/mapbox/navigation-guidance-night-v4/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ3VzdGF2MGsiLCJhIjoiY2tnODluaHlmMGYwOTJzb3puNGQ5M3JtYyJ9.oCWjv8e5vZqFdl_jja_Ecg';
  
  const { coords } = useGetLocation();
  const { themeIsActive } = useTheme();

  return (
    <Container>
      <Filter />
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

          <Marker 
            position={[coords[0] - 0.0028, coords[1] - 0.0085]} 
            icon={IconSpace}
          >
            <Popup>
              <Link to="/ad-details" className="ad-information">
                <h2>Garagem grande - SP/ZN</h2>
                <p>Rua Elias de Almeida | São Paulo - SP</p>
                <p>CEP: 02319-120</p>
              </Link>
            </Popup>
          </Marker>

          <Marker 
            position={[coords[0] - 0.0028, coords[1] - 0.0085]} 
            icon={IconSpace}
          >
            <Popup>
              <Link to="/ad-details" className="ad-information">
                <h2>Garagem grande - SP/ZN</h2>
                <p>Rua Elias de Almeida | São Paulo - SP</p>
                <p>CEP: 02319-120</p>
              </Link>
            </Popup>
          </Marker>

          <Marker 
            position={[coords[0] + 0.0027, coords[1] + 0.0083]} 
            icon={IconSpace}
          >
            <Popup>
              <Link to="/ad-details" className="ad-information">
                <h2>Garagem grande - SP/ZN</h2>
                <p>Rua Elias de Almeida | São Paulo - SP</p>
                <p>CEP: 02319-120</p>
              </Link>
            </Popup>
          </Marker>

          <Marker 
            position={[coords[0] + 0.0036, coords[1] + 0.0022]} 
            icon={IconSpace}
          >
            <Popup>
              <Link to="/ad-details" className="ad-information">
                <h2>Garagem grande - SP/ZN</h2>
                <p>Rua Elias de Almeida | São Paulo - SP</p>
                <p>CEP: 02319-120</p>
              </Link>
            </Popup>
          </Marker>

          <Marker 
            position={[coords[0] - 0.0016, coords[1] + 0.0009]} 
            icon={IconSpace}
          >
            <Popup>
              <Link to="/ad-details" className="ad-information">
                <h2>Garagem grande - SP/ZN</h2>
                <p>Rua Elias de Almeida | São Paulo - SP</p>
                <p>CEP: 02319-120</p>
              </Link>
            </Popup>
          </Marker>
          <Marker 
            position={[coords[0] + 0.0026, coords[1] - 0.0036]} 
            icon={IconSpace}
          >
            <Popup>
              <Link to="/ad-details" className="ad-information">
                <h2>Garagem grande - SP/ZN</h2>
                <p>Rua Elias de Almeida | São Paulo - SP</p>
                <p>CEP: 02319-120</p>
              </Link>
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </Container>
  );
}