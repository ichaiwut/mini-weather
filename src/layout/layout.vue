<template>
    <div class="bg-gradient-to-tl from-[#57ebd8] to-[#b8e5fe]">
        <header>
            <headerComponent />
        </header>
        <main class="my-10">
            <mainComponent />
        </main>
        <footer class="mt-20">
            <footerComponent />
        </footer>
    </div>
</template>

<script>
import headerComponent from "../component/headerComponent.vue";
import footerComponent from "../component/footerComponent.vue";
import mainComponent from "../component/mainComponent.vue";
export default {
    components: {
        headerComponent,
        footerComponent,
        mainComponent
    }
}
</script>