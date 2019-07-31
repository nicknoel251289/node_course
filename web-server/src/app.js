const path = require('path')
const express = require('express')

// 1. express is a function as opposed to an object

const app = express()
console.log(app + '!');

// 1. Express function does not take any arguments
// 2. Express has methods
// 3. We configure our server by using various methods provided on the application itself
// 4. Below we will tell what we want our Express app to do
// 5. Express will listen for when someone lands on a specific route, use a method like GET, and
//    then we can send a reponse like with SEND

// app.com - consider the 'main/root route'
// app.com/help - this is the 'help route'
// app.com/about

//console.log(__dirname)
//console.log(path.join(__dirname, '../public')) how we can CUSTOMIZE FILE PATHS

const publicPath = path.join(__dirname, '../public')
// 1. The path.join() method joins the specified path segments into one path.
//console.log(publicPath);


app.set('view engine', 'hbs')
// 1. Setting up our HBS engine
// 2. app.SET allows you to set a value for a given express setting and there are a few. 
// 3. We have a KEY, SETTING NAME and a VALUE - the value we want to set for the SETTING (ex. hbs)
// 4. To set up our view engine like Express, the value is 'view engine' (IT IS IMPORTANT THIS IS SPELLED EXACTLY CORRECT)
// 5. View Engine is responsible for rendering the view into html form to the browser (https://stackoverflow.com/questions/8308485/what-is-view-engine-what-does-it-actually-do)

app.set('views', path.join(__dirname, '../views')) 
// 1. if you run the node app from inside the src/ folder, it's looking for src/views/ folder. If you run the Node app from the root of 
//    the project, it's looking for views/ which does exist
//    a. Error: Failed to lookup view "index" in views directory "C:\Users\nickn\OneDrive\Desktop\Node-Course\web-server\src\views"

app.use(express.static(publicPath))

// 1. Express.static is a function and we are calling it and passing its return value into app.USE
// 2. USE takes the path that we want to use as an argument. Essentially we are passing out HTML file
//    and using its contents

app.get('', (req, res) => {
    res.render('index', {
        title: 'WEATHER APP',
        subtitle: 'by Nick Noel'
    })
})
// 1. When a person hits this route endpoint via the browser creating an HTTP GET reuqest, we want our web server (Express) we want to respond by rendering our index.hbs
// 2. Express will send (res) the index page we are rendering
// 3. Express listens for someone to land on this route/endpoint
// 4. https://www.ntu.edu.sg/home/ehchua/programming/webprogramming/HTTP_Basics.html

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'ABOUT',
        subtitle: 'My family'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'HELP',
        helpMessage: 'You are screwed'
    })
})

// **** EXAMPLE WITH EXPLINATIONS **** //

// app.get('', (req, res) => {

    // res.send('<h1>YOUR LOCAL WEATHER</h1>')
    // 1. This allows us to send something back to the requester. So if someone's making a 
    //    request from code using something like NPM request library, they'll get this back
    // 2. If they are making the request from the browser this is what is going to display 
    //    in the browser window
// })

// ***** app.GET method *****
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

// app.get('/help', (req, res) => {
//     res.send({
//         name: 'Nick',
//         age: 29
//     })
// })

// app.get('/about', (req, res) => {
//     res.send('<h1>ABOUT THE WEATHER APP</h1>')
// })

// app.get('/weather', (req, res) => {
//     res.send({
//         weather: 'Cloudy, 78 degrees, with rain.',
//         location: 'Windsor, CT'
//     })
// })

app.listen(3000, () => {
    console.log('Server is up on port 3000');
})
// 1. Port 3000 is a common dev port. This is obviously not the default port
// 2. When you visit a website you don't provide the port. There are defaults. For example
//    for an HTTP based site it is port 80.
// 3. The anonymous callback function is optional. It executes when the server is up and running.
// 4. Starting a server is an asynchronous process.
// 5 .If you run the code thats above THIS comment, it will NOT bring you back to the command prompt
//    to run something else. That is because the node process is still up and running.
// 6. It will never stop running unless we stop it because its job is to stay running listening and 
//    processing new incoming requests. So if someone does visit the root of our web site they can get
//    a response right away.
// 7. Express will listen for when someone visits/lands on a specific route and display the HTML content that has been created/rendered.
// 8. We can then use HTTP methods (via Express) like GET and SEND.
//       a. HTTP request does NOT listen for someone to land on a route. Express does. We are just making
//          an HTTP request/response when someone does.

// HTTP
// 1. When an HTTP request is made, the client/computer making the request creates a connection with the 
//    server (IE. our localhost:3000) and then disconnects. When the response is ready, the server re-establishes the connection again
//    to deliver the response. (CONNECTIONLESS PROTOCOL)
// 2. HTTP can deliver any sort of data as long as the two computers are able to read it
// 3. HTTP is a stateless protocol. IE. they ONLY know about each other during the connection. If they want
//    to reconnect, they need to provide information to each other again.

// HANDLEBARS & HBS
// 1. HBS intergrates Handlebarsfor Express