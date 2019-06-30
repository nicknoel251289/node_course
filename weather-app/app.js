const request = require('request')
const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast.js')

// geoCode('san antonio texas', (error, data_1, data_2) => {

//     if(!error){
//         console.log(data_1, data_2);
//     }else{
//         console.log(error);
//     }

//     forecast(data_1, data_2, (error, data) => {
//         if(!error){
//             console.log(data);
//         }else{
//             console.log(error);
//         }
//     })

// })

let address = process.argv[2]

if(!address){
    return console.log('No location was given');
}else{
    geoCode(address, (error, { longitude, latitude, location }) => {

        if(error){
            return console.log(error);
        }else{
            console.log(address, longitude, latitude, location);
            
        }
    
        forecast(longitude, latitude, (err, data) => {
            if(err){
                return console.log(err);
            }else{
                console.log(longitude, latitude); 
                console.log(location);
                console.log(data);
                console.log(address);
                
            }
        })
    
    })
}

