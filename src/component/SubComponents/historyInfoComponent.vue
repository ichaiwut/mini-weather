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
        <div class="text-xl mb-6 text-center font-bold mt-5">
            Weather History for {{ historyData[0].location.name }}
        </div>
    </div>

    <div class="bg-white max-w-5xl mx-auto rounded-2xl shadow-lg cursor-default">
        <div v-for="(dayData, index) in historyData" :key="index" class="h-auto p-6">
            <div class="text-center">
                <div class="flex flex-col items-center gap-2">
                    <div class="gap-2 flex justify-center ">
                        <span class="text-2xl font-bold ">{{ dayjs(dayData.forecast.forecastday[0].date).format('DD/MM' + ' ' + 'dddd') }}</span>
                    </div>
                    <div class="text-md ">{{ historyData[0].location.name }}, {{ historyData[0].location.country }}</div>
                    <div>
                        <img :src="dayData.forecast.forecastday[0].day.condition.icon" :alt="dayData.forecast.forecastday[0].day.condition.text" class="w-28">
                    </div>
                    <div class="text-2xl font-bold">
                        {{ dayData.forecast.forecastday[0].day.avgtemp_c }} °C
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-2 font-bold mt-5">
                    <div class="bg-blue-100 p-2 rounded shadow-sm h-32">
                        <div class="text-xl text-blue-900 mt-5">High/Low</div>
                        <div class="text-lg text-blue-500 mt-5">
                            {{ dayData.forecast.forecastday[0].day.maxtemp_c }}°C /
                            {{ dayData.forecast.forecastday[0].day.mintemp_c }}°C
                        </div>
                    </div>

                    <div class="bg-blue-50 p-2 rounded shadow-sm h-32 ">
                        <div class="text-xl text-blue-900 mt-5">Humidity</div>
                        <div class="text-lg text-blue-500 mt-5">
                            {{ dayData.forecast.forecastday[0].day.avghumidity }}%
                        </div>
                    </div>

                    <div class="bg-blue-50 p-2 rounded shadow-sm h-32">
                        <div class="text-xl text-blue-900 mt-5">UV Index</div>
                        <div class="text-lg text-blue-500 mt-5">
                            {{ dayData.forecast.forecastday[0].day.uv }}
                        </div>
                    </div>

                    <div class="bg-blue-100 p-2 rounded shadow-sm h-32">
                        <div class="text-xl text-blue-900 mt-5">Rain Chance</div>
                        <div class="text-lg text-blue-500 mt-5">
                            {{ dayData.forecast.forecastday[0].day.daily_chance_of_rain }}%
                        </div>
                    </div>
                </div>
                <div class="flex justify-between mt-5 text-blue-600 bg-blue-50 p-3 rounded shadow-sm">
                    <span class="flex items-center"><i class="fas fa-wind mr-1"></i> Wind: {{
                        dayData.forecast.forecastday[0].day.maxwind_kph }} km/h</span>
                    <span class="flex items-center"><i class="fas fa-eye mr-1"></i> Visibility: {{
                        dayData.forecast.forecastday[0].day.avgvis_km }} km</span>
                </div>
            </div>
        </div>
    </div>
</template>
