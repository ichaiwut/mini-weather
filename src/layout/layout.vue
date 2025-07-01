<template>
    <div class="bg-gradient-to-tl from-[#57ebd8] to-[#b8e5fe] ">
        <headerComponent />
        <mainComponent />
        <footerComponent />
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