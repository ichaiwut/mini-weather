<script>
import { HalfCircleSpinner } from 'epic-spinners'
export default {
    components: {
        HalfCircleSpinner
    },
    props: {
        weatherData: Object,
        isLoading: Boolean,
    },
}
</script>

<template>
    <div class="bg-white h-60 rounded-2xl mx-5 shadow">

        <!-- title -->
        <div class="flex justify-between items-center p-4">
            <p class="text-2xl font-bold cursor-default">Air Quality</p>
            <router-link v-if="weatherData && weatherData.location"
                :to="{ name: 'airQuality', params: { city: weatherData.location.name } }">See More</router-link>
        </div>

        <!-- air quality box -->
         <div class="px-4">
        <router-link :to="{ name: 'airQuality', params: { city: weatherData.location.name } }"
            v-if="weatherData && weatherData.current && weatherData.current.air_quality">

            <div v-if="weatherData.current.air_quality">
                <p class="text-gray-800 py-2">US EPA Index:
                    <span class="font-bold">
                        {{ weatherData.current.air_quality['us-epa-index'] }}
                    </span>
                </p>
                <p class="text-gray-800 py-2">CO:
                    <span class="font-bold">
                        {{ weatherData.current.air_quality.co }}
                    </span>
                </p>
                <p class="text-gray-800 py-2">PM2.5:
                    <span class="font-bold">
                        {{ weatherData.current.air_quality.pm2_5 }}
                    </span>
                </p>
                <p class="text-gray-800 py-2">PM10:
                    <span class="font-bold">
                        {{ weatherData.current.air_quality.pm10 }}
                    </span>
                </p>
            </div>
        </router-link>
        <div v-else-if="isLoading">
            <div class="flex justify-center items-center mt-5 ">
                <half-circle-spinner :animation-duration="700" :size="40" color="#d4e6f1" />
            </div>
        </div>
        <div v-else>
            <p class="text-gray-500">Air quality data not found.</p>
        </div>
        </div>
    </div>
</template>