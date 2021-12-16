const axios = require('axios');


const options = {
    url: 'https://dashboard.elering.ee/api/nps/price?start=' + today() + 'T00%3A00%3A00.000Z&end=' + tomorrow() + 'T01%3A00%3A00.000Z',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
    }
};

axios(options).then((response) => {


    let prices = response.data.data.ee



    // console.log(prices[0].timestamp)
    console.log('lowest price:')
    console.log(timeformater(prices[0].timestamp), "-", lowestPrice(prices))

    console.log('highest price:')
    console.log(timeformater(prices[prices.length - 1].timestamp), "-", highestPrice(prices))
    console.log('current price')
    console.log(prices[indexofcurrenthour(prices)].price)


// four cheapest prices for today
console.log("Soodsamad tunnid täna:");

for (let i = 0; i < 4; i++) {
    console.log(prices[i])
}
// four highest prices for today
console.log("Kallimad tunnid täna:");
for (let i = 0; i < 4; i++)
    console.log(prices[prices.length - 1 - i]);

})
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
    return date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


}

function tomorrow() {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    return date = tomorrow.getFullYear() + '-' + (tomorrow.getMonth() + 1) + '-' + tomorrow.getDate();
}

function indexofcurrenthour(pricesdata) {
    time = Date.now()
    // console.log(formattohour(time))


    for (i = 0; i < pricesdata.length; i++) {
        if (formattohour(pricesdata[i].timestamp * 1000) === formattohour(time)) {
            // console.log(formattohour(pricesdata[i].timestamp * 1000))
            return i + 1
        } break;



    }
    return 'her'

}

function formattohour(unixtime) {
    var date = new Date(time)
    var hour = date.getHours();
    return hour
}