<script setup lang="ts">
import { ref } from 'vue'
import { getPrice } from '~/api/api.js'
import { lowestPrice, highestPrice, getRoundedDate, indexofcurrenthour } from '~/formatters/nordpool.js'

const { t } = useI18n()

// getting now
const timeElapsed = Date.now()
const today = new Date(timeElapsed)
const today_iso =  today.toISOString()

// getting yesterday
let yesterday = new Date(new Date().setDate(new Date().getDate()-1))
const yesterday_iso = yesterday.toISOString()

const data = ref(0)

getPrice(1, { "start": yesterday_iso, "end": today_iso }).then((result: any) => {
  //console.log(result) 
  // getting only estonia
  data.value = result.data.ee
})


//console.log(data.value)


</script>

<template>
    <h3 class="text-4xl <xl:text-3xl <md:text-2xl font-500 mt-12">Electricity exchange prices</h3>

    <!--<span>{{ data }}</span>-->


    <div class="flex flex-row justify-around mt-8">
    <div class="flex flex-col justify-center align-center text-center dark:bg-dark-gray bg-light-gray w-3/16 px-8 py-18 rounded-5xl">
        <span class="opacity-75 text-xl mb-2">EUR per KWh</span>
        <span v-if="Array.isArray(data)" class="text-6xl">{{ (indexofcurrenthour(data).price / 1000).toFixed(2) }}</span>
        <span v-else class="text-4xl opacity-50">Loading</span>
        <span class="mt-2">Current electricity price</span>
    </div>

    <div class="flex flex-col justify-center align-center text-center dark:bg-dark-gray bg-light-gray w-3/16 px-8 py-18 rounded-5xl">
        <span class="opacity-75 text-xl mb-2">EUR per KWh</span>
        <span v-if="Array.isArray(data)" class="text-6xl">{{ (highestPrice(data) / 1000).toFixed(2) }}</span>
        <span v-else class="text-4xl opacity-50">Loading</span>
        <span>Today's highest price</span>
    </div>

    <div class="flex flex-col justify-center align-center text-center dark:bg-dark-gray bg-light-gray w-3/16 px-8 py-18 rounded-5xl">
        <span class="opacity-75 text-xl mb-2">EUR per KWh</span>
        <span v-if="Array.isArray(data)" class="text-6xl">{{ (lowestPrice(data) / 1000).toFixed(2) }}</span>
        <span v-else class="text-4xl opacity-50">Loading</span>
        <span>Today's average price</span>
    </div>

    </div>
</template>

