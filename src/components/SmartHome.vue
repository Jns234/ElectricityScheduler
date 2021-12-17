<script setup lang="ts">

import {
 isPushNotificationSupported,
 sendNotification,
 initializePushNotifications,
 registerServiceWorker
} from "~/notifications/push-notifications.js";

const pushNotificationSuported = isPushNotificationSupported();
if (pushNotificationSuported) {
    registerServiceWorker();
    initializePushNotifications().then(function(consent: any){
        if(consent === 'granted') {
            sendNotification();
        }
    });
}

</script>

<template>

</template>