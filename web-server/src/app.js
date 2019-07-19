const express = require('express')

// 1. express is a function as opposed to an object

const app = express()
console.log(app + '!');

// 1. Express function does not take any arguments
// 2. We configure our server by using various methods provided on the application itself
// 3. Below we will tell what we want our Express app to do

// app.com - consider the 'main/root route'
// app.com/help - this is the 'help route'
// app.com/about

app.get('', (req, res) => {

    res.send('Hello express!')
    // 1. This allows us to send something back to the requester. So if someone's making a 
    //    request from code using something like NPM request library, they'll get this back
    // 2. If they are making the request from the browser this is what is going to display 
    //    in the browser window

})

// 1. Using the GET method on app lets us configure what the server should do when someone 
//    tries to get the resource at a specific URL. For example we could send back HTML
//    or JSON
// 2. get() takes in 2 arguments.
//      a. the first is the route; the partial URL: ie. /help or /about
//      b. the second is a function where we describe what we want to do when
//         someone visits this particular route.
//           1. The function takes 2 arguments
//                a. First is an object 
//                     1. containing info about the incoming request to the server
//                     2. Commonly abbreviated 'req'
//                b. Seconds is the response. 
//                     1. This contains a bunch of methods allowing us
//                        to customize what we're going to send back to the requester
//                     2. Commonly abbreviated 'res'

app.get('/help', (req, res) => {
    res.send('Help page')
})

app.get('/about', (req, res) => {
    res.send('FAQ/about page')
})

app.get('/weather', (req, res) => {
    res.send('Weather page')
})

app.listen(3000, () => {
    console.log('Server is up onm port 3000');
    
})
// 1. Port 3000 is a common dev port. This is obviously not the default port
// 2. When you visit a website you don't provide the port. There are defaults. For example
//    for an HTTP based site it is port 80.
// 3. The callback is optional. It executes when the server is up and running.
// 4. Starting a server is an asynchronous process.
// 5 . If you run the code thats above THIS comment, it will NOT bring you back to the command prompt
//     to run something else. That is because the node process is still up and running.
// 6. It will never stop running unless we stop it because its job is to stay running listening and 
//    processing new incoming requests. So if someone does visit the root of our web site they can get
//    a response right away.

