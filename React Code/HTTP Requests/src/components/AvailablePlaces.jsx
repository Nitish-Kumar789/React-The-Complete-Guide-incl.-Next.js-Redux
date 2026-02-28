import { useState, useEffect } from "react";
import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [AvailablePlaces, setAvailablePlaces] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/places")
  //     .then((reponse) => {
  //       return reponse.json();
  //     })
  //     .then((resData) => {
  //       setAvailablePlaces(resData.places);
  //     });
  // }, []);

  useEffect(() => {
    async function fetchPlaces() {
      const response = await fetch("http://localhost:3000/places");
      const resData = await response.json();
      setAvailablePlaces(resData.places);
    }
    fetchPlaces();
  }, []);

  return (
    <Places
      title="Available Places"
      places={AvailablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
