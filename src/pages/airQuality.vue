<script>
import getWeather from '../services/weather.service.js';

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
        async getWeatherdata(location) {
            const response = await getWeather(location);
            this.weatherData = response;
            console.log(this.weatherData);
        }
    }
}
</script>

<template>
    <div class=" h-210">
        <div class="bg-white mt-5 shadow p-5 h-100 max-w-5xl mx-auto">
            <div class="w-full max-w-5xl mx-auto">
                <div>
                    <!-- back button -->
                    <button @click="this.$router.back()" class="cursor-pointer">back</button>
                </div>
                <div>
                    <!-- Air Quality title -->
                    <h2>Air Quality</h2>
                </div>
                <div>
                    <!-- city name -->
                    <h2>{{ $route.params.city }}</h2>
                </div>
            </div>
            <div class="bg-white mt-5 shadow p-5 max-w-5xl mx-auto">
                <div>
                    <!-- air quality title -->
                    <h2 class="text-2xl font-bold cursor-default">Air Quality</h2>
                </div>
                <!-- air quality box -->
                <div v-if="weatherData && weatherData.current && weatherData.current.air_quality">
                    <!-- air quality data -->
                    <p>Carbon Monoxide: {{ weatherData.current.air_quality.co }} μg/m³</p>
                    <p>Nitrogen Dioxide: {{ weatherData.current.air_quality.no2 }} μg/m³</p>
                    <p>Ozone: {{ weatherData.current.air_quality.o3 }} μg/m³</p>
                    <p>PM2.5: {{ weatherData.current.air_quality.pm2_5 }} μg/m³</p>
                    <p>PM10: {{ weatherData.current.air_quality.pm10 }} μg/m³</p>
                    <p>Sulfur Dioxide: {{ weatherData.current.air_quality.so2 }} μg/m³</p>
                    <p>US EPA Index: {{ weatherData.current.air_quality['us-epa-index'] }} / 10</p>
                </div>
            </div>
        </div>
    </div>
</template>
