function timeformater(unixtime) {
    var date = new Date(unixtime * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    // var seconds = "0" + date.getSeconds();
    var formattedTime = hours + ':' + minutes.substr(-2);
    return formattedTime;
}

function lowestPrice(pricesdata) {
    pricesdata.sort((a, b) => a.price - b.price);
    return pricesdata[0].price;

}

function highestPrice(pricesdata) {
    pricesdata.sort((a, b) => a.price - b.price);
    return pricesdata[pricesdata.length - 1].price;
}

function today() {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    return data.toISOString()

}

let getRoundedDate = (minutes, d=new Date()) => {

    let ms = 1000 * 60 * minutes; // convert minutes to ms
    let roundedDate = new Date(Math.round(d.getTime() / ms) * ms);
  
    return roundedDate
  }

function tomorrow() {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    return date = tomorrow.getFullYear() + '-' + (tomorrow.getMonth() + 1) + '-' + tomorrow.getDate();
}

function indexofcurrenthour(pricesdata) {
    let time = Date.now()

    console.log(pricesdata.length)

    var index = 0
    for(let i = 0; i < pricesdata.length; i++) {
        let ind = 0 
    
        if (formattohour(pricesdata[i].timestamp * 1000) === formattohour(time)) {
            console.log(i + 1)

            ind = i
        }
        
        index = ind
    }
    console.log(pricesdata[index])

    return pricesdata[index];
}

function formattohour(unixtime) {
    var date = new Date(unixtime)
    var hour = date.getHours();
    return hour
}

export {
    lowestPrice,
    highestPrice,
    indexofcurrenthour,
    getRoundedDate
}