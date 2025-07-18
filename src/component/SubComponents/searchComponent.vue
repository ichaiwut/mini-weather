<script>
export default {
    props: {
        placeholder: {
            type: String,
            default: 'Search Location'
        }
    },
    data() {
        return {
            search: ''
        }
    },
    methods: {
        handleSearch() {
            if (!this.search) return alert('Please enter a location');

            this.$emit('search', this.search);
        }
    }
}
</script>

<template>
    <div
        class="border border-gray-300 rounded-xl bg-white text-gray-900 w-90 px-2 py-2 my-10 flex items-center shadow">
        <input class="border-none outline-none w-full" v-model="search" type="text" :placeholder="placeholder"
            @keyup.enter="handleSearch" />
        <input class="cursor-pointer" type="button" value="Search" @click="handleSearch" />
    </div>
</template>