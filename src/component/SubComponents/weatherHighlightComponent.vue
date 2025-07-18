<script>
import { HalfCircleSpinner } from 'epic-spinners'
export default {
    components: {
        HalfCircleSpinner,
    },
    props: {
        weatherData: Object,
        isLoading: Boolean,
    },
}
</script>

<template>
    <div class="bg-white h-60 rounded-2xl shadow mx-5 mb-5">
        <div class="flex justify-between items-center p-4">
            <h2 class="text-2xl font-bold cursor-default">Today Highlight</h2>
            <router-link :to="{ name: 'highLight', params: { city: weatherData.location.name } }"
                v-if="weatherData && weatherData.location">See More</router-link>
        </div>
        
        <router-link :to="{ name: 'highLight', params: { city: weatherData.location.name } }"
            v-if="weatherData && weatherData.current && weatherData.current.condition">
            <div class="pl-4">
                <p class="text-gray-800 py-1">Wind speed:
                    <span class="font-bold">{{ weatherData.current.wind_kph }} kph</span>
                </p>
                <p class="text-gray-800 py-1">Wind direction:
                    <span class="font-bold">{{ weatherData.current.wind_dir }}</span>
                </p>
                <p class="text-gray-800 py-1">Humidity:
                    <span class="font-bold">{{ weatherData.current.humidity }}%</span>
                </p>
                <p class="text-gray-800 py-1">Pressure:
                    <span class="font-bold">{{ weatherData.current.pressure_mb }} mb</span>
                </p>
                <p class="text-gray-800 py-1">Cloud:
                    <span class="font-bold">{{ weatherData.current.cloud }}%</span>
                </p>
            </div>

        </router-link>

        <div v-else-if="isLoading" class="flex justify-center items-center mt-10">
            <half-circle-spinner :animation-duration="700" :size="40" color="#d4e6f1" />
        </div>

        <div v-else>
            <p class="text-gray-500 py-2">Weather highlight data not found.</p>
        </div>
    </div>
</template>
