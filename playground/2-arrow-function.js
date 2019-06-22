// const square = (x) => x * x

// console.log(square(3))

const event = {
    type: 'Birthday party',
    guest_list: ['Nick', 'Kate', 'Braeden', 'Maxx'],
    // the function below is a 'method definition' syntax
    print_guest_list () {
        this.guest_list.forEach((guest) => {
            console.log(guest); 
        })
    }
}
console.log(event.print_guest_list());

// 1. Arrow functions do not have a built in 'this' keyword/variable, so when you use 'this', in an arrow function
//    it will reference the next inscope 'this' keyword/variable - typically the parent object/function
// 2. Up above, 'this' used in the print_guest_list function, refers to the next available/defined 'this' 
//    keyword/variable, which is the one defined (built in) in the 'event' object we created. The reasoning is, again,
//    because the print_guest_list is an arrow function and does not have its own 'this' keyword/variable and 
//     the 'event' object does, it references the 'events' 'this' keyword