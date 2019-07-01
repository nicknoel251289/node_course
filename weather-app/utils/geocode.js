const request = require('request')

const geoCode = (address, callback) => {

    // I could create dynamic variables for entering the coordinates for the proximity property in the URL by pinging the persons current location
    let url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?types=address&proximity=-72.589811,42.1014831&country=US&access_token=pk.eyJ1Ijoibmlja25vZWwyNTEyODkiLCJhIjoiY2p3OW5tMzJiMDEzbDQwbnFldjdiaHJqaiJ9.othuCSt15GVTWW-0FC7zZQ'

    request({ url, json: true}, (error, { body }) => {
        if(error){
            callback('Unable to connect to location services', undefined)
        }else if(body.features.length === 0){
            callback('Unable to find location. Try another search.', undefined)
        }else{
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name,
                bodyObject: body
            })
            //undefined, response.body.features[0].place_name + " is located at " + latitude + " deg latitude " + "and " + longtitude + " deg longtitude"
        }
    })

}

module.exports = geoCode