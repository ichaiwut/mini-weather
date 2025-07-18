<script>
import dayjs from 'dayjs';
export default {
    props: {
        selectedDates: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            dayjs,
        }
    },
    methods: {
        onDateSelect(date) {
            this.$emit('selectedDates', date);
        }
    }
}
</script>

<template>
    <div class="mx-3 mb-8 max-w-5xl p-4 h-56 bg-white rounded-xl shadow lg:mx-auto">
        <div class="flex items-center justify-between mb-4 ">
            <h3 class="text-xl font-semibold">
                Select Dates (Past 7 Days Only)
            </h3>
            <button class="shadow bg-red-500 px-5 py-1 text-white rounded-xl md:text-[17px] lg:hover:bg-red-600 hover:scale-105 transition duration-300 ease-in-out " @click="onDateSelect('')">Clear</button>
        </div>

        <p class="text-sm">
            Click on dates you want to view weather history.
        </p>

        <!-- Custom Date Grid -->
        <div class="grid grid-cols-8 mt-7">
            <div v-for="i in 8" :key="i" class="text-center">
                <button class="w-12 h-12 md:w-16 md:h-16 md:font-semibold shadow-md bg-blue-400 rounded-lg text-white focus:bg-blue-500 focus:scale-120 hover:bg-blue-500 hover:scale-120 transition duration-300 ease-in-out" @click="onDateSelect(dayjs().subtract(8 - i, 'day').format('YYYY-MM-DD'))">
                    <div>{{ dayjs().subtract(8 - i, 'day').format('ddd') }}</div>
                    <div>{{ dayjs().subtract(8 - i, 'day').format('DD') }}</div>
                </button>
            </div>
        </div>
    </div>
</template>