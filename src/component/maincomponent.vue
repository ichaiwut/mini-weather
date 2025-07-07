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
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        this.getWeatherdata(`${position.coords.latitude},${position.coords.longitude}`)
                    }
                );
            }
        },
        searchLocation() {
            if (this.search === '') {
                return alert('Please enter a location');
            }
            this.getWeatherdata(this.search);
        },
        reload() {
            this.getWeatherdata(this.defaultLocation);
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
            <input class="cursor-pointer" type="button" value="Search" @click="searchLocation" @keydown.enter="searchLocation" />
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
                        <div class="mt-10 mb-5">
                            <p class="text-3xl font-bold cursor-default">{{ weatherData.location.name + ', ' +
                                weatherData.location.country }}</p>
                        </div>
                        <!-- weather cloud and temp -->
                        <div class="flex flex-col items-center gap-5">

                            <!-- weather cloud -->
                            <div>
                                <img :src="weatherData.current.condition.icon" alt="weather icon" class="w-25">
                            </div>

                            <!-- weather cloud text -->
                            <div>
                                <p class="text-xl font-bold cursor-default">{{ weatherData.current.condition.text }}</p>
                            </div>

                            <!-- weather temp -->
                            <div>
                                <p class="text-3xl font-bold cursor-default">{{ weatherData.current.temp_c }}°C</p>
                                <p>Feels like {{ weatherData.current.feelslike_c }}°C</p>
                            </div>
                        </div>
                    </div>
                    <!-- loading -->
                    <div v-else-if="isLoading"
                        class="text-center text-gray-500 my-20 flex flex-col items-center justify-center py-10">
                        <p>Loading weather data...</p>
                    </div>

                    <!-- not found when search not found the location -->
                    <div v-else class="text-center text-gray-500 my-20 flex flex-col items-center justify-center py-10">
                        <p>Weather data not found.</p>
                    </div>
                </div>
            </div>

            <!-- air quality box -->
            <div class="h-120 w-full">
                <airQualityComponent class="mb-5" :airQualityData="weatherData" :isLoading="isLoading" :reload="reload"/>
                <todayHighlightComponent />
            </div>
            <!-- weather forecast box -->
            <div class="col-span-3">
                <forecastComponent />
            </div>
        </div>
    </div>
</template>
