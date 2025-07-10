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
                console.log(this.weatherData);
            }
        }
    }
</script>
<template>
    <div class="bg-white w-full max-w-6xl mx-auto h-screen">
        <div>
            <div class="max-w-5xl mx-auto">
                <button @click="this.$router.back()" class="cursor-pointer">back</button>
            </div>
            <div>
                <h2>daily weather</h2>
            </div>
            <div>
                <h2>{{ $route.params.city }}</h2>
            </div>
        </div>
        <div v-if="weatherData && weatherData.forecast && weatherData.forecast.forecastday">
            <div v-for="day in weatherData.forecast.forecastday">
                <div class="grid grid-cols-2 bg-white mt-5 shadow p-5 h-80 max-w-5xl mx-auto rounded-2xl">
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
</template>

