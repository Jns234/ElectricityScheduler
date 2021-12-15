<template>
    <div>
        <h3>CLICK IT</h3>
        <button @click="getAPIinfo">Bruh</button>
    </div>
</template>
<script>
import { getPrice } from '../js/apijs.js';
import {
 isPushNotificationSupported,
 sendNotification,
 initializePushNotifications,
 registerServiceWorker
} from "../js/push-notifications.js";
export default {
    methods: {
        getAPIinfo: function(){
            var mode = 3;
            //var param = {start:"2021-12-15T20%3A59%3A59.999Z", end:"2021-12-17T20%3A59%3A59.999Z"};
            var param = "EE";
            getPrice(mode, param).then((result) => {
                console.log(result)
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
            /*window.setInterval(() => {
                getLastPrice.then((result) => {
                    console.log(result.data[0])
                })
            }, 1000*60*60);*/
        }
    },
}
</script>