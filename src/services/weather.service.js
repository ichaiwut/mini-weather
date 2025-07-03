import axios from 'axios';
import handleError from '../utility/handleError.js';

const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

async function getWeather(city) {
  try {
    const response = await axios.get(
      `${apiUrl}/current.json?q=${city}&key=${apiKey}`
    );  
    return response.data;
  } catch (error) {
    handleError(error, 'can\'t find location');
    return null;
  }
}

export default getWeather;
