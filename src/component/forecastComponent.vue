<script>
import hourly from '../views/hourly.vue';
import daily from '../views/daily.vue';

export default {
    components: {
        hourly,
        daily
    },
    data() {
        return {
            isHourly: true,
        }
    }
}
</script>

<template>
    <div class="">
        <div class="mt-5 bg-white h-60 rounded-2xl mx-4 shadow md:mt-0">
            <div class="flex justify-between items-center">
                <div>
                    <h2 class="text-2xl font-bold cursor-default mx-4 mt-0">Weather Forecast</h2>
                </div>
                <div>
                    <div class="flex bg-gray-200 p-1 gap-2 m-3 rounded-xl h-11">
                        <button class="bg-gray-200 px-3 rounded-xl focus:bg-white transition-all trantion-discrate delay-70" @click="isHourly = true">
                            Hourly
                        </button>
                        <button class="bg-gray-200 px-3 rounded-xl focus:bg-white transition-all trantion-discrate delay-100" @click="isHourly = false">
                            Daily
                        </button>
                    </div>
                </div>
            </div>
            <!-- โชว์คอนเทนต์ hourly -->
            <div class="ml-4">
                <div v-if="isHourly">
                    <hourly />
                </div>
                <!-- โชว์คอนเทนต์ daily -->
                <div v-else>
                    <daily />
                </div>
            </div>
        </div>
    </div>
</template>