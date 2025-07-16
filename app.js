//  Main App.................
// 2- Api >>>>>>>>>>>> 1- Weather Api &&& MapBox ....
// • Prompt the user to enter the name of a country via the terminal.
// • Use a suitable API (weather API, Geocoding API) to fetch the required data 
// (temperature, longitude, latitude) based on the provided country name.

// mapbox --> country name --> longitude, latitude
// weather Api --> longitude, latitude -->. temperature, longitude, latitude

// 1- Api MapBox 

// Dynamic  Country Name .

const country = process.argv[2]

const geoCode = require("./data/geoCode")
const foreCast = require("./data/foreCast")

// data هعرضها ب (,) وليس (+) 
geoCode(country , (error , data)=>{
    console.log("Error : ", error)
    console.log("Data : " ,  data)

/////////////////////////////////////////////////
      // 2- Weather Api ..
      // // input lat , lon ---> output temperature

      //Dynamic.
    foreCast(data.latitude , data.longitude , (error , data)=>{
        console.log("Error : ", error)
        console.log("Data : " , data)

    })

})





