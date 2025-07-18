<script>
import { HalfCircleSpinner } from 'epic-spinners';
import dayjs from 'dayjs';

export default {
  components: {
    HalfCircleSpinner,
  },
  data() {
    return {
      isHourly: true,
      isDaily: false,
      dayjs,
    };
  },
  props: {
    weatherData: Object,
    isLoading: Boolean,
  },
};
</script>

<template>
  <div class="bg-white h-60 rounded-2xl mx-5 shadow px-3">
    <div class="flex items-center md:justify-between">
      <div>
        <h2 class="text-2xl font-bold cursor-default mx-4 mt-5 md:mt-0">
          Weather Forecast
        </h2>
      </div>
      <div class="flex">
        <div class="my-auto mx-5 w-[100px] md:w-[80px]"></div>
        <div class="flex bg-gray-200 p-1 gap-2 m-3 rounded-xl h-11">
          <button
            class="bg-gray-200 px-3 rounded-xl focus:bg-white transition-all duration-100"
            @click="isHourly = true"
          >
            Hourly
          </button>
          <button
            class="bg-gray-200 px-3 rounded-xl focus:bg-white transition-all duration-100"
            @click="isHourly = false"
          >
            Daily
          </button>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="p-4 overflow-x-auto">
      <!-- Hourly Forecast -->
      <router-link
        :to="{ name: 'hourly', params: { city: weatherData.location.name } }"
        v-if="
          isHourly &&
          weatherData &&
          weatherData.forecast &&
          weatherData.forecast.forecastday &&
          weatherData.forecast.forecastday[0]
        "
        class="flex gap-4"
      >
        <div
          v-for="(hour, index) in weatherData.forecast.forecastday[0].hour"
          :key="index"
          class="text-center min-w-[100px]"
        >
          <p>{{ dayjs(hour.time).format('HH:mm') }}</p>
          <img
            :src="hour.condition.icon"
            alt="weather icon"
            class="w-12 mx-auto"
          />
          <p class="text-sm">{{ hour.temp_c }}°C</p>
        </div>
      </router-link>

      <!-- Daily Forecast -->
      <router-link
        :to="{ name: 'daily', params: { city: weatherData.location.name } }"
        v-else-if="
          weatherData &&
          weatherData.forecast &&
          weatherData.forecast.forecastday
        "
        class="flex gap-4"
      >
        <div
          v-for="(day, index) in weatherData.forecast.forecastday"
          :key="index"
          class="text-center min-w-[100px]"
        >
          <p class="text-sm">{{ dayjs(day.date).format('ddd') }}</p>
          <img
            :src="day.day.condition.icon"
            alt="weather icon"
            class="w-12 mx-auto"
          />
          <p class="text-sm">{{ day.day.maxtemp_c }}°C</p>
        </div>
      </router-link>

      <!-- Loading -->
      <div
        v-else-if="isLoading"
        class="text-center text-gray-500 flex items-center justify-center"
      >
        <half-circle-spinner
          :animation-duration="700"
          :size="50"
          color="#d4e6f1"
        />
      </div>

      <!-- Not Found -->
      <div v-else class="text-center text-gray-500">
        <p>Forecast data not found.</p>
      </div>
    </div>
  </div>
</template>
