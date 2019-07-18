const https = require('https')
let url = 'https://api.darksky.net/forecast/79b174580d596285e08f2800636932ad/-72.588223,42.102166' 

const request = https.request(url, (response) => {

    let data = ''

    // 1. requesting data from url/api
    // 2. this will execute one time for every chunk of data
    // 3. once all data has come through, it's saved to the chunk argument/variable
    response.on('data', (chunk) => {

        // 1. concatenate the chunks
        data = data + chunk.toString()
    })

    // 1. after all data has come through, this will run a single time once things are done.
    //    We need to tell the program to stop and return the data
    // 2. For whatever reason, we can only access data through response.on. we cant return data and
    //    get the value otherwise.
    response.on('end', () => {
        //console.log(data); //returns 1 large string
        const body = JSON.parse(data)
        console.log(body);
        
    })
    
})

// calling done sees that we are done setting up our request and fire it off
request.end()

//console.log(request); //prints me out the request function
