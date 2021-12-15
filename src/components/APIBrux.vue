<template>
    <div>
        <h3>CLICK IT</h3>
        <button @click="getAPIinfo">Bruh</button>
    </div>
</template>
<script>
import { getCurrentPrice } from '../js/apijs.js';
export default {
    methods: {
        getAPIinfo: function(){
            getCurrentPrice.then((result) => {
                console.log(result.data[0]);
            });
        }
    },    
}
</script>