import axios from 'axios';

const apiKey = '2d9b8167c6974910a5921942250107';
const apiUrl = 'https://api.weatherapi.com/v1';

async function getWeather(city) {
  try {
    const response = await axios.get(
      `${apiUrl}/current.json?q=${city}&key=${apiKey}&lang=th`
    );
    return response.data;
  } catch (error) {
    const errorResponse = "Error: " + error.message;
    console.error(errorResponse);
    return errorResponse;
  }
}

export default getWeather;
