<script setup lang="ts">

//import { ref } from 'vue'
//import { getPrice } from '~/api/api.js'

/*import { Request, Response, NextFunction } from 'express'
import axios, { AxiosResponse } from 'axios'*/

const { t } = useI18n()



</script>

<template>
  <div class="flex flex-col w-full dark:text-white text-black">
    <h1 class="text-7xl <xl:text-6xl <md:text-5xl font-500">Dashboard</h1>

    <ExchangePrice />

    <SmartHome />
  </div>
</template>