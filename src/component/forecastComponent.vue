<script>

export default {
    props: {
        forecastData: Object,
        isLoading: Boolean,
    },
    data() {
        return {
            isHourly: true,
        }
    }
}
</script>

<template>
    <div class="h-60 w-full col-span-3">
        <div class="bg-white h-60 rounded-2xl">
            <div class="flex justify-between items-center">
                <div>
                    <h2 class="text-2xl font-bold cursor-default">Weather Forecast</h2>
                </div>
                <div>
                    <div class="flex bg-gray-200 p-2 gap-2">
                        <button class="bg-green-500 p-2" @click="isHourly = true">
                            Hourly
                        </button>
                        <button class="bg-blue-500 p-2" @click="isHourly = false">
                            Daily
                        </button>
                    </div>
                </div>
            </div>

            <div v-if="isHourly && forecastData && forecastData.forecast && forecastData.forecast.forecastday && forecastData.forecast.forecastday[0]" class="flex">
                <div v-for="hour in forecastData.forecast.forecastday[0].hour">
                    <p>{{ hour.time }}</p>
                    <p>{{ hour.condition.text }}</p>
                    <img :src="hour.condition.icon" alt="weather icon" class="w-25">
                    <p>{{ hour.temp_c }}</p>
                </div>   
            </div>
            <div v-else-if="forecastData && forecastData.forecast && forecastData.forecast.forecastday" class="flex">
                <div v-for="day in forecastData.forecast.forecastday">
                    <p>{{ day.date }}</p>
                    <p>{{ day.day.condition.text }}</p>
                    <img :src="day.day.condition.icon" alt="weather icon" class="w-25">
                    <p>{{ day.day.maxtemp_c }}</p>
                </div>
            </div>
            <div v-else-if="isLoading">
                <p>Loading forecast data...</p>
            </div>
            <div v-else>
                <p>Forecast data not found.</p>
            </div>
        </div>
    </div>
</template>