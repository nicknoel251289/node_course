const request = require('request')

const weather = (location, error) => {

    let url = ''

    request({url: url, json: true}, (error, response) => {
        if(error){

        }else if (response.body.error){

        }else{
            
        }
    })

}