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

<template>
    <div class="bg-gradient-to-tl from-[#57ebd8] to-[#b8e5fe]">
        <header>
            <headerComponent />
        </header>
        <main class="my-10">
            <RouterView />
        </main>
        <footer class="mt-20">
            <footerComponent />
        </footer>
    </div>
</template>
