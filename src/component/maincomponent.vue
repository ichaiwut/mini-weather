<script>
import getWeather from '../services/weather.service.js';
import airQualityComponent from './airQualityComponent.vue';
import todayHighlightComponent from './todayHighlightComponent.vue';
import forecastComponent from './forecastComponent.vue';
import toastAlert from './toastAlert.vue';

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
    <div>
        <!-- search box -->
        <div class="flex flex-wrap  md:flex justify-center mb-8">
            <div
                class="bg-white flex w-[300px] p-2 rounded-[10px] shadow-lg px-5">
                <input class="border-none outline-none w-full" v-model="search" type="text" placeholder="Search" />
                <input class="cursor-pointer" type="button" value="Search" @click="searchLocation"
                    @keydown.enter="searchLocation" />
            </div>
            <div class="text-gray-500 text-sm flex items-center ml-1 p-2">
                <button class="cursor-pointer" @click="getCurrentLocation">Current location</button>
            </div>
        </div>

        <!-- main page -->
        <div class="flex flex-wrap justify-between max-w-5xl mx-auto gap-5 xl:grid grid-cols-1 ">

            <!-- main box -->
            <div class="w-full bg-white rounded-xl shadow mx-3 p-4">

                <!-- main box title -->
                <div class="flex justify-between">
                    <div class="m-1">
                        <button class="text-xl font-bold cursor-default">Current Weather</button>
                    </div>
                    <div class="reload">
                        <button class="cursor-pointer p-2" @click="reload"><img src="../assets/reload-icon.svg" alt="reload" class="w-4"></button>
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
            <div class="w-full md:flex xl:grid">
                <airQualityComponent class="mb-5" :airQualityData="weatherData" :isLoading="isLoading"
                    :reload="reload" />
                <todayHighlightComponent />
            </div>
            <!-- weather forecast box -->
            <div class="col-span-3">
                <forecastComponent />
            </div>
        </div>
    </div>
</template>
