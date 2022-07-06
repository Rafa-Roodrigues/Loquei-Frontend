import L from 'leaflet';

import autoLocationIcon from '../../assets/img/icon-autoLocation.svg';
import spaceLocationIcon from '../../assets/img/icon-spaceLocation.svg';
import easterEgg from '../../assets/img/easteregg.png';

export const IconLocal = new L.Icon({
  iconUrl: autoLocationIcon,
  iconSize: new L.Point(31, 31),
  popupAnchor: [-1, -15],

  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
});

export const IconSpace = new L.Icon({
  iconUrl: spaceLocationIcon,
  iconSize: new L.Point(20, 23),
  popupAnchor: [-1, -15],

  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
});

export const IconEasterEgg = new L.Icon({
  iconUrl: easterEgg,
  iconSize: new L.Point(20, 23),
  popupAnchor: [-1, -15],

  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
});