<script>
export default {

}
</script>

<template>
  <div class="bg-white text-white ">
    <div class="container max-w-5xl flex items-center py-5 lg: mx-auto">
      <div class="flex">
        <svg class=" bg-blue-500 p-2 rounded-full w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          data-v-a04674dc="">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.002 4.002 0 003 15z"
            data-v-a04674dc=""></path>
        </svg>
        <div class=" mt-2 mx-1.5 text-2xl font-bold cursor-default text-black">Weather App</div>
      </div>
      <div class="ml-auto mr-8 ">
        <router-link to="/history"
          class="flex gap-2 text-shadow-xs text-zinc-400 text-xl font-bold cursor-pointer ">History
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="32" viewBox="0 0 24 24" fill="none"
            stroke="rgb(161 161 170)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 12h12" />
            <path d="M17 16l4 -4l-4 -4" />
            <path d="M12 3a9 9 0 1 0 0 18" />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>
