<script>
import { getWeather } from '../services/weather.service.js';
import dayjs from 'dayjs';
export default {
    data() {
        return {
            weatherData: {},
            dayjs,
        }
    },
    created() {
        this.getWeatherdata(this.$route.params.city);
    },
    methods: {
        async getWeatherdata(location) {
            const response = await getWeather(location);
            this.weatherData = response;
        }
    }
}
</script>

<template>
    <div class="bg-white w-full max-w-6xl mx-auto h-150">
            <div class="flex justify-between">
                <!-- back button -->
                <button @click="this.$router.back()" class="cursor-pointer">back</button>
                <div>
                    <!-- city name -->
                    <h2>{{ $route.params.city }}</h2>
                </div>
            </div>
        <div class="w-full max-w-5xl mx-auto">
            <div class="h-125 w-full bg-white rounded-2xl shadow col-span-2 p-5">
                <!-- day weather -->
                <div class="flex justify-between bg-blue-500">
                    <p>Today weather</p>
                    <!-- day weather date -->
                    <p>{{ dayjs().format('DD/MM') }}</p>
                </div>
                <div v-if="weatherData && weatherData.forecast && weatherData.forecast.forecastday">
                    <div>
                        <!-- day weather data -->
                        <p><img :src="weatherData.forecast.forecastday[0].day.condition.icon" alt="weather icon" class="w-25"></p>
                        <p>{{ weatherData.forecast.forecastday[0].day.condition.text }}</p>
                        <p>{{ weatherData.forecast.forecastday[0].day.maxtemp_c }}°C</p>
                        <p>Feels like {{ weatherData.forecast.forecastday[0].day.avgtemp_c }}°C</p>
                        <p>Wind speed: {{ weatherData.forecast.forecastday[0].day.maxwind_kph }} kph</p>
                        <p>Humidity: {{ weatherData.forecast.forecastday[0].day.avghumidity }}%</p>
                        <p>Pressure: {{ weatherData.forecast.forecastday[0].day.pressure_mb }} mb</p>
                        <p>Cloud cover: {{ weatherData.forecast.forecastday[0].day.cloud }}%</p>
                        <p>UV: {{ weatherData.forecast.forecastday[0].day.uv }} / 10</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
