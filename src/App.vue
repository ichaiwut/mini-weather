<script setup lang="ts">
import { ref } from 'vue';

// This is where we'll build our mini weather app
const appName = ref<string>('Mini Weather App');
const isLoading = ref<boolean>(false);
</script>

<template>
  <div id="app">
    <header>
      <h1>{{ appName }}</h1>
    </header>
    <main>
      <p>Welcome to your Vue.js weather application!</p>
      <p>Ready to start building amazing features.</p>
      <div v-if="isLoading">Loading weather data...</div>
    </main>
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header h1 {
  color: #42b983;
  margin-bottom: 30px;
}

main {
  margin: 0 auto;
  max-width: 600px;
  padding: 20px;
}
</style>
