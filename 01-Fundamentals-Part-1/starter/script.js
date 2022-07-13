// let js = "amazing";
// console.log("Milan");
// console.log(40 + 8 + 23 - 10);

// let country, population, continent; 

// country = "Serbia";
// population = 6.9;
// continent = "Europe"

// console.log(country, population, continent)

// true;
// console.log(true);
// value holds data type
// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);
// console.log(typeof javaScriptIsFun)
// console.log(typeof 23)
// console.log(typeof "Jonas")

// javaScriptIsFun = 'YES!'
// console.log(javaScriptIsFun);
// console.log(typeof javaScriptIsFun)

// let year;
// console.log(year)
// console.log(typeof year)

// console.log(typeof null)
//=> object, this is bug in JS

// let x = 10;

// console.log(++x)
// //=> 11
// console.log(x++)
// //=>11
// console.log(x)
// //=>12

let markHeight = 1.69;
let markWeight = 78;
let johnHeight = 1.95;
let johnWeight = 92;

let markBMI = markWeight / markHeight ** 2
let johnBMI = johnWeight / johnHeight ** 2

let markHigherBMI =  markBMI > johnBMI ;
console.log(markBMI, johnBMI, markHigherBMI);

markHeight = 1.88;
markWeight = 95;
johnHeight = 1.76;
johnWeight = 85;

markBMI = markWeight / markHeight ** 2
johnBMI = johnWeight / johnHeight 
markHigherBMI =  markBMI > johnBMI ;
console.log(markBMI, johnBMI, markHigherBMI);

if (markBMI > johnBMI){
    console.log(`Mark's BMI ${markBMI} is higher then Johns BMI ${johnBMI}`)
} else {
    console.log(`John's BMI  ${johnBMI}is higher then Mark's BMI ${markBMI}`)

}


const inputYer = '1991';
console.log(inputYer + 18)
//=> 199118

console.log(Number(inputYer), inputYer)


console.log(Boolean(0))
console.log(Boolean(NaN))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(''))
console.log(Boolean(false))
console.log(Boolean(true))
console.log(Boolean({}))
console.log(Boolean([]))

const favorite = prompt("What is your favorite number")
console.log(typeof favorite)










