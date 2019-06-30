const request = require('request')

const geoCode = (address, callback) => {
    let url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoibmlja25vZWwyNTEyODkiLCJhIjoiY2p3OW5tMzJiMDEzbDQwbnFldjdiaHJqaiJ9.othuCSt15GVTWW-0FC7zZQ'

    request({ url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to location services', undefined)
        }else if(response.body.features.length === 0){
            callback('Unable to find location. Try another search.', undefined)
        }else{
            callback(undefined, {
                longtitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
            //undefined, response.body.features[0].place_name + " is located at " + latitude + " deg latitude " + "and " + longtitude + " deg longtitude"
        }
    })

}

module.exports = geoCode