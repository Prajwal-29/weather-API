const express = require("express");
const request = require("request");

const app = express()

app.get('/',( req, res) => {
    let city = req.query.city;
    var request = require('request');
    request('https://samples.openweathermap.org/data/2.5/forecast?q=$(city)&appid=0dbfc0bbbdb3859a95ca3b1a5919dd7d', 
    function(error, response, body){
        let data = JSON.parse(body);
if(response.statuscode === 200)  
{
    res.send('The weather in your city "$(city)" is ${data.list[e].weather[0].description}')
}      


    });
});

app.listen(3000, () => console.log("server started on port 3000"));

