<template>
  <div>
    <h3>AGATARK</h3>
    <button @click="getAPIinfo">Connect</button>
    <p>{{ key }}</p>
    <!--<canvas id="myChart"></canvas>-->
    <!--<p>{{ key }}</p>-->
  </div>
</template>
<script>
//const crypto = require('crypto');
import { getPrice, SensorsAPI } from '../js/apijs.js';
//import Api from 'lib';
//const Api = require("../lib/enlife.js").Api;
import { Api } from '../lib/enlife2.js';
import CryptoES from 'crypto-es';
export default {
    data() {
        return{
            //key: crypto.pbkdf2Sync("apiUserApiUser", "apiuser", 10000, 32, "sha256")
            //key: 12598631298
            key: "fuck"
        }
    },
    methods: {
        getAPIinfo: function(){
            SensorsAPI().then((result) => {
                console.log(result);
            })
        },
        login: function(user, pass) {
            //const key = crypto.pbkdf2Sync(pass, user, 10000, 32, "sha256")
            const key = "00d2561caffec4e052cb05d7e5de5b8b14e9714cd08dc51af248ef49dbe8cf1d"
            //const key = CryptoES.PBKDF2(pass, user, { keySize: 256/32, iterations: 10000 });
            return this
            .put("/hello", { user: user, token: key.toString("hex") })
            .then(res => {
                auth = res.authorization
                if (!auth) throw new Error("no auth")
            })
            .then(() => this)
        },
        conn: function(){
            console.log('lol');
            this.key = CryptoES.PBKDF2("apiUserApiUser", "apiuser", { keySize: 256/32, iterations: 10000 });
            //return;
            var siteId = "c640"
            var siteName = 'https://' + siteId + '.by.enlife.io'
            /*Api.Api
            new Api(siteName)
            //[wizard?'wizard':'login']("apiuser", "apiUserApiUser")
            Api.prototype.login("apiuser", "apiUserApiUser")*/
            this.login("apiuser", "apiUserApiUser")
            .then (api => {
            // response to /hello command has got, continue to send a sample PATCH  commands and status GET query
                console.log("----------LOGIN OK ----------\n")
            /*
            --
            Sample PATCH command sets device measured temperature to 22.3C, setpoint temperature to 22C and limits minimum value to 10% and maximum value to 90%.
                - status.temperature indicates the runtime value, it is non-volatile i.e. will be lost after controller restart. As there's no real temperature sensor connected, it is emulated with PATCH command
                - other parameters in root level (e.g. setpoint and setup) map are volatile i.e. they survive controller restart.
                - setup.max limits max energy volume given to a device.
            One can change also name and other parameters, e.g. "name": "someDeviceName"
            */
                Promise
                .all([
                    api.patch("/devices?id="+heaterId, {
                        "status": {"temperature": 22.3},
                        "setpoint": 22,
                        "setup": {"min":10, "max": 90}
                    }),
                ])
                .then(function() {
            //------------------------------------------------------------------------------------------------------------------------
            /*
            Sample GET command queries the runtime status of device. It is sent after the response to PATCH command has been received.
            Instead of periodic querying it is possible to remain listening the runtime events with long poll method, which can be investigated in web console.
            query all devices: "/devices"
            query certain device by id: "/devices?id=something"
            query certain device by name part: "/devices?id=*t*" //all devices containing letter 't'
            query devices where setup.max limit has been set: "/devices?setup.max" or "/devices?setup.max>40"
            query devices where setup.max limit has not been set: "/devices?!setup.max"
            */
                    Promise
                    .all([
                        api.get("/devices?id="+heaterId)
                        .then( function(res) {
                            res.forEach( function(item) { console.log(" -> device info:", item) })
                        }),
                        api.get("/rooms?tag=nordPool")
                        .then( function(res) {
                            res.forEach( function(item) { console.log(" -> Nord Pool price info:", item.status) })
                        }),
                    ])
                    .then(function() {
                        console.log("\n------------ DONE -----------")
            }) }) })
           /*this.login("apiuser", "apiUserApiUser");
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
                    //?user=apiuser&token=00d2561caffec4e052cb05d7e5de5b8b14e9714cd08dc51af248ef49dbe8cf1d
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
            });*/
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
