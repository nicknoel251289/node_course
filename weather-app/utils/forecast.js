const request = require('request')

const forecast = (longitude, latitude, callback) => {

    let url = 'https://api.darksky.net/forecast/79b174580d596285e08f2800636932ad/' + latitude + ',' + longitude

    request({url: url, json: true}, (error, data) => {
        
        if(error){
            callback('There was an error with your connection', undefined)
        }else if(data.body.error){
            callback(data.body.error, undefined)
        }else{
            callback(undefined, data.body.timezone)
        }
        
    })

}

module.exports = forecast