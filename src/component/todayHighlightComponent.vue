<script>
import { HalfCircleSpinner } from 'epic-spinners'
export default {
    components: {
        HalfCircleSpinner,
    },
    props: {
        weatherHighlightData: Object,
        isLoading: Boolean,
    },
}
</script>

<template>
    <div class="bg-white h-60 rounded-2xl mx-4 shadow lg:mx-0 mb-5">
        <div class="flex justify-between items-center p-4">
            <h2 class="text-2xl font-bold cursor-default">Today Highlight</h2>
        </div>

        <div class="px-4">
            <div v-if="weatherHighlightData && weatherHighlightData.current">
                <p class="text-gray-800 py-1">Wind speed:
                    <span class="font-bold">{{ weatherHighlightData.current.wind_kph }} kph</span>
                </p>
                <p class="text-gray-800 py-1">Wind direction:
                    <span class="font-bold">{{ weatherHighlightData.current.wind_dir }}</span>
                </p>
                <p class="text-gray-800 py-1">Humidity:
                    <span class="font-bold">{{ weatherHighlightData.current.humidity }}%</span>
                </p>
                <p class="text-gray-800 py-1">Pressure:
                    <span class="font-bold">{{ weatherHighlightData.current.pressure_mb }} mb</span>
                </p>
                <p class="text-gray-800 py-1">Cloud:
                    <span class="font-bold">{{ weatherHighlightData.current.cloud }}%</span>
                </p>
            </div>

            <div v-else-if="isLoading" class="flex justify-center items-center mt-10">
                <half-circle-spinner :animation-duration="700" :size="40" color="#d4e6f1" />
            </div>

            <div v-else>
                <p class="text-gray-500 py-2">Weather highlight data not found.</p>
            </div>
        </div>
    </div>
</template>
