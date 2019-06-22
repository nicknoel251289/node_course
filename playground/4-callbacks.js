// const add = (num1, num2, callbacks) => {

//     setTimeout(() => {
//         const sum = num1 + num2
//         callbacks(sum)
//     }, 2000)
      
// }

// const added = (a) => {
//     console.log(a);
// }

// add(2, 30, added)

// _____________________________//
console.log('ZERO');

debugger

const minus = (num1, num2, callback) => {

    const result = num1 - num2
    callback(result)

}

minus(10, 5, (results) => {

    console.log(results);  
     
})