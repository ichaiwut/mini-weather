<script>
export default {
    props: {
        airQualityData: Object,
        isLoading: Boolean,
    }
}
</script>

<template>
    <div class="bg-white h-60 rounded-2xl">

        <!-- title -->
        <div class="p-2">
            <p class="text-2xl font-bold cursor-default">Air Quality</p>
        </div>

        <!-- air quality box -->
        <div class="p-4">
            <div v-if="airQualityData && airQualityData.current && airQualityData.current.air_quality">
                <p>US EPA Index: {{ airQualityData.current.air_quality['us-epa-index'] }}</p>
                <p>CO: {{ airQualityData.current.air_quality.co }}</p>
                <p>PM2.5: {{ airQualityData.current.air_quality.pm2_5 }}</p>
                <p>PM10: {{ airQualityData.current.air_quality.pm10 }}</p>
            </div>
            <div v-else-if="isLoading">
                <p class="text-gray-800">Air quality data loading...</p>
            </div>
            <div v-else>
                <p class="text-gray-800">Air quality data not found.</p>
            </div>
        </div>
    </div>
</template>