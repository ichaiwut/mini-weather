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
    <div class="max-w-5xl mx-3 h-120 xl:mx-auto">
        <div>
            <div class="flex justify-between w-full max-w-5xl mx-auto mb-5">
                <div>
                    <!-- back button -->
                    <button @click="this.$router.back()"
                        class="shadow cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-xl">&larr; back</button>
                </div>
                <div class="text-center font-bold text-2xl mr-4 text-gray-600">
                    <!-- city name -->
                    <h2>{{ $route.params.city }}</h2>
                </div>
            </div>
            <div class="bg-zinc-100 shadow p-5 max-w-5xl mx-auto rounded-2xl">
                <div class="shadow bg-blue-500 p-5 rounded-2xl text-center text-white font-bold text-xl">
                    <!-- air quality title -->
                    <h2 class="text-2xl font-bold cursor-default">Air Quality</h2>
                </div>
                <!-- air quality box -->
                <div
                    class="rounded-2xl bg-white mt-5 shadow p-5 h-80 max-w-5xl mx-auto flex flex-col items-center justify-center text-xl text-center">
                    <div v-if="weatherData && weatherData.current && weatherData.current.air_quality">
                        <!-- air quality data -->
                        <p>Carbon Monoxide: <span class="font-bold">{{ weatherData.current.air_quality.co }}
                                μg/m³</span></p>
                        <p>Nitrogen Dioxide: <span class="font-bold">{{ weatherData.current.air_quality.no2 }}
                                μg/m³</span></p>
                        <p>Ozone: <span class="font-bold">{{ weatherData.current.air_quality.o3 }} μg/m³</span></p>
                        <p>PM2.5: <span class="font-bold">{{ weatherData.current.air_quality.pm2_5 }} μg/m³</span></p>
                        <p>PM10: <span class="font-bold">{{ weatherData.current.air_quality.pm10 }} μg/m³</span></p>
                        <p>Sulfur Dioxide: <span class="font-bold">{{ weatherData.current.air_quality.so2 }}
                                μg/m³</span></p>
                        <p>US EPA Index: <span class="font-bold">{{ weatherData.current.air_quality['us-epa-index'] }} /
                                10</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
