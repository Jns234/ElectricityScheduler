//export async function getCurentWeather(){
/*let getCurrentPrice = new Promise(async function(res, rej) {
  fetch("https://dashboard.elering.ee/api/nps/price/EE/current", {
    "method": "GET",
    "mode": "cors"
  })
  .then(response => {
    //console.log(response.json())
    if(response.ok){
      res(response.json());
    } else{
      alert("Server returned " + response.status + " : " + response.statusText);
    }
  })
  .then(response => {
    this.result = response.body;
    this.responseAvailable = true;
  })
  .catch(err => {
    console.log(err);
  });
});
let getLastPrice = new Promise(async function(res, rej){
  fetch("https://dashboard.elering.ee/api/nps/price/EE/latest", {
    "method": "GET",
    "mode": "cors"
  })
  .then(response => {
    //console.log(response.json())
    if(response.ok){
      res(response.json());
    } else{
      alert("Server returned " + response.status + " : " + response.statusText);
    }
  })
  .then(response => {
    this.result = response.body;
    this.responseAvailable = true;
  })
  .catch(err => {
    console.log(err);
  });
})*/
var getPrice = function(mode, param){
  return new Promise(async function(res, rej){
    var link = "https://dashboard.elering.ee/api/nps/price"
    if(mode == 1){
      link += "?start="+param.start+"&end="+param.end
    }
    else if(mode == 2){
      link += "/"+param+"/current"
    }
    else if(mode == 3){
      link += "/"+param+"/latest"
    }
    else{
      rej("Wrong mode")
    }
    //console.log(link)
    fetch(link, {
      "method": "GET",
      "mode": "cors"
    })
    .then(response => {
      //console.log(response.json())
      if(response.ok){
        res(response.json());
      } else{
        rej("Server returned " + response.status + " : " + response.statusText);
      }
    })
    .then(response => {
      this.result = response.body;
      this.responseAvailable = true;
    })
    .catch(err => {
      rej(err);
    });
  })
}
/*var agatark = function(){

}*/
//import { Api } from "../lib/enlife.js";
var SensorsAPI = function(param){
  //console.log('here');
  //const Api = require("../lib/enlife.js").Api;
  //const Api = import("../lib/enlife.js").Api
  return new Promise(async function(res, rej){
    var heaterId = 20
    var ventilationId = 21
    var boilerId = 22
    var siteId = "c640";
    var siteName = 'https://' + siteId + '.by.enlife.io';
    var wizard = false;

    const Api = require("../lib/enlife.js").Api
    //import { Api } from "../lib/enlife.js";
    console.log(siteName);
    new Api(siteName);

    validMethod = ["get","post","put","delete","patch"];

    param.forEach(par => {
      if(!validMethod.includes(par.method)){rej("Invalid method: '"+par.method+"'");}
      else{
        [wizard?'wizard':'login']("apiuser", "apiUserApiUser")
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
            api.par.method("/devices?id="+par.sensorId, {
              "status": {"temperature": par.status.temp},
              "setpoint": par.setpoint,
              "setup": {"min": par.min, "max": par.max}
            }),
          ])
        })
        .then(function(res) {
          console.log(res);
        })
      }
    });
    /*fetch(link, {
      "method": method,
      "mode": "cors"
    })
    .then(response => {
      //console.log(response.json())
      if(response.ok){
        res(response.json());
      } else{
        rej("Server returned " + response.status + " : " + response.statusText);
      }
    })
    .then(response => {
      this.result = response.body;
      this.responseAvailable = true;
    })
    .catch(err => {
      rej(err);
    });*/
  })
}
export {
  //getCurrentPrice,
  //getLastPrice,
  getPrice,
  SensorsAPI
};
//https://dashboard.elering.ee/api/nps/price?start=2021-12-15T20%3A59%3A59.999Z&end=2021-12-17T20%3A59%3A59.999Z