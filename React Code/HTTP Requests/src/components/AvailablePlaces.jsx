import { useState, useEffect } from "react";
import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setisFetching] = useState(false);

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
    setisFetching(true);
    async function fetchPlaces() {
      const response = await fetch("http://localhost:3000/places");
      const resData = await response.json();
      setAvailablePlaces(resData.places);
      setisFetching(false);
    }
    fetchPlaces();
  }, []);

  return (
    <Places
      title="Available Places"
      places={AvailablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
