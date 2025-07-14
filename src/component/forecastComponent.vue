<script>
import { HalfCircleSpinner } from 'epic-spinners'
export default {
    components: {
        HalfCircleSpinner
    },
    props: {
        forecastData: Object,
        isLoading: Boolean,
    },
    data() {
        return {
            isHourly: true,
        };
    }
};
</script>

<template>
    <div>
        <div class="mt-5 bg-white h-60 rounded-2xl mx-4 shadow md:mt-0">
            <div class="flex justify-between items-center">
                <div>
                    <h2 class="text-2xl font-bold cursor-default mx-4 mt-0">Weather Forecast</h2>
                </div>
                <div>
                    <div class="flex bg-gray-200 p-1 gap-2 m-3 rounded-xl h-11">
                        <button class="bg-gray-200 px-3 rounded-xl focus:bg-white transition-all duration-100"
                            @click="isHourly = true">
                            Hourly
                        </button>
                        <button class="bg-gray-200 px-3 rounded-xl focus:bg-white transition-all duration-100"
                            @click="isHourly = false">
                            Daily
                        </button>
                    </div>
                </div>
            </div>

            <!-- Content -->
            <div class="p-4 overflow-x-auto">
                <!-- Hourly Forecast -->
                <div v-if="
                    isHourly &&
                    forecastData &&
                    forecastData.forecast &&
                    forecastData.forecast.forecastday &&
                    forecastData.forecast.forecastday[0]
                " class="flex gap-4">
                    <div v-for="(hour, index) in forecastData.forecast.forecastday[0].hour" :key="index"
                        class="text-center min-w-[100px]">
                        <p class="text-sm">{{ hour.time.slice(-5) }}</p>
                        <img :src="hour.condition.icon" alt="weather icon" class="w-12 mx-auto" />
                        <p class="text-sm">{{ hour.temp_c }}°C</p>
                    </div>
                </div>

                <!-- Daily Forecast -->
                <div v-else-if="
                    forecastData &&
                    forecastData.forecast &&
                    forecastData.forecast.forecastday
                " class="flex gap-4">
                    <div v-for="(day, index) in forecastData.forecast.forecastday" :key="index"
                        class="text-center min-w-[100px]">
                        <p class="text-sm">{{ day.date }}</p>
                        <img :src="day.day.condition.icon" alt="weather icon" class="w-12 mx-auto" />
                        <p class="text-sm">{{ day.day.maxtemp_c }}°C</p>
                    </div>
                </div>

                <!-- Loading -->
                <div v-else-if="isLoading" class="text-center text-gray-500 flex items-center justify-center ">
                    <half-circle-spinner :animation-duration="700" :size="50" color="#d4e6f1" />
                </div>

                <!-- Not Found -->
                <div v-else class="text-center text-gray-500">
                    <p>Forecast data not found.</p>
                </div>
            </div>
        </div>
    </div>
</template>
