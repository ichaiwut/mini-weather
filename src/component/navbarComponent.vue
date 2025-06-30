<script>
export default {
    data() {
        return {
            tabs: [
                {name: 'today', path: '/today'},
                {name: 'hourly', path: '/hourly'},
                {name: 'daily', path: '/daily'},
                {name: 'radar', path: '/radar'},
                {name: 'MinuteCast', path: '/MinuteCast'},
                {name: 'Monthly', path: '/Monthly'},
                {name: 'AirQuality', path: '/AirQuality'},
                {name: 'HealthActivities', path: '/HealthActivities'}
            ],
            currentTab: ''
        };
    },
    mounted() {
        this.setCurrentTabFromRoute();
    },
    watch: {
        '$route'() {
            this.setCurrentTabFromRoute();
        }
    },
    methods: {
        setCurrentTabFromRoute() {
            const path = this.$route.path;
            const tab = this.tabs.find(tab => tab.path === path);
            if (tab) {
                this.currentTab = tab.name;
            } else {
                this.currentTab = 'today';
            }
        }
    }
};
</script>

<template>
    <div class="w-full bg-white">
        <div class="max-w-5xl mx-auto">
            <nav class="flex items-center bg-white">
                <router-link v-for="tab in tabs" :key="tab.name" :to="tab.path" @click="currentTab = tab.name" class="relative px-3 py-2 text-sm uppercase cursor-pointer group">
                    
                    <!-- tab name -->
                    <span :class="['transition-colors duration-200', currentTab === tab.name ? 'text-black font-bold' : 'text-gray-500']">{{ tab.name }}</span>

                    <!-- underline -->
                    <span class="absolute left-0 -bottom-0.5 h-0.5 bg-orange-500 transition-all duration-300" :class="currentTab === tab.name ? 'w-full' : ' group-hover:w-full'"></span>
                </router-link>
            </nav>
            <hr class="border-gray-200">
        </div>
    </div>
</template>