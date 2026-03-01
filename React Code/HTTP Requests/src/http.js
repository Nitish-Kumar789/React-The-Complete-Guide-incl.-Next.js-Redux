export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places"); // return promise
  const resData = await response.json(); // return promise

  // if there is some error while fetching data , let supposer server return 400, 500

  if (!response.ok) {
    throw new Error("Failed to fetch places");
  }

  return resData.places;
}
