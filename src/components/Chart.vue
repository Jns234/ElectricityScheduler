<template>
    <div>
        <h3>CLICK IT</h3>
        <button @click="getAPIinfo">Bruh</button>
        <canvas id="myChart"></canvas>
    </div>
</template>
<script>
import { getCurrentPrice } from '../js/apijs.js';
import { Chart } from '../js/chart.js';
export default {
    methods: {
        getAPIinfo: function(){
            getCurrentPrice.then((result) => {
                console.log(result.data[0].timestamp);
                this.getChart(result.data[0])
            });
        },
        getChart: function(data){
            const config = {
                type: 'line',
                data: chartdata,
                options: {}
            };
            const labels = [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
            ];
            const chartdata = {
                labels: labels,
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [0, 10, 5, 2, 20, 30, 45],
                }]
            };

            const myChart = new Chart(
                document.getElementById('myChart'),
                config
            );
        }
    },    
}
</script>