<template>
  <div>
    <h3>AGATARK</h3>
    <button @click="conn">Connect</button>
    <!--<canvas id="myChart"></canvas>-->
    <!--<p>{{ key }}</p>-->
  </div>
</template>
<script src="../js/r.js">
const crypto = require('crypto');
import { getPrice, SensorsAPI } from '../js/apijs.js';
//import Api from 'lib';
//const Api = require("../lib/enlife.js").Api;
//import { Api } from '../lib/enlife.js';
export default {
    data() {
        return{
            //key: crypto.pbkdf2Sync("apiUserApiUser", "apiuser", 10000, 32, "sha256")
            //key: 12598631298
        }
    },
    methods: {
        login: function(user, pass) {
            const key = crypto.pbkdf2Sync(pass, user, 10000, 32, "sha256")
            return this
            .put("/hello", { user: user, token: key.toString("hex") })
            .then(res => {
                auth = res.authorization
                if (!auth) throw new Error("no auth")
            })
            .then(() => this)
        },
       conn: function(){
           this.login("apiuser", "apiUserApiUser");
           fetch("https://c640.by.enlife.io/devices", {
                "method": "GET",
                "mode": "cors",
                "header": {
                    "Access-Control-Allow-Origin": '*',
                    "user": "apiuser",
                    "token": "00d2561caffec4e052cb05d7e5de5b8b14e9714cd08dc51af248ef49dbe8cf1d",
                    "Authentication": "00d2561caffec4e052cb05d7e5de5b8b14e9714cd08dc51af248ef49dbe8cf1d"
                },
                "body": {
                    "user": "apiuser",
                    "token": "00d2561caffec4e052cb05d7e5de5b8b14e9714cd08dc51af248ef49dbe8cf1d"
                }
            })
            .then(response => {
            //console.log(response.json())
            if(response.ok){
                console.log(response.json());
            } else{
                console.log("Server returned " + response.status + " : " + response.statusText);
            }
            })
            .then(response => {
                this.result = response.body;
                this.responseAvailable = true;
            })
            .catch(err => {
                console.log(err);
            });
            //console.log('here');
            /*var param = [{
                method: "patch",
                sensorId: 20,
                status: {temp: 22.3},
                setpoint: 22,
                min: 10,
                max: 90
            }];
            SensorsAPI(param);*/

       }
    }
}
</script>
