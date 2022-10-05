import L from 'leaflet';

import autoLocationIconPurple from '../../assets/img/icon-autoLocationPurple.svg';
import autoLocationIconGreen from '../../assets/img/icon-autoLocationGreen.svg';

import spaceLocationIconPurple from '../../assets/img/icon-spaceLocationPurple.svg';
import spaceLocationIconGreen from '../../assets/img/icon-spaceLocationGreen.svg';

export const IconLocalPurple = new L.Icon({
  iconUrl: autoLocationIconPurple,
  iconSize: new L.Point(31, 31),
  popupAnchor: [-1, -15],

  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
});

export const IconSpacePurple = new L.Icon({
  iconUrl: spaceLocationIconPurple,
  iconSize: new L.Point(20, 23),
  popupAnchor: [-1, -15],

  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
});

export const IconLocalGreen = new L.Icon({
  iconUrl: autoLocationIconGreen,
  iconSize: new L.Point(31, 31),
  popupAnchor: [-1, -15],

  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
});

export const IconSpaceGreen = new L.Icon({
  iconUrl: spaceLocationIconGreen,
  iconSize: new L.Point(20, 23),
  popupAnchor: [-1, -15],

  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
});
