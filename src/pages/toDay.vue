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
    <div class="max-w-5xl mx-3 xl:mx-auto">
        <div class="flex justify-between my-5 ">
            <!-- back button -->
            <button @click="this.$router.back()"
                class="shadow cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-xl">&larr; back</button>
            <div class="text-center font-bold text-2xl mr-4 text-gray-600">
                <!-- city name -->
                <h2>{{ $route.params.city }}</h2>
            </div>
        </div>
        <div class="bg-zinc-100 shadow p-5 max-w-5xl mx-auto rounded-2xl">
            <div class="shadow bg-blue-500 p-5 rounded-2xl text-center text-white font-bold text-xl">
                <!-- hourly weather title -->
                <h2>Today Weather</h2>
            </div>
            <div class="mb- shadow p-5 rounded-2xl text-center font-bold text-xl flex flex-col justify-center items-center mt-5">
                <!-- day weather data -->
                <p><img :src="weatherData.forecast.forecastday[0].day.condition.icon" alt="weather icon" class="w-25 ">
                </p>
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
</template>
