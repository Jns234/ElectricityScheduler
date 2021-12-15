<script setup lang="ts">
    //const props = defineProps<{ active: boolean }>();

    import { isDark, toggleDark } from '~/composables'

</script>

<template>
    <div class="w-full h-full is-active absolute backdrop-blur-sm backdrop-blurry top-0 left-0">
        <div class="absolute" @click="$emit('close')">

        </div>
        <div class="w-3/12 ml-auto mr-0 h-full bg-crystal dark:bg-blackhole px-12 py-12">
            <ul class="flex flex-col h-full">
                <li>
                    <router-link class="" to="/" title="Home">
                        <span class="text-black dark:text-white text-3xl">
                            Smart
                            <span class="font-500">Energia</span>
                        </span>
                    </router-link>
                </li>
                <li class="mt-12">
                    <div class="bg-light-gray dark:bg-dark-gray px-6 py-4 rounded-20 flex flex-row align-center transition duration-200 ease-in-out">
                        <span class="dark:text-white text-black text-lg">Change theme</span>

                        <button class="icon-btn mr-0 ml-auto my-0 !outline-none dark:text-white text-black" title="Toggle Dark Mode" @click="toggleDark()">
                            <carbon-moon v-if="isDark" />
                            <carbon-sun v-else />
                        </button>
                    </div>
                </li>
                <li class="mt-4">
                    <div class="bg-light-gray dark:bg-dark-gray px-6 py-4 rounded-20 flex flex-row align-center transition duration-200 ease-in-out">
                        <span class="dark:text-white text-black text-lg">Change language</span>

                        <a class="icon-btn mr-0 ml-auto my-0 !outline-none dark:text-white text-black" title="Change language" @click="">
                            <carbon-language />
                        </a>
                    </div>
                </li>
                <li class="mt-4">
                    <div class="bg-light-gray dark:bg-dark-gray px-6 py-4 rounded-20 flex flex-row align-center transition duration-200 ease-in-out">
                        <span class="dark:text-white text-black text-lg">Back home</span>

                        <a class="icon-btn mr-0 ml-auto my-0 !outline-none dark:text-white text-black" title="Change language" @click="">
                            <carbon-arrow-left />
                        </a>
                    </div>
                </li>
                <li class="mt-auto mb-0">
                    <div class="bg-light-gray dark:bg-dark-gray px-6 py-4 rounded-20 flex flex-row align-center transition duration-200 ease-in-out">
                        <span class="dark:text-white text-black text-lg">About</span>

                        <a class="icon-btn mr-0 ml-auto my-0 !outline-none dark:text-white text-black" title="Change language" @click="">
                            <carbon-information />
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>