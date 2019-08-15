const path = require('path')

const express = require('express')

const hbs = require('hbs')
// app.get('/help', (req, res) => {
//     res.render('help', {
//         title: 'HELP',
//         author: 'Nick Noel',
//         helpMessage: 'You are screwed'
//     })
// })

// 1. At runtime, Express is listening for someone to land on a specific route, like "https://awda/HELP" 
// 2. Depending on what route a user lands on, in this case /help, app.js will set all key/value pairs as variables for that specific 
//    route/hbs file, as a response.
// 3. Therefore, the arguments inside the hbs file, like {{title}}, will look up the title property value set in app.js by res.render object, 
//    and will recieve the value associated with it
// 4. I am assuming that the variables defined by res.render({}) object are only scoped to the file path specified by app.GET. This is why your 
//    partial is able to grab the value and not mix it up with a title defined in another app.GET. 
// 5. Your partials are only populated with with whatever the current route is being rendered. IE if I am on .../help, the other routes are
//    not being rendered and therefore their key value pairs are not being set or passed to the partials
// 6. Lastly, after all values have been push to their proper places, HBS will parse the HBS into actual HTML to be rendered by the browser

// 1. HBS is a module object that is automatically created for you
// 2. This object compiles. It takes HTML/handlebar-expressions and compiles it into JS functions
// 3. This function takes an object - your data - and returns an HTML string with the object 
//     properties values inserted (interpolated) You end up with a string (HTML) that has values 
//     from the object properties inserted

const app = express()
// https://www.sohamkamani.com/blog/2018/05/30/understanding-how-expressjs-works/
// 1. express is a function as opposed to an object and this statement creates an new express application
// 2. The createApplication() function is the default export which we see as express() function call
//    and the important thing to remember is it's a signtature of `function(req, res, next)`

// 3. function createApplication() {
   
        // var app = function(req, res, next) {
            // app.handle(req, res, next);
        // };

    // ...

        // The `mixin` function assigns all the methods of `proto` as methods of `app`
        // One of the methods which it assigns is the `get` method which is used in the example

        // mixin(app, proto, false);

    // ...

    // return app;

    // }

// 4. logging app returns | function (req, res, next) { app.handle(req, res, next)}

console.log(hbs.handlebars.HandlebarsEnvironment + '!');

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

const publicPath = path.join(__dirname, '../public') //__dirname === src folder (app.js lives there which is what file we are in)
// 1. The path.join() method joins the specified path segments into one path.
//console.log(publicPath);
const viewsPath = path.join(__dirname, '../templates/views')
//app.set('views', path.join(__dirname, '../views')) 
// 1. if you run the node app from inside the src/ folder, it's looking for src/views/ folder. If you run the Node app from the root of 
//    the project, it's looking for views/ which does exist
//    a. Error: Failed to lookup view "index" in views directory "C:\Users\nickn\OneDrive\Desktop\Node-Course\web-server\src\views"
const partialsPath = path.join(__dirname, '../templates/partials')
// 1. Partials are parts of HTML that we can use as pieces

app.set('view engine', 'hbs')
// 1. Setting up our HBS engine. Telling Express to use HBS to parse and compile
// 2. app.SET allows you to set a value for a given express setting and there are a few. 
// 3. To set up our view engine like Express, the value is 'view engine' (IT IS IMPORTANT THIS IS SPELLED EXACTLY CORRECT)
// 4. View Engine is responsible for rendering the view into html form to the browser (https://stackoverflow.com/questions/8308485/what-is-view-engine-what-does-it-actually-do)

app.set('views', viewsPath)
// 1. SETting our viewsPath to Express's views property | views: viewPath

hbs.registerPartials(partialsPath) // loads all partial templates in given filepath and registers them for use
// 1. registering our partials to be compiled by HBS
// The partials path variable contains the path that handlebars module needs (hbs uses handlebars but ties it with Expressa)
// *** nodemon src/app.js -e js,hbs *** // this is how you add other files/extensions that nodemon should watch
//https://www.sitepoint.com/a-beginners-guide-to-handlebars/
console.log(hbs.registerPartials + '!');


app.use(express.static(publicPath))
// 1. Express.static is a function and we are calling it and passing its return value into app.USE
// 2. USE takes the path that we want to use as an argument. Essentially we are passing our HTML file
//    and using its contents

app.get('', (req, res) => {
    res.render('index', {
        title: 'WEATHER APP',
        author: 'by Nick Noel'
    })
})
// 1. When a person hits this route endpoint (typicall a file path) via the browser creating an HTTP GET reuqest, we want our web 
//    server (Express) to respond by rendering our index.hbs
// 2. Express will send (res) the index page we are rendering
// 3. Express listens for someone to land on this route/endpoint
// 4. https://www.ntu.edu.sg/home/ehchua/programming/webprogramming/HTTP_Basics.html

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'ABOUT',
        author: 'My family'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'HELP',
        author: 'Nick Noel',
        helpMessage: 'You are screwed'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Could not find the page you were looking for'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Could not find the page you were looking for'
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