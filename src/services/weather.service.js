import axios from 'axios';
import handleError from '../utility/handleError.js';

const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

async function getWeather(city) {
  try {
    const response = await axios.get(
      `${apiUrl}/forecast.json?q=${city}&key=${apiKey}&aqi=yes&days=3`
    );  
    return response.data;
  } catch (error) {
    handleError(error, 'can\'t find location');
    return null;
  }
}

export default getWeather;
