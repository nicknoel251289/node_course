const request = require('request')

const forecast = (longitude, latitude, callback) => {

    let url = 'https://api.darksky.net/forecast/79b174580d596285e08f2800636932ad/' + latitude + ',' + longitude

    request({ url, json: true}, (error, { body }) => {
        
        if(error){
            callback('There was an error with your connection', undefined)
        }else if(body.error){
            console.log(body.error)
        }else{
            callback(undefined, body.daily.data[0].summary)
        }
    })

}

module.exports = forecast