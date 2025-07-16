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
            console.log(this.weatherData);
        }
    }
}
</script>

<template>
    <div class="h-210">
        <div class="bg-white mt-5 shadow p-5 h-100 max-w-5xl mx-auto">
            <div class="flex justify-between w-full max-w-5xl mx-auto ">
                <div>
                    <!-- back button -->
                    <button @click="this.$router.back()" class="cursor-pointer">back</button>
                </div>
                <div>
                    <!-- city name -->
                    <h2>{{ $route.params.city }}</h2>
                </div>
            </div>
            <div class="bg-white shadow p-5 max-w-5xl mx-auto">
                <div class="flex justify-between bg-blue-500">
                    <h2 class="text-2xl font-bold cursor-default">Weather Highlight</h2>
                    <p>{{ dayjs().format('HH:00') }}</p>
                </div>
                <div v-if="weatherData && weatherData.current && weatherData.current.condition">
                    <p>Wind speed: <span class="font-bold">{{ weatherData.current.wind_kph }} kph</span></p>
                    <p>wind degree: <span class="font-bold">{{ weatherData.current.wind_degree }} degree</span></p>
                    <p>Wind direction: <span class="font-bold">{{ weatherData.current.wind_dir }}</span></p>
                    <p>Wind chill: <span class="font-bold">{{ weatherData.current.windchill_c }}°C</span></p>
                    <p>Wind gust: <span class="font-bold">{{ weatherData.current.wind_gust_kph }} kph</span></p>
                    <p>Humidity: <span class="font-bold">{{ weatherData.current.humidity }}%</span></p>
                    <p>Pressure: <span class="font-bold">{{ weatherData.current.pressure_mb }} mb</span></p>
                    <p>Cloud: <span class="font-bold">{{ weatherData.current.cloud }}%</span></p>
                    <p>UV: <span class="font-bold">{{ weatherData.current.uv }} / 10</span></p>
                </div>
            </div>
        </div>
    </div>
</template>