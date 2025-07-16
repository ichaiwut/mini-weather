<script>
export default {
    props: {
        weatherData: Object,
        isLoading: Boolean,
    },
}
</script>

<template>
    <div class="bg-white h-60 rounded-2xl">
        <!-- title -->
        <div class="p-2 flex items-center justify-between">
            <p class="text-2xl font-bold cursor-default">Air Quality</p>
            <router-link v-if="weatherData && weatherData.location" :to="{ name: 'airQuality', params: { city: weatherData.location.name } }">See More</router-link>
        </div>
        <!-- air quality box -->
        <router-link :to="{ name: 'airQuality', params: { city: weatherData.location.name } }"
            v-if="weatherData && weatherData.current && weatherData.current.air_quality">
            <div class="h-48 rounded-2xl p-2">
                <p>US EPA Index: {{ weatherData.current.air_quality['us-epa-index'] }}</p>
                <p>CO: {{ weatherData.current.air_quality.co }}</p>
                <p>PM2.5: {{ weatherData.current.air_quality.pm2_5 }}</p>
                <p>PM10: {{ weatherData.current.air_quality.pm10 }}</p>
                <div class="mt-15">
                    <p>See More</p>
                </div>
            </div>
        </router-link>
        <div v-else-if="isLoading">
            <p class="text-gray-800">Air quality data loading...</p>
        </div>
        <div v-else>
            <p class="text-gray-800">Air quality data not found.</p>
        </div>
    </div>
</template>