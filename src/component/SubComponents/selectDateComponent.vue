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
    <div class="mb-8 max-w-5xl mx-auto p-4 h-56 bg-white">
        <div class="flex items-center justify-between mb-4 ">
            <h3 class="text-xl font-semibold">
                Select Dates (Past 7 Days Only)
            </h3>
            <button class="bg-red-500" @click="onDateSelect('')">Clear</button>
        </div>

        <p class="text-sm">
            Click on dates you want to view weather history.
        </p>

        <!-- Custom Date Grid -->
        <div class="grid grid-cols-8 mt-7">
            <div v-for="i in 8" :key="i" class="text-center">
                <!-- ใส่โฮเวอร์ตรงนี้ เมื่อกดเลือกจะค้างอยู่ ถ้าเลือกอีกครั้งจะเลิกโฮเวอร์ -->
                <button class="w-13 h-13 bg-blue-500 rounded-lg" @click="onDateSelect(dayjs().subtract(8 - i, 'day').format('YYYY-MM-DD'))">
                    <div>{{ dayjs().subtract(8 - i, 'day').format('ddd') }}</div>
                    <div>{{ dayjs().subtract(8 - i, 'day').format('DD') }}</div>
                </button>
            </div>
        </div>
    </div>
</template>