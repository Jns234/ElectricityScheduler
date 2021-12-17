//import fetch from 'node-fetch'
import fetch from 'cross-fetch'

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
      this.result = response.data;
      this.responseAvailable = true;
    })
    .catch(err => {
      rej(err);
    });
  })
}
export{
  //getCurrentPrice,
  //getLastPrice,
  getPrice
};
//https://dashboard.elering.ee/api/nps/price?start=2021-12-15T20%3A59%3A59.999Z&end=2021-12-17T20%3A59%3A59.999Z