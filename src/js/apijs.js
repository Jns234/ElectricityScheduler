//export async function getCurentWeather(){
let getCurrentPrice = new Promise(async function(res, rej) {
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
export{
  getCurrentPrice,
};