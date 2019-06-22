
const fs = require('fs');
// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json') // read file getting binary data
// const dataJSON = dataBuffer.toString() // convert data into a standard string in JavaScript
// console.log(dataJSON, 'I am a string')

// const parsedJSON = JSON.parse(dataJSON) // parsed converted data back into a JavaScript object
// console.log(parsedJSON, 'I am an object');


// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// const parsedJSON = JSON.parse(bookJSON)
// console.log(parsedJSON)

const dataBuffer = fs.readFileSync('1-JSON.json') // read file. Data is in number codes 'buffered'
const dataJSON = JSON.parse(dataBuffer) // buffered data is turned to a string AND then to a JavaScript object. No need to use the .toString method
dataJSON.age = 29; // changing the properties 'data' inside the object
dataJSON.name = 'Nick'; // changing the properties 'data' inside the object
const stringed = JSON.stringify(dataJSON) // changing the JS object back into a string so it can be stored as JSON which is made up of all strings
fs.writeFileSync('1-json.json', stringed) // here we take the string and write it to the 1-json.json file

// this just checks to see if we were successful. You can just go to the json file and look for the changes but this was more fun
grabJsonFile = fs.readFileSync('1-json.json')
parsedNewInfo = JSON.parse(grabJsonFile)
if(parsedNewInfo.name === "Nick"){
    console.log("Success")
}else{
    console.log("Error");
    
}

// Unless you have a custom object with custom .toString method returning JSON.stringify of that object, there is no obj that would 
// give obj.toString() == JSON.stringify(obj).

// When obj is an array like [1,2,3] then .toString() gives:

// "1,2,3"
// And JSON.stringify:

// "[1,2,3]"