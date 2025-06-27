<script>
import { RouterView } from 'vue-router';
import headerComponent from "./component/headerComponent.vue";
import navBarComponent from "./component/navBarComponent.vue";

export default {
  data() {
    return {};
  },
  components: {
    headerComponent,
    navBarComponent,
    RouterView
  }
};
</script>

<template>
  <div id="app" class="bg-blue-100 min-h-screen">
    <header>
      <headerComponent />
      <navBarComponent />
    </header>
    <main class="max-w-5xl mx-auto py-6">
      <router-view />
    </main>
    <footer>
      
    </footer>
  </div>
</template>

<style scoped></style>
