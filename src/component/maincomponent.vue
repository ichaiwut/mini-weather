<script>
import getWeather from '../services/weather.service.js';
import hourly from '../views/hourly.vue';
import daily from '../views/daily.vue';

export default {
    data() {
        return {
            weatherData: {},
            search: '',
            isHourly: true,
        };
    },
    components: {
        hourly,
        daily,
    },
    mounted() {
        this.getWeatherdata();
    },
    methods: {
        async getWeatherdata() {
            const response = await getWeather('Chiang Mai');
            console.log(response);
            this.weatherData = response.data;
        },
    },
};
</script>

<template>
    <!-- container -->
    <div class="w-full max-w-5xl mx-auto h-[84vh]">
        <!-- search -->
        <div
            class="border border-gray-300 rounded-xl bg-white text-gray-900 w-90 px-2 py-2 my-10 flex items-center mx-auto shadow">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                <path
                    d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z">
                </path>
            </svg>
            <input class="px-2 border-none outline-none w-full" v-model="search" type="text" placeholder="Search" />
        </div>
        <!-- main -->
        <div class="grid grid-cols-3 gap-5">

            <!-- กล่องใหญ่ -->
            <div class="h-125 w-full bg-white rounded-2xl shadow col-span-2">
                <div>
                    <ul>
                        <li v-if="weatherData && weatherData.current && weatherData.current.condition">
                            <p>
                                {{ weatherData.current.condition.text }}
                            </p>
                        </li>
                        <li v-else class="text-center text-gray-500 my-55">
                            <p>Loading weather data...</p>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- กล่องย่อยฝั่งขวา -->
            <div class="h-120 w-full ">
                <div class="bg-white h-60 rounded-2xl mb-5">

                </div>
                <div class="bg-white h-60 rounded-2xl">

                </div>
            </div>

            <!-- กล่องย่อยข้างล่าง -->
            <div class="h-60 w-full col-span-3">
                <div class="bg-white h-60 rounded-2xl">
                    <div class="flex justify-end">
                        <div class="bg-gray-200 p-2 gap-2">
                            <button class="bg-green-500 p-2" @click="isHourly = true">
                                Hourly
                            </button>
                            <button class="bg-blue-500 p-2" @click="isHourly = false">
                                Daily
                            </button>
                        </div>
                    </div>
                    <div v-if="isHourly">
                        <hourly />
                    </div>
                    <div v-else>
                        <daily />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
