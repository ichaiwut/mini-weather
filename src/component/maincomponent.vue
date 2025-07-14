<script>
import getWeather from '../services/weather.service.js';
import airQualityComponent from './airQualityComponent.vue';
import todayHighlightComponent from './todayHighlightComponent.vue';
import forecastComponent from './forecastComponent.vue';
import { HalfCircleSpinner } from 'epic-spinners'
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";


export default {
    
    components: {
        airQualityComponent,
        todayHighlightComponent,
        forecastComponent,
        HalfCircleSpinner,
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
            }, 1000);
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
                return  toast.warn('Please enter a location to search.'
                    , {
                        position: "top-right",
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    }
                );
            }
            this.getWeatherdata(this.search);
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
        <div class="flex m-5 flex-col gap-3 items-center lg:flex-row justify-center">
            <div class="bg-white p-2 flex gap-2 rounded-lg shadow">
                <input class="border-none outline-none w-[200px] md:w-[300px]" v-model="search" type="text"
                    placeholder="Search your location.." />
                <input class="cursor-pointer" type="button" value="Search" @click="searchLocation" />
            </div>
            <button class="flex items-center gap-2 cursor-pointer" @click="getCurrentLocation">
                <span class="text-zinc-500">Current location </span>
                <span>
                    <svg fill="#71717A" width="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z">
                        </path>
                    </svg>
                </span>
            </button>
        </div>

        <!-- main page -->
        <div class="lg:grid grid-cols-1">

            <!-- main box -->
            <div class="bg-white p-5 rounded-xl shadow mb-5 mx-4">

                <!-- main box title -->
                <div class="flex justify-between">
                    <div class="flex items-center">
                        <button class="text-2xl font-bold cursor-default">Current Weather</button>
                    </div>
                    <div class="reload flex justify-end">
                        <button class="cursor-pointer p-1.5 mx-2" @click="reload">
                            <img src="../assets/reload-icon.svg" alt="reload icon" class="w-5">
                        </button>
                    </div>
                </div>

                <!-- current weather box -->
                <div>
                    <div v-if="weatherData && weatherData.current && weatherData.current.condition"
                        class="flex flex-col items-center">
                        <div class="mt-10 mb-5">
                            <p class="text-3xl font-bold cursor-default">
                                {{ weatherData.location.name + ', ' + weatherData.location.country }}
                            </p>
                        </div>
                        <div class="flex flex-col items-center gap-5">
                            <div>
                                <img :src="weatherData.current.condition.icon" alt="weather icon" class="w-25" />
                            </div>
                            <div>
                                <p class="text-xl font-bold cursor-default">
                                    {{ weatherData.current.condition.text }}
                                </p>
                            </div>
                            <div>
                                <p class="text-3xl font-bold cursor-default">
                                    {{ weatherData.current.temp_c }}°C
                                </p>
                                <p>Feels like {{ weatherData.current.feelslike_c }}°C</p>
                            </div>
                        </div>
                    </div>

                    <!-- loading -->
                    <div v-else-if="isLoading"
                        class="text-center text-gray-500 my-20 flex flex-col items-center justify-center py-4 lg:py-10">
                        <div>
                            <half-circle-spinner :animation-duration="700" :size="60" color="#d4e6f1" />
                        </div>
                    </div>

                    <!-- not found -->
                    <div v-else class="text-center text-gray-500 my-20 flex flex-col items-center justify-center py-10">
                        <p>Weather data not found.</p>
                    </div>
                </div>
            </div>

            <!-- air quality + today highlight -->
            <div class="md:grid grid-cols-2 lg:grid-cols-none lg:w-[360px]">
                <airQualityComponent class="mb-5" :airQualityData="weatherData" :isLoading="isLoading"
                    :reload="reload" />
                <todayHighlightComponent :weatherHighlightData="weatherData" :isLoading="isLoading" />
            </div>

            <!-- forecast -->
            <div class="col-span-3">
                <forecastComponent :forecastData="weatherData" :isLoading="isLoading" />
            </div>
        </div>
    </div>
</template>
