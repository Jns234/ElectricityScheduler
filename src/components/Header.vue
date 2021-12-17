<script setup lang="ts">

import { useRoute } from 'vue-router';
import { ref } from 'vue'
import { isDark, toggleDark } from '~/composables'

const { t, availableLocales, locale } = useI18n()

const toggleLocales = (local: any) => {
  const locales = availableLocales

  for (let i = 0; i < locales.length; i++) {
    if (locales[i] == local) {
      locale.value = locales[i]
    }
  }
}

const active = ref(0);

const currentRoute = computed(() => {
  return useRoute().name
})

console.log(currentRoute.value)

active.value = currentRoute.value
//active.value = "Home"

/*const togglePage = (page: String) => {
  console.log(page)
  active = page
  return active
}*/

</script>

<template>
  <nav class="flex flex-row justify-between align-center text-lg <sm:(flex-col)">
    <router-link class="" to="/" :title="t('button.home')" @click="active = 'index'">
      <span class="text-black dark:text-white text-3xl">
        Smart<span class="font-500">Energia</span>
      </span>
    </router-link>

    <div class="flex flex-row justify-between align-center ml-auto mr-20 text-black dark:text-white <xl:hidden">
      <router-link to="/" class="m-4" @click="active = 'index'">
        <!--<span v-if="active == 'Home'" class="opacity-100 border-bottom">Home</span>
        <span v-else class="opacity-75">Home</span>-->
        <span v-if="active == 'index'" class="opacity-100 border-bottom">Home</span>
        <span v-else class="opacity-75">Home</span>
      </router-link>

      <router-link to="/dashboard" class="m-4" @click="active = 'dashboard'">
        <span v-if="active == 'dashboard'" class="opacity-100 border-bottom">Dashboard</span>
        <span v-else class="opacity-75">Dashboard</span>
      </router-link>

      <router-link to="/about" class="m-4" @click="active = 'about'">
        <span v-if="active == 'about'" class="opacity-100 border-bottom">About</span>
        <span v-else class="opacity-75">About</span>
      </router-link>
    </div>

    <div class="flex flex-row">
      <button class="icon-btn mx-2 dark:text-white text-black !outline-none mr-4" :title="t('button.toggle_dark')" @click="toggleDark()">
        <carbon-sun v-if="isDark" />
        <carbon-moon v-else />
      </button>

      <a class="dark:text-white text-black font-500 flex flex-row justify-left align-center cursor-pointer mr-2" @click="toggleLocales('et')">
        <span class="mr-1">ET</span>
        <!--<carbon-language/>-->
      </a>
      <a class="dark:text-white text-black font-500 flex flex-row justify-left align-center cursor-pointer mr-2" @click="toggleLocales('en')">
        <span class="mr-1">EN</span>
      </a>
      <a class="dark:text-white text-black font-500 flex flex-row justify-left align-center cursor-pointer mr-2" @click="toggleLocales('ru')">
        <span class="mr-1">RU</span>
      </a>
    </div>
    


  </nav>
</template>
