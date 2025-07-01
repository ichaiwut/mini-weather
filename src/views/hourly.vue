<script>
import getWeather from '../services/weather.service.js';
export default {
    data() {
        return {
            hourlyData: {},
            defaultLocation: 'chiang mai',
        }
    },
    mounted() {
        this.getWeatherdata(this.defaultLocation);
    },
    methods: {
        async getWeatherdata(location) {
            const response = await getWeather(location);
            this.hourlyData = response;
        }
    }
}
</script>
<template>
    <div class="">
        <h2>Hourly Weather</h2>

    </div>
</template>