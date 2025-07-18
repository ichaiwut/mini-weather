<script>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
export default {
    props: {
        placeholder: {
            type: String,
            default: 'Search Location'
        }
    },
    emits: ['search'],
    data() {
        return {
            search: ''
        }
    },
    methods: {
        handleSearch() {
            if (!this.search) return  toast.warn('Please enter a location to search.'
                    , {
                        position: "top-right",
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    }
                );

            this.$emit('search', this.search);
        }
    }
}
</script>

<template>
    <div
        class="border border-gray-300 rounded-xl bg-white text-gray-900 w-80 h-12 px-2 py-2 flex items-center shadow">
        <input class="border-none outline-none w-full" v-model="search" type="text" :placeholder="placeholder"
            @keyup.enter="handleSearch" />
        <input class="cursor-pointer" type="button" value="Search" @click="handleSearch" />
    </div>
</template>