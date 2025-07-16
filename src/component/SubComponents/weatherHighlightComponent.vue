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
        <!-- weather highlight title -->
        <div class="p-2 flex items-center justify-between">
            <p class="text-2xl font-bold cursor-default">Weather Highlight</p>
            <router-link v-if="weatherData && weatherData.location" :to="{ name: 'highLight', params: { city: weatherData.location.name } }">See More</router-link>
        </div>
        <!-- weather highlight box -->
        <router-link v-if="weatherData && weatherData.current && weatherData.current.condition"
            :to="{ name: 'highLight', params: { city: weatherData.location.name } }">
            <div class="h-48 rounded-2xl p-2">
                <!-- weather highlight data -->
                <p>Wind speed: <span class="font-bold">{{ weatherData.current.wind_kph }} kph</span></p>
                <p>Wind direction: <span class="font-bold">{{ weatherData.current.wind_dir }}</span></p>
                <p>Humidity: <span class="font-bold">{{ weatherData.current.humidity }}%</span></p>
                <p>UV: <span class="font-bold">{{ weatherData.current.uv }} / 10</span></p>
            </div>
        </router-link>
        <div v-else-if="isLoading">
            <p class="text-gray-800">Weather highlight data loading...</p>
        </div>
        <div v-else>
            <p class="text-gray-800">Weather highlight data not found.</p>
        </div>
    </div>
</template>