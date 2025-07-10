<script>
export default {
    props: {
        weatherHighlightData: Object,
        isLoading: Boolean,
    },
}
</script>

<template>
    <div class="bg-white h-60 rounded-2xl">
        <div>
            <h2 class="text-2xl font-bold cursor-default">Weather Highlight</h2>
        </div>
        <div>
            <div v-if="weatherHighlightData && weatherHighlightData.current">
                <p>Wind speed:<span class="font-bold">{{ weatherHighlightData.current.wind_kph }} kph</span></p>
                <p>Wind direction:<span class="font-bold">{{ weatherHighlightData.current.wind_dir }}</span></p>
                <p>Humidity:<span class="font-bold">{{ weatherHighlightData.current.humidity }}%</span></p>
                <p>Pressure:<span class="font-bold">{{ weatherHighlightData.current.pressure_mb }} mb</span></p>
                <p>Cloud:<span class="font-bold">{{ weatherHighlightData.current.cloud }}%</span></p>
            </div>
            <div v-else-if="isLoading">
                <p class="text-gray-800">Weather highlight data loading...</p>
            </div>
            <div v-else>
                <p class="text-gray-800">Weather highlight data not found.</p>
            </div>
        </div>
    </div>
</template>