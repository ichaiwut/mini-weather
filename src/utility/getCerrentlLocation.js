import handleError from "../utility/handleError.js";

function getCurrentLocation(callback) {
  if (!navigator.geolocation) return;

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const coords = `${position.coords.latitude},${position.coords.longitude}`;
      callback(coords);
    },
    (error) => {
      handleError(error, "Error getting location");
    },
  );
}

export default getCurrentLocation;
