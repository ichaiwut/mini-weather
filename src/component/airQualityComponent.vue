<script>
export default {
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
    <div class="bg-white h-60 rounded-2xl">

        <!-- title -->
        <div class="p-2">
            <p class="text-2xl font-bold cursor-default">Air Quality</p>
        </div>

        <!-- air quality box -->
        <div class="p-4">
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
                <p class="text-gray-800">Air quality data loading...</p>
            </div>
            <div v-else>
                <p class="text-gray-800">Air quality data not found.</p>
            </div>
        </div>
    </div>
</template>