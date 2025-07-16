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
    <div class="bg-white max-w-5xl mx-auto h-screen">
        <div class="flex justify-between">
            <div>
                <button @click="this.$router.back()" class="cursor-pointer">back</button>
            </div>
            <div>
                <h2>{{ $route.params.city }}</h2>
            </div>
        </div>
        <div class="p-5 w-full mx-auto">
            <div class="bg-blue-500">
                <!-- hourly weather title -->
                <h2>Daily Weather</h2>
            </div>
            <div v-if="weatherData && weatherData.forecast && weatherData.forecast.forecastday">
                <div v-for="day in weatherData.forecast.forecastday">
                    <div class="grid grid-cols-2 bg-white mt-5 shadow p-5 h-80">
                        <div>
                            <p>{{ dayjs(day.date).format('dddd') }}</p>
                            <p>{{ dayjs(day.date).format('DD/MM') }}</p>
                            <p>{{ day.day.condition.text }}</p>
                            <img :src="day.day.condition.icon" alt="weather icon" class="w-25">
                            <p>{{ day.day.maxtemp_c }}°C</p>
                        </div>
                        <div>
                            <p>Wind speed: <span class="font-bold">{{ day.day.maxwind_kph }} kph</span></p>
                            <p>Humidity: <span class="font-bold">{{ day.day.avghumidity }}%</span></p>
                            <p>Pressure: <span class="font-bold">{{ day.day.pressure_mb }} mb</span></p>
                            <p>Cloud cover: <span class="font-bold">{{ day.day.cloud }}%</span></p>
                            <p>UV: <span class="font-bold">{{ day.day.uv }} / 10</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
