///// Object property shorthand /////
// This allows us to add values onto an onbject with a shoprthand syntax under CERTAIN conditions

const name = 'nick'
const userAge = 29

// creating a user object
// 1. when we are setting up a porperty whose value comes from a variable with 
//    the same name, like with name and NOT userAge
const user = {
    name, //shorthand syntaxx
    age: userAge,
    location: 'Windsor'
}

console.log(user);

///// OBJECT DESTRUCTURING /////
// 1. Object destructuring is useful when you have an object and you are trying to access properties 
//    from it. The goal of destructuring is to extract object properties and their values into
//    individual variables so instead of a product price property, I could have a price variable with
//    the value of three or instead of a label property on product, I could get access to a label 
//    variable with the value of red notebook.
// 2. This is really usefull when you are working with complex object that have a lot of properties
//    you are constantly referencing. It is good to have standalone variables that you can easily use.
// 3. We can achieve the same behavior without a new syntax by simply creating individual variables 
//    like a concert lable whose value comes from product.label(1) or stock price from product.stock(2)

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined //not on sale
}

// 4. We can use these now without having to always reference the product object
//      const label = product.label // (1)
//      const stock = product.stock // (2)

// 5. The problem is we write a lot of code for each one we want to extract. So we end up with multiple 
//    lines with multiple values. With destructuring we get an improved syntax to reduce lines of code
//    and still create individual variables

const {label, stock:productStock, rating = 5} = product

// 6. So with the destructuring syntax, it makes it really easy to extract properties off of an object
//    creating individual variables that store those property values. So in the case above we are pulling
//    the label property OFF of product, we are getting its value (Red Notebook), and we are creating a 
//    new label variable. We are doing the same thing with stock. 
// 7. You can also include properties that don't exist on the object, like rating that we used above.
// 8. Another thing we can do is rename the variable we end up creating. If we still want the value from
//    stock, but want to call it sopmething different, we cam use the syntax above.
// 9. Lastly, in the case of rating, if no property is defined in product, it will use the default value
//    we gave it, which is 5

const transaction = (type, myProduct) => {

}

transaction('order', product)