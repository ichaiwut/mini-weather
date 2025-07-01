<script>
import getWeather from '../services/weather.service.js';
import daily from '../views/daily.vue';
import hourly from '../views/hourly.vue';

export default {
    components: {
        daily,
        hourly,
    },
    data() {
        return {
            weatherData: {},
            search: '',
            defaultLocation: 'chiang mai',
            isHourly: true,
        };
    },
    mounted() {
        this.getWeatherdata(this.defaultLocation);
    },
    methods: {
        async getWeatherdata(location) {
            const response = await getWeather(location);
            this.weatherData = response;
        }
    }
};
</script>

<template>
    <!-- container -->
    <div class="w-full max-w-5xl mx-auto">
        <!-- กล่องค้นหา -->
        <div
            class="border border-gray-300 rounded-xl bg-white text-gray-900 w-90 px-2 py-2 my-10 flex items-center mx-auto shadow">
            <input class="border-none outline-none w-full" v-model="search" type="text" placeholder="Search" />
            <input class="cursor-pointer" type="button" value="Search" @click="getWeatherdata(search)" />
        </div>
        <!-- หน้าหลัก -->
        <div class="grid grid-cols-3 gap-5">

            <!-- กล่องใหญ่ -->
            <div class="h-125 w-full bg-white rounded-2xl shadow col-span-2">
                <!-- ชื่อกล่องใหญ่ -->
                <div class="flex justify-between">
                    <div class="flex items-center ml-5 mt-5">
                        <button class="text-2xl font-bold cursor-default">Current Weather</button>
                    </div>
                    <div class="reload flex justify-end">
                        <button class="cursor-pointer p-2" @click="getWeatherdata(defaultLocation)">Reload</button>
                    </div>
                </div>
                <!-- ข้อมูลสภาพอากาศ -->
                <div>
                    <div v-if="weatherData && weatherData.current && weatherData.current.condition"
                        class="flex flex-col items-center">
                        <div class="mt-5">
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
                    <div v-else class="text-center text-gray-500 my-50">
                        <p>Loading weather data...</p>
                    </div>
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
                    <!-- โชว์คอนเทนต์ hourly -->
                    <div v-if="isHourly">
                        <hourly />
                    </div>
                    <!-- โชว์คอนเทนต์ daily -->
                    <div v-else>
                        <daily />
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
