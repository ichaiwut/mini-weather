<script>
import { getHistoryWeather } from '../../services/weather.service.js';
import getCurrentLocation from '../../utility/getCerrentlLocation.js';
import searchComponent from '../SubComponents/searchComponent.vue';
import selectDateComponent from '../SubComponents/selectDateComponent.vue';
import historyInfoComponent from '../SubComponents/historyInfoComponent.vue';
import dayjs from 'dayjs';
import { HalfCircleSpinner } from 'epic-spinners';

export default {
  components: {
    searchComponent,
    selectDateComponent,
    historyInfoComponent,
    HalfCircleSpinner,
  },
  data() {
    return {
      historyData: [],
      selectedDates: dayjs().subtract(0, 'day').format('YYYY-MM-DD'),
      isLoading: false,
      defaultCity: 'Chiang Mai',
      getCurrentLocation,
    };
  },
  created() {
    this.getHistoryWeather();
  },
  methods: {
    async getHistoryWeather() {
      if (!this.selectedDates) return;

      this.isLoading = true;
      const response = await getHistoryWeather(
        this.defaultCity,
        this.selectedDates
      );
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
      getCurrentLocation(coords => {
        this.defaultCity = coords;
        this.getHistoryWeather();
      });
    },
  },
};
</script>
<template>
  <div class="">
    <!-- Header -->
    <div
      class="flex justify-between flex-col-3 mx-3 md:justify-around mb-3 lg:mx-auto max-w-3xl"
    >
      <button
        @click="$router.back()"
        class="bg-blue-500 text-white px-4 py-2 rounded-xl mb-4 text-sm md:text-[17px] md:px-5"
      >
        &larr; Back
      </button>
      <h2 class="text-2xl font-bold mb-2">Weather History</h2>
      <div v-if="historyData.length > 0">
        <h3 class="text-2xl font-bold">{{ historyData[0].location.name }}</h3>
      </div>
    </div>

    <!-- Search & Date Selection -->
    <div
      class="flex justify-center flex-col items-center md:flex-row mb-5 gap-3"
    >
      <searchComponent @search="handleLocationSearch" />
      <<<<<<< HEAD
      <button class="cursor-pointer" @click="getLocation">
        Current Location
      </button>
      =======
      <button
        class="flex items-center my-4 gap-2 cursor-pointer"
        @click="getCurrentLocation"
      >
        <span class="text-zinc-500">Current location </span>
        <span>
          <svg
            fill="#71717A"
            width="20px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"
            ></path>
          </svg>
        </span>
      </button>
      >>>>>>> d6a9b784911f9e07e54b6937e5e2a98dd6b6dba5
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
    <historyInfoComponent
      v-if="selectedDates !== '' && historyData.length > 0 && !isLoading"
      :historyData="historyData"
      :selectedDates="selectedDates"
    />
  </div>
</template>
