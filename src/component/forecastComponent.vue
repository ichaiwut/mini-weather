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
    <div class="h-60 w-full col-span-3">
        <div class="bg-white h-60 rounded-2xl">
            <div class="flex justify-between items-center">
                <div>
                    <h2 class="text-2xl font-bold cursor-default">Weather Forecast</h2>
                </div>
                <div>
                    <div class="flex bg-gray-200 p-2 gap-2">
                        <button class="bg-green-500 p-2" @click="isHourly = true">
                            Hourly
                        </button>
                        <button class="bg-blue-500 p-2" @click="isHourly = false">
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
    </div>
</template>