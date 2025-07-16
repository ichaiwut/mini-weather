<script>
import { getWeather } from '../../services/weather.service.js';
import getCurrentLocation from '../../utility/getCerrentlLocation.js';
import airQualityComponent from '../SubComponents/airQualityComponent.vue';
import weatherHighlightComponent from '../SubComponents/weatherHighlightComponent.vue';
import forecastComponent from '../SubComponents/forecastComponent.vue';
import searchComponent from '../SubComponents/searchComponent.vue';

export default {
    components: {
        airQualityComponent,
        weatherHighlightComponent,
        forecastComponent,
        searchComponent,
        getCurrentLocation
    },
    data() {
        return {
            weatherData: {},
            search: '',
            defaultLocation: 'chiang mai',
            isLoading: false,
        };
    },
    created() {
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
        searchLocation(location) {
            // Handle search from searchComponent emit
            const searchTerm = location || this.search;
            this.getWeatherdata(searchTerm);
        },
        reload() {
            this.getWeatherdata(this.defaultLocation);
        }
    }
};
</script>

<template>
    <!-- container -->
    <div class="w-full max-w-5xl mx-auto">

        <!-- search box -->
        <div class="flex justify-center gap-5">
            <searchComponent 
                v-model="search" 
                @search="searchLocation" 
            />
            <button @click="getCurrentLocation">Current Location</button>
        </div>

        <!-- main page -->
        <div class="grid grid-cols-3 gap-5">

            <!-- main box -->
            <div class="h-125 w-full bg-white rounded-2xl shadow col-span-2">

                <!-- main box title -->
                <div class="flex justify-between items-center">
                    <div class="ml-5 mt-5">
                        <button class="text-2xl font-bold cursor-default">Current Weather</button>
                    </div>

                    <div class="mr-5">
                        <router-link v-if="weatherData && weatherData.location"
                            :to="{ name: 'hourly', params: { city: weatherData.location.name } }">See More</router-link>
                        <button class="cursor-pointer p-2 ml-5" @click="reload">Reload</button>
                    </div>
                </div>

                <!-- current weather box -->
                <router-link v-if="weatherData?.location?.name"
                    :to="{ name: 'toDay', params: { city: weatherData.location.name } }">
                    <div v-if="weatherData && weatherData.current && weatherData.current.condition"
                        class="flex flex-col items-center h-112 rounded-2xl ">
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
                </router-link>
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

            <!-- air quality box -->
            <div class="h-120 w-full">
                <airQualityComponent class="mb-5" :weatherData="weatherData" :isLoading="isLoading" />
                <weatherHighlightComponent :weatherData="weatherData" :isLoading="isLoading" />
            </div>
            <!-- weather forecast box -->
            <div class="col-span-3">
                <forecastComponent :weatherData="weatherData" :isLoading="isLoading" />
            </div>
        </div>
    </div>
</template>
