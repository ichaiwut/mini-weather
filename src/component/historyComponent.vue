<script>
import { getHistoryWeather } from '../services/weather.service.js';
import dayjs from 'dayjs';

export default {
    data() {
        const today = new Date();
        const yesterday = new Date();
        yesterday.setDate(today.getDate() - 1);
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(today.getDate() - 7);

        return {
            dayjs,
            search: '',
            historyData: [],
            selectedDates: [],
            isLoading: false,
            maxDate: yesterday,
            minDate: sevenDaysAgo,
            defaultLocation: 'Chiang Mai',
        }
    },
    mounted() {
        this.onDateSelect(this.maxDate);
        this.getHistoryData(this.defaultLocation);
    },
    watch: {
        selectedDates: {
            handler(newDates) {
                if (!newDates.length) return;
                this.getHistoryData(this.search || this.defaultLocation);
            },
            deep: true
        }
    },
    methods: {
        async getHistoryData(city) {
            if (!this.selectedDates.length) return;
            this.isLoading = true;
            if (!city) return;
            const responses = await Promise.all(this.selectedDates.map(date => {
                return getHistoryWeather(city, dayjs(date).format('YYYY-MM-DD'));
            }));
            setTimeout(() => {
                this.historyData = responses;
                this.isLoading = false;
            }, 600);
        },
        searchLocation() {
            if (this.search === '') return alert('Please enter a location');
            this.getHistoryData(this.search);
        },
        onDateSelect(date) {
            const dateIndex = this.selectedDates.findIndex(d =>
                dayjs(d).format('YYYY-MM-DD') === dayjs(date).format('YYYY-MM-DD')
            );

            if (dateIndex > -1) {
                this.selectedDates.splice(dateIndex, 1);
            } else {
                this.selectedDates.push(date);
            }

        }
    }
}
</script>
<template>
    <div class="min-h-screen p-4">

        <!-- Header -->
        <div class="flex items-center mb-6 flex-col-3 gap-10 justify-center ">
            <button @click="$router.back()" class="bg-blue-500 cursor-pointer">
                ← Back
            </button>
            <div>
                <h2 class="text-2xl font-bold">Weather History</h2>
            </div>
            <div class="flex items-center justify-center">
                <h2 class="text-2xl font-bold" v-if="search !== null && historyData.length > 0"> {{
                    historyData[0].location.name }}</h2>
                <h2 class="text-2xl font-bold" v-else>{{ defaultLocation }}</h2>
            </div>
        </div>

        <!-- Search Bar -->
        <div
            class="border border-gray-300 rounded-xl bg-white text-gray-900 w-90 px-2 py-2 my-10 flex items-center mx-auto shadow">
            <input class="border-none outline-none w-full" v-model="search" type="text" placeholder="Search Location"
                @keydown.enter="searchLocation" />
            <input class="cursor-pointer" type="button" value="Search" @click="searchLocation" />
        </div>

        <!-- Date Selection Section -->
        <div class="mb-8 max-w-4xl mx-auto p-6 bg-gray-200">
            <div class="flex items-center mb-4 ">
                <h3 class="text-xl font-semibold">
                    Select Dates (Past 7 Days Only)
                </h3>
                <div class="gap-4">
                    <span class="text-sm text-gray-500">
                        Selected: {{ selectedDates.length }} / 7
                    </span>
                </div>
                <button class="bg-red-500" @click="selectedDates = []">Clear</button>
            </div>

            <p class="text-sm mb-4">
                Click on dates to select up to 7 days.
            </p>

            <!-- Custom Date Grid -->
            <div class="grid grid-cols-7">
                <div v-for="i in 7" :key="i" class="text-center">
                    <div class="text-xs text-gray-500 mb-1">
                        {{ dayjs().subtract(8 - i, 'day').format('ddd') }}
                    </div>
                    <!-- ใส่โฮเวอร์ตรงนี้ เมื่อกดเลือก จะหายไปเมื่อเลือกอีกครั้ง -->
                    <button class="bg-blue-500" @click="onDateSelect(dayjs().subtract(8 - i, 'day').toDate())">
                        {{ dayjs().subtract(8 - i, 'day').format('DD') }}
                    </button>
                </div>
            </div>
        </div>

        <!-- Loading -->
        <div v-if="isLoading" class="text-center p-8">
            <p class="mt-2 text-gray-600">Loading weather history...</p>
        </div>

        <!-- No Selection Message -->
        <div v-if="selectedDates.length === 0 && !isLoading" class="text-center p-8">
            <p class="text-gray-500">Please select dates to view weather history</p>
        </div>


        <!-- History data display -->
        <div v-if="historyData.length > 0 && !isLoading && selectedDates.length > 0" class="max-w-6xl mx-auto">
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
                        <p class="text-sm">{{ dayData.location.name }}, {{ dayData.location.country }}</p>
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

                        <span>Wind: {{ dayData.forecast.forecastday[0].day.maxwind_kph }} km/h</span>
                        <span>Visibility: {{ dayData.forecast.forecastday[0].day.avgvis_km }} km</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
