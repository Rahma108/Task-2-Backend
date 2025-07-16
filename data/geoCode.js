const request = require("request")

// geoCode(address , callBack)=>)
const geoCode=( address , callBack ) =>{ // Func ..

const geoCodeUrl ="http://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"


request({url : geoCodeUrl , json :true},(error , response)=>{

if(error){  // Low Level Error ....
    // console.log("Unenable to connect GeoCode Service . ")
    callBack("Unenable to connect GeoCode Service ." , undefined) // error , data
}else if (response.body.message) {// token ..
    // console.log(response.body.message)
    callBack(response.body.message , undefined) // error , data
} else if (response.body.features.length == 0) {  // Country Name Error ..

    callBack("Unenable to Find Location ." , undefined)
} else{   // TRUE ----> Response ...
    // Object ...............................
    callBack(undefined ,
    { 
        longitude : response.body.features[0].center[0],
        latitude : response.body.features[0].center[1]
     }) // error , data
    }
})
}
//Exports
module.exports = geoCode
