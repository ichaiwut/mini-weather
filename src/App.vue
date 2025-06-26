<script>
import headerComponent from "./component/headerComponent.vue";
import navbarComponent from "./component/navbarComponent.vue";
import mainComponent from "./component/mainComponent.vue";

export default {
  data() {
    return {};
  },
  components: {
    headerComponent,
    navbarComponent,
    mainComponent
  }
};

</script>

<template>
  <div id="app" class="bg-blue-100 min-h-screen">
    <header>
      <headerComponent />
      <navbarComponent />
    </header>
    <main class="max-w-5xl mx-auto py-6">
      <mainComponent />
      
    </main>
    <footer>
      
    </footer>
  </div>
</template>

<style scoped></style>
