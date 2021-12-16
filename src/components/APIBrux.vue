<template>
    <div>
        <h3>CLICK IT</h3>
        <button @click="getAPIinfo">Bruh</button>
        <p>{{ data }}</p>
    </div>
</template>
<script>
import { getPrice, SensorsAPI } from '../js/apijs.js';
import {
 isPushNotificationSupported,
 sendNotification,
 initializePushNotifications,
 registerServiceWorker
} from "../js/push-notifications.js";
export default {
    data() {
        return{
            data: "bruh"
        }
    },
    methods: {
        getAPIinfo: function(){
            var mode = 3;
            //var param = {start:"2021-12-15T20%3A59%3A59.999Z", end:"2021-12-17T20%3A59%3A59.999Z"};
            var param = "EE";
            getPrice(mode, param).then((result) => {
                console.log(result)
                this.data = result.data;
                //console.log(result.data[0])
                const pushNotificationSuported = isPushNotificationSupported();
                if (pushNotificationSuported) {
                    registerServiceWorker();
                    initializePushNotifications().then(function(consent){
                        if(consent === 'granted') {
                        sendNotification();
                        }
                    });
                }
            })
            /*param = [{
                method: "patch",
                sensorId: 20,
                status: {temp: 22.3},
                setpoint: 22,
                min: 10,
                max: 90
            }];
            SensorsAPI(param);*/
            /*SensorsAPI(param).then((result) => {
                console.log(result)
            })*/
            /*window.setInterval(() => {
                getLastPrice.then((result) => {
                    console.log(result.data[0])
                })
            }, 1000*60*60);*/
        }
    },
}
</script>