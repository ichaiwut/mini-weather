<script>
import { FingerprintSpinner } from 'epic-spinners'
export default {
    components: {
        FingerprintSpinner
    },
    data() {
        return {
            localAirQualityData: {},
        };
    },
    props: {
        airQualityData: Object,
        isLoading: Boolean,
    },
    mounted() {
        this.getAirQualityData(this.airQualityData);
    },
    watch: {
        airQualityData: {
            handler() {
                this.getAirQualityData(this.airQualityData);
            }
        }
    },
    methods: {
        getAirQualityData(newVal) {
            this.localAirQualityData = newVal;
        }
    }
}
</script>

<template>
    <div class="bg-white h-60 rounded-2xl mx-4 shadow lg:mx-0">

        <!-- title -->
        <div class="flex justify-between items-center p-4">
            <p class="text-2xl font-bold cursor-default">Air Quality</p>
        </div>

        <!-- air quality box -->
        <div class="p-4 ">
            <div v-if="localAirQualityData && localAirQualityData.current">
                <div class="">
                    <hr>
                    <p class="text-gray-800 py-2">Wind Speed: <span class="font-bold"> {{ localAirQualityData.current.wind_kph }} km/h</span> </p>
                    <hr>
                </div>
                <div>
                    <hr>
                    <p class="text-gray-800 py-2">Humidity: <span class="font-bold"> {{ localAirQualityData.current.humidity }} %</span></p>
                    <hr>
                </div>
                <div>
                    <hr>
                    <p class="text-gray-800 py-2">Wind Gust: <span class="font-bold"> {{ localAirQualityData.current.wind_gust_kph }} km/h</span></p>
                    <hr>
                </div>
                <div>   
                    <hr>
                    <p class="text-gray-800 py-2">UV Index: <span class="font-bold"> {{ localAirQualityData.current.uv }} / 10</span></p>
                    <hr>
                </div>
            </div>
            <div v-else-if="isLoading">
                <div class="flex justify-center items-center mt-5 ">
                    <fingerprint-spinner :animation-duration="800" :size="64" color="#cceeff" />
                </div>
            </div>
            <div v-else>
                <p class="text-gray-500">Air quality data not found.</p>
            </div>
        </div>
    </div>
</template>