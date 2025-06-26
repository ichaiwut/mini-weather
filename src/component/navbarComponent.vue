<script>
export default {
    data() {
        return {
            tabs: [
                'today',
                'hourly',
                'daily',
                'radar',
                'MinuteCast',
                'Monthly',
                'Air Quality',
                'Health & Activities'
            ],
            currentTab: 'today'
        };
    },
};
</script>

<template>
    <div class="w-full bg-white">
        <div class="max-w-5xl mx-auto">
            <nav class="flex items-center bg-white">
                <div v-for="tab in tabs" :key="tab" @click="currentTab = tab" class="relative px-3 py-2 text-sm uppercase cursor-pointer group">
                    
                    <!-- tab name -->
                    <span :class="['transition-colors duration-200', currentTab === tab ? 'text-black font-bold' : 'text-gray-500']">{{ tab }}</span>

                    <!-- underline -->
                    <span class="absolute left-0 -bottom-0.5 h-0.5 bg-orange-500 transition-all duration-300" :class="currentTab === tab ? 'w-full' : ' group-hover:w-full'"></span>
                </div>
            </nav>
            <hr class="border-gray-200">
        </div>
    </div>
</template>