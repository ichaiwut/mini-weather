<template>
    <div class="min-h-screen bg-gradient-to-tl from-teal-200 to-blue-100 p-6] w-full">
        <header>
            <headerComponent />
        </header>
        <main class="mt-10">
            <RouterView />
        </main>
        <footer class="mt-20">
            <footerComponent />
        </footer>
    </div>
</template>

<script>
import { RouterView } from 'vue-router';
import headerComponent from "../component/headerComponent.vue";
import footerComponent from "../component/footerComponent.vue";
export default {
    components: {
        RouterView,
        headerComponent,
        footerComponent,
    }
}
</script>