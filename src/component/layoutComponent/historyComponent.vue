<script>
import { getHistoryWeather } from '../../services/weather.service.js';
import getCurrentLocation from '../../utility/getCerrentlLocation.js';
import searchComponent from '../SubComponents/searchComponent.vue';
import selectDateComponent from '../SubComponents/selectDateComponent.vue';
import historyInfoComponent from '../SubComponents/historyInfoComponent.vue';
import dayjs from 'dayjs';

export default {
    components: {
        searchComponent,
        selectDateComponent,
        historyInfoComponent
    },
    data() {
        return {
            historyData: [],
            selectedDates: dayjs().subtract(0, 'day').format('YYYY-MM-DD'),
            isLoading: false,
            defaultCity: 'Chiang Mai',
            getCurrentLocation
        }
    },
    created() {
        this.getHistoryWeather();
    },
    methods: {
        async getHistoryWeather() {
            if (!this.selectedDates) return;

            this.isLoading = true;
            const response = await getHistoryWeather(this.defaultCity, this.selectedDates);
            setTimeout(() => {
                this.historyData = [response];
                this.isLoading = false;
            }, 600);
        },

        handleDateSelect(date) {
            this.selectedDates = date;
            this.getHistoryWeather();
        },

        handleLocationSearch(city) {
            this.defaultCity = city;
            this.getHistoryWeather();
        },
        getLocation() {
            getCurrentLocation((coords) => {
                this.defaultCity = coords;
                this.getHistoryWeather();
            });
        }
    }
}
</script>
<template>
    <div class="min-h-[76vh]">
        <!-- Header -->
        <div class="flex justify-center flex-col-3 gap-10">
            <button @click="$router.back()" class="bg-blue-500 text-white px-4 py-2 rounded mb-4">
                ← Back
            </button>
            <h2 class="text-2xl font-bold mb-2">Weather History</h2>
            <div v-if="historyData.length > 0">
                <h3 class="text-2xl font-bold">{{ historyData[0].location.name }}</h3>
            </div>
        </div>

        <!-- Search & Date Selection -->
        <div class="flex justify-center gap-5">
            <searchComponent @search="handleLocationSearch" />
            <button class="cursor-pointer" @click="getLocation">Current Location</button>
        </div>

        <selectDateComponent @selectedDates="handleDateSelect" />

        <!-- Loading -->
        <div v-if="isLoading" class="text-center p-8">
            <p class="mt-2 text-gray-600">Loading weather history...</p>
        </div>

        <!-- No Selection Message -->
        <div v-if="selectedDates === '' && !isLoading" class="text-center p-8">
            <p class="text-gray-500">Please select a date to view weather history</p>
        </div>


        <!-- History data display -->
        <historyInfoComponent v-if="selectedDates !== '' && historyData.length > 0 && !isLoading"
            :historyData="historyData" :selectedDates="selectedDates" />
    </div>
</template>
