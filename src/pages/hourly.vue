<script>
import { getWeather } from '../services/weather.service.js';
import dayjs from 'dayjs';
export default {
    data() {
        return {
            weatherData: {},
            dayjs
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
            <div>
                <!-- back button -->
                <button @click="this.$router.back()" class="shadow cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-xl">&larr; back</button>
            </div>
            <div class="text-center font-bold text-2xl mr-4 text-gray-600">
                <!-- city name -->
                <h2>{{ $route.params.city }}</h2>
            </div>
        </div>
        <div class="bg-zinc-100 shadow p-5 max-w-5xl mx-auto rounded-2xl">
            <div class= "shadow bg-blue-500 p-5 rounded-2xl text-center text-white font-bold text-xl">
                <!-- hourly weather title -->
                <h2>hourly weather</h2>
            </div>
            <div
                v-if="weatherData && weatherData.forecast && weatherData.forecast.forecastday && weatherData.forecast.forecastday[0]">
                <div v-for="hour in weatherData.forecast.forecastday[0].hour">
                    <div class="grid grid-cols-2 rounded-2xl bg-white mt-5 shadow p-5 h-80 max-w-5xl mx-auto">
                        <div class="flex flex-col gap-1.5 justify-center items-center">
                            <p>{{ dayjs(hour.time).format('HH:mm') }}</p>
                            <p>{{ hour.condition.text }}</p>
                            <img :src="hour.condition.icon" alt="weather icon" class="w-25">
                            <p>{{ hour.temp_c }}°C</p>

                        </div>
                        <div class="flex flex-col gap-1.5 justify-center ">
                            <p>Wind speed: {{ hour.wind_kph }} kph</p>
                            <p>Wind direction: {{ hour.wind_dir }}</p>
                            <p>Wind gust: {{ hour.wind_gust_kph }} kph</p>
                            <p>Wind chill: {{ hour.windchill_c }}°C</p>
                            <p>Wind degree: {{ hour.wind_degree }} degree</p>
                            <p>Humidity: {{ hour.humidity }}%</p>
                            <p>Pressure: {{ hour.pressure_mb }} mb</p>
                            <p>Cloud: {{ hour.cloud }}%</p>
                            <p>UV: {{ hour.uv }} / 10</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>