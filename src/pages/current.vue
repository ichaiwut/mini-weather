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
    <div class="bg-white w-full max-w-6xl mx-auto h-screen">
        <div class="max-w-5xl mx-auto">
            <div>
                <!-- back button -->
                <button @click="this.$router.back()" class="cursor-pointer">back</button>
                <div>
                    <!-- current weather title -->
                    <h2>current weather</h2>
                </div>
                <div>
                    <!-- city name -->
                    <h2>{{ $route.params.city }}</h2>
                </div>
            </div>
        </div>
        <div class="w-full max-w-5xl mx-auto">
            <div class="h-125 w-full bg-white rounded-2xl shadow col-span-2 p-5">
                <!-- now weather -->
                <div class="flex justify-between">
                    <p>current weather</p>
                    <!-- hour weather time -->
                    <p>{{ dayjs().format('HH:mm') }}</p>

                </div>
                <div v-if="weatherData && weatherData.location && weatherData.current && weatherData.current.condition">
                    <div>
                        <!-- now weather data -->
                        <p>{{ weatherData.location.name }}</p>
                        <p>{{ weatherData.location.country }}</p>
                        <p><img :src="weatherData.current.condition.icon" alt="weather icon" class="w-25"></p>
                        <p>{{ weatherData.current.condition.text }}</p>
                        <p>{{ weatherData.current.temp_c }}°C</p>
                        <p>Feels like {{ weatherData.current.feelslike_c }}C°</p>
                        <p>Wind speed: {{ weatherData.current.wind_kph }} kph</p>
                        <p>wind gust: {{ weatherData.current.wind_gust_kph }} kph</p>
                        <p>Humidity: {{ weatherData.current.humidity }}%</p>
                        <p>Pressure: {{ weatherData.current.pressure_mb }} mb</p>
                        <p>Cloud cover: {{ weatherData.current.cloud }}%</p>
                        <p>UV: {{ weatherData.current.uv }} / 10</p>
                    </div>
                </div>
            </div>
            <div class="h-125 w-full bg-white rounded-2xl shadow col-span-2 mt-5 p-5">
                <!-- day weather -->
                <div class="flex justify-between">
                    <p>day</p>
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
