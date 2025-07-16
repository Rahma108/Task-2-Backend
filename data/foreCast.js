// Weather Api 
const request = require("request")

const foreCast = (latitude , longitude , callBack )=>{
const url = "https://api.weatherapi.com/v1/current.json?key=edbc31213a594d5cb4825132251107&q="+latitude+","+longitude

request({url , json:true} , (error , response) =>{

    if(error){
        callBack("Unenable to Connect Wether Api Service ." , undefined)
    }else if(response.body.error){ // key Or Country Name
        callBack(response.body.error.message , undefined)
    } 
    else{
        callBack(undefined,"It is Temp :"+response.body.current.temp_c+ ","+ "It is Latitude : " + 
            response.body.location.lat +","+"It is Longitude :" + response.body.location.lon)
    }
})
}
//Exports
module.exports = foreCast



















