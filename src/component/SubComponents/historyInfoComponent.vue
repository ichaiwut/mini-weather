<script>
import dayjs from 'dayjs';
export default {
    props: {
        historyData: {
            type: Array,
            default: () => []
        },
        selectedDates: {
            type: String,
            default: ''
        },
    },
    data() {
        return {
            dayjs,
        }
    }
}
</script>

<template>
    <div v-if="historyData.length > 0 && selectedDates !== ''" class="max-w-5xl mx-auto">
            <h3 class="text-xl  mb-6 text-center">
                Weather History for {{ historyData[0].location.name }}
            </h3>

            <div class="bg-white">
                <div v-for="(dayData, index) in historyData" :key="index" class="rounded-lg shadow-lg p-6">
                    <div class="text-center mb-4">
                        <h4 class="text-lg">
                            {{ dayjs(dayData.forecast.forecastday[0].date).format('dddd') }}
                            {{ dayjs(dayData.forecast.forecastday[0].date).format('DD/MM') }}
                        </h4>
                        <p class="text-sm">{{ historyData[0].location.name }}, {{ historyData[0].location.country }}</p>
                        <img :src="dayData.forecast.forecastday[0].day.condition.icon"
                            :alt="dayData.forecast.forecastday[0].day.condition.text" class="w-16 h-16">
                        {{ dayData.forecast.forecastday[0].day.avgtemp_c }}°C

                        <div class="font-medium">High/Low</div>
                        {{ dayData.forecast.forecastday[0].day.maxtemp_c }}° /
                        {{ dayData.forecast.forecastday[0].day.mintemp_c }}°

                        <div class="font-medium">Humidity</div>
                        {{ dayData.forecast.forecastday[0].day.avghumidity }}%

                        <div class="font-medium">UV Index</div>
                        {{ dayData.forecast.forecastday[0].day.uv }}

                        <div class="font-medium">Rain Chance</div>
                        {{ dayData.forecast.forecastday[0].day.daily_chance_of_rain }}%
                        <div class="flex justify-between gap-2">
                            <span>Wind: {{ dayData.forecast.forecastday[0].day.maxwind_kph }} km/h</span>
                            <span>Visibility: {{ dayData.forecast.forecastday[0].day.avgvis_km }} km</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
