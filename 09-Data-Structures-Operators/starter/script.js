'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const text_area = document.getElementById('text-area');

const btn_submit = document.getElementById('submit');

btn_submit.addEventListener('click', handleSubmit);

// function handleSubmit() {
//   const text_input = text_area.value.toLowerCase().trim();
//   const a = text_input.split('\n').map(e => {
//     let a = e.split('_');
//     a[1] = a[1].replace(e.split('_')[1][0], e.split('_')[1][0].toUpperCase());
//     return a.join("")
//   });
//   a.forEach((el, index)=> console.log(`${el.padEnd(20)} ${':)'.repeat(index + 1)}`))
// }

function handleSubmit(){
 const text = text_area.value

 const textArr = text.split("\n")
 for(const [i, str] of textArr.entries()){

   const [first, second] = str.trim().toLowerCase().split("_")

   const output = `${first}${second.replace(second[0],second[0].toUpperCase())}`

   console.log(`${output.padEnd(20)}${':)'.repeat(i + 1)}`)
  
 }
}
