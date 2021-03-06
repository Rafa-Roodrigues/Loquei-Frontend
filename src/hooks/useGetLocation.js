import { useState, useEffect } from "react";

const defaultCoords = [-23.55052, -46.633308];

export function useGetLocation() {
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    function onSuccess(position) {
      setCoords([position.coords.latitude, position.coords.longitude])
    }
    function onError() {
      console.error('error on get location');
      setCoords(defaultCoords)
    }

    try {
      navigator.geolocation.getCurrentPosition(onSuccess, onError)
    } catch (error) {
      setCoords(defaultCoords)
    }
  }, []);

  return { coords };
}