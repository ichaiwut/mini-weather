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
        <div class="flex justify-between my-5">
            <div>
                <button @click="this.$router.back()" class="shadow cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-xl">&larr; back</button>
            </div>
            <div class="text-center font-bold text-2xl mr-4 text-gray-600">
                <h2>{{ $route.params.city }}</h2>
            </div>
        </div>
        <div class="bg-zinc-100 shadow p-5 max-w-5xl mx-auto rounded-2xl">
            <div class="shadow bg-blue-500 p-5 rounded-2xl text-center text-white font-bold text-xl">
                <!-- hourly weather title -->
                <h2>Daily Weather</h2>
            </div>
            <div v-if="weatherData && weatherData.forecast && weatherData.forecast.forecastday">
                <div v-for="day in weatherData.forecast.forecastday">
                    <div class="grid grid-cols-2 rounded-2xl bg-white mt-5 shadow p-5 h-80 max-w-5xl mx-auto">
                        <div class="flex flex-col gap-1.5 justify-center items-center">
                            <p>{{ dayjs(day.date).format('dddd') }}</p>
                            <p>{{ dayjs(day.date).format('DD/MM') }}</p>
                            <p>{{ day.day.condition.text }}</p>
                            <img :src="day.day.condition.icon" alt="weather icon" class="w-25">
                            <p>{{ day.day.maxtemp_c }}°C</p>
                        </div>
                        <div class="flex flex-col gap-1.5 justify-center items-center">
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
