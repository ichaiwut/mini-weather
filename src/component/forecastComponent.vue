<script>
import dayjs from 'dayjs';


export default {
    props: {
        weatherData: Object,
        isLoading: Boolean,
    },
    data() {
        return {
            isHourly: true,
        }
    },
    methods: {
        dayjs
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
            <router-link :to="{ name: 'hourly', params: { city: weatherData.location.name } }" v-if="isHourly && weatherData && weatherData.forecast && weatherData.forecast.forecastday && weatherData.forecast.forecastday[0]" class="flex">
                <div v-for="hour in weatherData.forecast.forecastday[0].hour">
                    <p>{{ dayjs(hour.time).format('HH:mm') }}</p>
                    <p>{{ hour.condition.text }}</p>
                    <img :src="hour.condition.icon" alt="weather icon" class="w-25">
                    <p>{{ hour.temp_c }}</p>
                </div>   
            </router-link>
            <router-link :to="{ name: 'daily', params: { city: weatherData.location.name } }" v-else-if="weatherData && weatherData.forecast && weatherData.forecast.forecastday" class="flex">
                <div v-for="day in weatherData.forecast.forecastday">       
                    <p>{{ dayjs(day.date).format('DD/MM') }}</p>
                    <p>{{ day.day.condition.text }}</p>
                    <img :src="day.day.condition.icon" alt="weather icon" class="w-25">
                    <p>{{ day.day.maxtemp_c }}</p>
                </div>
            </router-link>
            <div v-else-if="isLoading">
                <p>Loading forecast data...</p>
            </div>
            <div v-else>
                <p>Forecast data not found.</p>
            </div>
        </div>
    </div>
</template>