<script setup lang="ts">
import Menu1 from "./Menu.vue";

const { t } = useI18n()

/*const toggleMenu = () => {
  console.log("here")
}*/

// languge changing logic
/*const toggleLocales = () => {
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}*/

let active :boolean = false;

</script>

<template>
  <nav class="flex flex-row justify-between align-center text-lg">
    <router-link class="" to="/" :title="t('button.home')">
      <span class="text-black dark:text-white text-3xl">
        Smart<span class="font-500">Energia</span>
      </span>
    </router-link>

    <div class="flex flex-row justify-between align-center ml-auto mr-20 opacity-75 text-black dark:text-white">
      <router-link to="/" class="m-4">
        <span>Privacy Policy</span>
      </router-link>

      <router-link to="/" class="m-4">
        <span>Terms & Conditions</span>
      </router-link>

      <router-link to="/" class="m-4">
        <span>About</span>
      </router-link>
    </div>

    <a class="dark:text-white text-black font-500 flex flex-row justify-left align-center cursor-pointer" @click="active=true">
      <span class="mr-1">Menu</span>
      <carbon-menu/>
    </a>
  </nav>
</template>
