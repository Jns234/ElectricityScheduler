<script setup lang="ts">
  //todo Adaptive design
  // todo fix dark theme
</script>

<template>
  <div class="flex flex-row w-full max-h-full <xl:(flex-col-reverse justify-center) align-center ">
    <div class="w-1/2 flex flex-col justify-center <xl:(w-full text-center items-center) ">
      <h1 class="text-7xl <xl:text-6xl <md:text-5xl dark:text-white text-black">Start <b>consuming</b> electricity <b>smarter than ever</b></h1>
      <p class="text-gray text-2xl <2xl:text-xl mt-8 <md:text-lg">
        We will help you to schedule your electricity consumption, understand the current situation on the market and adapt to the exchange prices growth better
      </p>

      <router-link to="/" class="px-4 py-6 <xl:(px-2 py-5) bg-green rounded-3xl w-5/12 <2xl:w-8/12 grid place-items-center mt-12" title="Go to the dashboard">
        <span class="text-black text-2xl <xl:text-xl font-500 ">Go to the dashboard</span>
      </router-link>
    </div>

    <div class="w-1/2 grid place-items-center <xl:(mb-24 w-1/3) <md:(w-2/3 mb-12)">
      <img src="/img/flash2.png" alt="flash">
    </div>
  </div>
  
</template>

<route lang="yaml">
meta:
  layout: home
</route>