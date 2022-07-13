// 'use strict';
// const bookings = [];

// const createBookings = function(
//     flightNum,
//     numPassengers = 1,
//     price = 199
// ){
//     //* ES5, before ES6 and default parameters
//     // flightNum = flightNum || 1;
//     // numPassengers = numPassengers || 1;
//     // price = price || 1

//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }
//     console.log(booking)
//     bookings.push(booking)

// }

// // 

const oneWord = (str)=>{
    return str.replace(/ /g, '')
}

console.log(oneWord("Hello I am Milan!"))
const upperFirstWord = (str)=>{
    const [first, ...others] = str.split(" ");
    return [first.toUpperCase(), ...others].join(" ")
}
console.log(upperFirstWord("Hello I am Milan!"))


const transformer = (str, fn)=> {
    console.log(`Original string: ${str}`)
    console.log(`Transformed string: ${fn(str)}`)
    console.log(`Transformed by: ${fn.name}`)
} 

transformer("JavaScript is the best!!!", upperFirstWord)


// const greet =(greeting)=>{
//     return (name)=>{
//         console.log(`${greeting} ${name}`)
//     } 
// }

const greet = greeting => name => console.log(`${greeting} ${name}`)

const addVAT = function (rate){
    return function(value){ 
        return value + value * rate
    }
}
    


greet("Hey")("Jonas")