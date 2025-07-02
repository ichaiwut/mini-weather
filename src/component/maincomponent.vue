<script>
import getWeather from '../services/weather.service.js';
import airQualityComponent from './airQualityComponent.vue';
import todayHighlightComponent from './todayHighlightComponent.vue';
import forecastComponent from './forecastComponent.vue';

export default {
    components: {
        airQualityComponent,
        todayHighlightComponent,
        forecastComponent
    },
    data() {
        return {
            weatherData: {},
            search: '',
            defaultLocation: 'chiang mai',
            isLoading: false,   
        };
    },
    mounted() {
        this.getWeatherdata(this.defaultLocation);
    },
    methods: {
        async getWeatherdata(location) {
            this.isLoading = true;
            const response = await getWeather(location);
            setTimeout(() => {
                this.weatherData = response;
                this.isLoading = false;
            }, 800);

        },
        getCurrentLocation() {
            this.isLoading = true;
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const latitude = position.coords.latitude;
                        const longitude = position.coords.longitude;
                        this.getWeatherdata(`${latitude},${longitude}`);
                    }
                );
            } else {
                this.isLoading = false;
            }
        },
        searchLocation() {
            if (this.search !== '') {
                this.isLoading = true;
                this.weatherData = {};
                setTimeout(() => {
                    this.getWeatherdata(this.search);
                }, 800);
            }
        },
        reload() {
            this.isLoading = true;
            this.weatherData = {};
            setTimeout(() => {
                this.getWeatherdata(this.defaultLocation);
            }, 800);
        }

    },

};
</script>

<template>
    <!-- container -->
    <div class="w-full max-w-5xl mx-auto">
        <!-- search box -->
        <div
            class="border border-gray-300 rounded-xl bg-white text-gray-900 w-90 px-2 py-2 my-10 flex items-center mx-auto shadow">
            <input class="border-none outline-none w-full" v-model="search" type="text" placeholder="Search" />
            <input class="cursor-pointer" type="button" value="Search" @click="searchLocation" />
        </div>
        <div>
            <button class="cursor-pointer" @click="getCurrentLocation">Current location</button>
        </div>
        <!-- main page -->
        <div class="grid grid-cols-3 gap-5">
            <!-- main box -->
            <div class="h-125 w-full bg-white rounded-2xl shadow col-span-2">
                <!-- main box title -->
                <div class="flex justify-between">
                    <div class="flex items-center ml-5 mt-5">
                        <button class="text-2xl font-bold cursor-default">Current Weather</button>
                    </div>
                    <div class="reload flex justify-end">
                        <button class="cursor-pointer p-2" @click="reload">Reload</button>
                    </div>
                </div>
                <!-- current weather box -->
                <div>
                    <div v-if="weatherData && weatherData.current && weatherData.current.condition"
                        class="flex flex-col items-center">
                        <div class="mt-10">
                            <h1 class="text-3xl font-bold cursor-default">{{ weatherData.location.name + ', ' +
                                weatherData.location.country }}</h1>
                        </div>
                        <div class="mt-5">
                            <h2 class="text-xl font-bold cursor-default">{{ weatherData.current.condition.text }}</h2>
                        </div>
                        <div class="mt-5">
                            <img :src="weatherData.current.condition.icon" alt="weather icon" class="w-20">
                        </div>
                        <div class="mt-5">
                            <h3 class="text-3xl font-bold cursor-default">{{ weatherData.current.temp_c }}°C</h3>
                        </div>
                    </div>
                    <div v-else-if="isLoading"
                        class="text-center text-gray-500 my-20 flex flex-col items-center justify-center py-10">
                        <p>Loading weather data...</p>
                    </div>
                    <div v-else class="text-center text-gray-500 my-20 flex flex-col items-center justify-center py-10">
                        <p>Weather data not found.</p>
                    </div>
                </div>
            </div>

            <!-- air quality box -->
            <div class="h-120 w-full">
                <airQualityComponent class="mb-5" />
                <todayHighlightComponent />
            </div>
            <!-- weather forecast box -->
            <div class="col-span-3">
                <forecastComponent />
            </div>
        </div>
    </div>
</template>
