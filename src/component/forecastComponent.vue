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
        <div class="bg-white h-60 rounded-xl p-4 shadow-lg mx-3  ">
            <div class="flex  items-center mb-4 justify-between">
                <div>
                    <h2 class="text-2xl font-bold cursor-default">Weather Forecast</h2>
                </div>
                <div>
                    <div class="bg-gray-200 p-1 gap-2 mr-6 rounded-[10px] flex h-[35px] w-[180px]">
                        <button class="bg-white  rounded-[10px] text-[13px] w-full cursor-pointer" @click="isHourly = true">
                            Hourly
                        </button>
                        <button class="bg-white  rounded-[10px] text-[13px] w-full cursor-pointer" @click="isHourly = false">
                            Daily
                        </button>
                    </div>
                </div>
            </div>
            <!-- โชว์คอนเทนต์ hourly -->
            <div v-if="isHourly">
                <hourly />
            </div>
            <!-- โชว์คอนเทนต์ daily -->
            <div v-else>
                <daily />
            </div>
        </div>
</template>