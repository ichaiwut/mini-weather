<script>
import getWeather from '../services/weather.service.js';
import dayjs from 'dayjs';
export default {
    data() {
        return {
            weatherData: {},
        }
    },
    created() {
        this.getWeatherdata(this.$route.params.city);
    },
    methods: {
        dayjs(date) {
            return dayjs(date);
        },
        async getWeatherdata(location) {
            const response = await getWeather(location);
            this.weatherData = response;
        }
    }
}
</script>
<template>
    <div class="bg-white w-full max-w-6xl mx-auto">
        <div class="max-w-5xl mx-auto">
            <div>
                <!-- back button -->
                <button @click="this.$router.back()" class="cursor-pointer">back</button>
            </div>
            <div>
                <!-- highLight weather title -->
                <h2>highLight weather</h2>
            </div>
            <div>
                <!-- city name -->
                <h2>{{ $route.params.city }}</h2>
            </div>
        </div>
        <div v-if="weatherData && weatherData.forecast && weatherData.forecast.forecastday && weatherData.forecast.forecastday[0]">
            <div v-for="hour in weatherData.forecast.forecastday[0].hour">
                <div class="grid grid-cols-2 bg-white mt-5 shadow p-5 h-80 max-w-5xl mx-auto">
                    <div>
                        <p>{{ dayjs(hour.time).format('HH:mm') }}</p>
                        <p>{{ hour.condition.text }}</p>
                        <img :src="hour.condition.icon" alt="weather icon" class="w-25">
                        <p>{{ hour.temp_c }}</p>

                    </div>
                    <div>
                        <p>Wind speed: {{ hour.wind_kph }} kph</p>
                        <p>Humidity: {{ hour.humidity }}%</p>
                        <p>Pressure: {{ hour.pressure_mb }} mb</p>
                        <p>Cloud: {{ hour.cloud }}%</p>
                        <p>UV: {{ hour.uv }} / 10</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>