// 'use strict';
// //* in OOP constructon functions always starts with capial letter
// //* we can use function declaration or function expresion
// //!we can not use arrow function as function constructor since it does not have it own 'this' keyword
// //* here we use function expresion
// //! difference between constructor fn and regular fn is that constructor function is benig called with 'new' in front (line12)

//* OOP in JavaScript has three way of implementation
// ! 1. Constructor Function    (line 14.)
// ! 2. ES6 Classes             (line 125.) => they are not real classes but synthetic sugar over constructor function
// ! 3. Object.create() function (line 189.)
//! **********************************************************************************************************

//* Constructor Function
// const Person = function (firstName, birthYear) {
//   Instance properties
//   (this.firstName = firstName), (this.birthYear = birthYear);

//   //!never do this
//   //!now every instance will carry this method which is bad for performance
//   //!solution starts on line 35.

//   this.calAge = function() {
//       console.log(2037 - this.birthYear)
//   }
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

//!1. mew {} is created
//!2. function is called, this = {}
//!3. {} linked to prototype
//!4. function automatically return {}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);
// console.log(jack, matilda);

// console.log(jack instanceof Person);

const Person = function(firstName, lastName, birthYear){
  this.firstName = firstName
  this.lastName = lastName
  this.birthYear = birthYear

  // this.age = function(){
  //   this.age = new Date().getFullYear() - this.birthYear
  // }
}

Person.prototype.getAge = function(){
    this.age = new Date().getFullYear() - this.birthYear
  }

const ema = new Person("Ema", "Emica", 2019)
// ema.getAge()
console.log(ema)

//! **********************************************************************************************************
// //*Prototypes

// console.log(Person.prototype);
// //*this way there is only one copy of this function (calAge)
// //*every instance of Person constructor can reuse this function
// //* 'this' is always set to object that is calling calcAge
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// jonas.calcAge()
// console.log(jonas)
// //* this will give us prototype of jonas and not prototype property
// //! prototype of constructor instance is prototype property of constructor function
// console.log(jonas.__proto__)
// console.log(jonas.__proto__ === Person.prototype)
// //! Person.prototype is NOT prototype of Person
// //! Person.prototype is going to be used as prototype of all instances of constructor function
// //!line 48. is confiramtion of 49. and 50.

// console.log(Person.prototype.isPrototypeOf(jonas))
//=> true
// console.log(Person.prototype.isPrototypeOf(matilda))
//=> true
// console.log(Person.prototype.isPrototypeOf(Person))
//=> false

// //* Think of .prototype property as .propertyOfLinkedObjects

// Person.prototype.species = "Homo Sapiens"
// console.log(jonas.species)
// console.log(jonas.hasOwnProperty("firstName"))
// //=> true
// console.log(jonas.hasOwnProperty("species"))
// //=> false
// //!jonas does NOT have property of "species" but jonas has access because of it's prototype

//  console.log(jonas.__proto__.__proto__.__proto__)

//  console.log(Person.prototype.constructor)
//  console.dir(Person.prototype.constructor.prototype === Person.prototype)
//  //=> true

//  let arr = [1,1,2,2,3,4]
//  let arr1 = new Array(1,2,3,4)
//  console.log(arr1.__proto__ === Array.prototype)
//  console.log(arr1.__proto__.__proto__ === Object.prototype)
//  //=> true

//  console.log(arr.__proto__)

//  Array.prototype.unique = function(){
//      return [...new Set(this)]
//  }
//  console.log(arr.unique())
//  const h1 = document.querySelector("h1")

//! **********************************************************************************************************
//  //*Coding challenge

//  const Car = function(make, speed){
//    this.make = make,
//    this.speed = speed
//  }

//  Car.prototype.accelerate = function(){
//    this.speed += 10;
//    console.log(this.speed)
//  }
//  Car.prototype.brake = function(){
//   this.speed -= 5;
//   console.log(this.speed)
// }

// const honda = new Car("honda", 45)
// console.log(honda, honda.__proto__)
// honda.accelerate()
// honda.brake()

// const subaru = new Car("subaru", 55)
// console.log(subaru)
// subaru.accelerate()
// console.log(subaru)

//! **********************************************************************************************************
//* 2. ESClasses
//* class expression

// const PersonCl = class {}

//* class declaration
// class PersonCl {
//   constructor(firstName, birthYear){
//     this.firstName = firstName;
//     this.birthYear = birthYear
//   }
// // methods will be added to the .prototype property
//   calcAge(){
//       console.log(2037 - this.birthYear)
//   }
//   //!NO commas between methods in classes
// }

// const jessica = new PersonCl('Jessica', 1995)
// console.log(jessica)

// //add methods to class prototype manualy
// PersonCl.prototype.greet = function(){
//     console.log(`Hey ${this.firstName}`)
// }
// jessica.greet()

//! 1.calss are NOT hoisted
//! 2. Classes are first-class citizens (they can be passed into functions, and they can be return from function)
//!classes are just special objects
//! 3. Classes are executed in strict mode

//! **********************************************************************************************************
// * setteres and getters

class Account  {
  constructor(name, payments){
    this.name = name,
    this.payments = payments
  }

  get latest(){
    // const [lastEl] = this.payments.pop()
    return this.payments.splice(-1).pop()
  }
  set latest(m){
    this.payments.push(m)
  }
  static hey(){
    console.log("Hello")
  }
}

// const jonas = new Account("Jonas", [1,2,3,4,5])
// console.log(jonas.latest)
// console.log(jonas.latest)
// console.log(jonas.payments)
// jonas.latest = 50
// console.log(jonas.latest)

// Account.hey()

//! **********************************************************************************************************
//* 3. Object.create()
// const PersonProto = {
//   calcAge(){
//     console.log(2037 - this.birthYear)
//   },

//   init(firstName, birthYear){
//     this.firstName = firstName
//     this.birthYear = birthYear
//   }
// }

// const steven = Object.create(PersonProto)
// console.log(steven)
// steven.name = "Steven"
// steven.birthYear = "2002"
// steven.calcAge()
// console.log(steven.__proto__ == PersonProto)

// const sarah = Object.create(PersonProto)
// sarah.init("Sarah", 1979)
// sarah.calcAge()

//! **********************************************************************************************************
//* coding challenge

// class Car{
//   constructor(make, speed){
//     this.make = make
//     this.speed = speed
//   }

//   accelerate(){
//     return this.speed += 10
//   }

//   brake(){
//     return this.speed -= 5
//   }

//   get speedUS(){
//     return this.speed / 1.6
//   }
//   set speedUS(speed){
//     this.speed = speed * 1.6
//   }
// }
// const ford = new Car("ford", 120)
// ford.speedUS = 50
// console.log(ford)
// const honda = new Car("honda", 55)
// console.log(honda)
// console.log(honda.speedUS)
// honda.speedUS = 40
// console.log(honda.speedUS)
// honda.accelerate()
// console.log(honda)
// console.log(honda.speedUS)

//! **********************************************************************************************************
//* Inheretence between "classes" -Constructor Function
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   this.course = course;
// };
//! Linking prototype
// Student.prototype = Object.create(Person.prototype)

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName}, and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);
// mike.introduce()
// mike.calcAge()

// console.log(mike.__proto__)
// Student.prototype.constructor = Student
// console.dir(Student.prototype.constructor)

// //proof of prototype chain is set up
// console.log(mike instanceof Student)
// console.log(mike instanceof Person)
// console.log(mike instanceof Object)

//! **********************************************************************************************************
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going ${this.speed}.`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going ${this.speed}.`);
// };
// const EV = function (make, speed, charge) {
//   //  this.make = make
//   //  this.speed = speed
//   Car.call(this, make, speed);
//   this.charge = charge;
// };
// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBatery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// EV.prototype.accelerate = function () {
//   this.charge--;
//   this.speed += 20;
//   console.log(
//     `${this.make} is going at ${this.speed}km/h, with a charge of ${this.charge}%`
//   );
// };

// const tesla = new EV('Tesla', 120, 23);
// console.log(tesla);
// tesla.accelerate();
// tesla.accelerate();

// tesla.accelerate();

// console.log(tesla);
// tesla.chargeBatery(55);
// console.log(tesla);
//! **********************************************************************************************************
//* Inheretence between "classes" -ES6 Classes

// class PersonCl {
//   constructor(fullName, birthYear){
//     this.fullName = fullName
//     this.birthYear = birthYear
//   }

//   calsAge(){
//     console.log(2037 - this.birthYear)
//   }

//   greet(){
//     console.log(`Hey ${this.firstName}`)
//   }

//   get age(){
//     return 2037 - this.birthYear
//   }
//   set fullName(name){
//     if(name.includes(" ")) this._fullName = name
//     else alert(`${name} is not a full name!`)
//   }
//   get fullName(){
//     return this._fullName
//   }
 
//   static hey(){
//     console.log('hey there!!!')
//   }
// }

//!classes are just layer of abstraction  constructor function
//! in case our child does not have any new properties
// class StudentCl extends PersonCl{
// }
//  const martha = new StudentCl("Martha Jones", 2012)
//  console.log(martha)
//! when our child class has more properties than inherited from parent class
// class StudentCl extends PersonCl{
//   constructor(fullName, birthYear, course){
//     super(fullName, birthYear)
//     this.course = course
//   }

//   introduce(){
//     console.log(`My name is ${this.fullName} and I study ${this.course}`)
//   }

//   calsAge(){
//     console.log(`I am ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 10}`)
//   }
// }

// const martha = new StudentCl("Martha Jones", 2012, "CS")
// martha.calsAge()
// martha.introduce()

//! **********************************************************************************************************
//*Inheritance between "classes"- Object.create()

// const PersonProto = {
//   calsAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear){
//     this.firstName = firstName
//     this.birthYear = birthYear
//   }
// };
// const StudentProto = Object.create(PersonProto)

// StudentProto.init = function(firstName, birthYear, course){
//   PersonProto.init.call (this, firstName, birthYear) 
//     this.course = course
//   }

//   StudentProto.introduce = function(){
//     console.log(`My name is ${this.firstName} and I study ${this.course}`)
//   }


// const jay = Object.create(StudentProto)
// jay.init('Jay', 2010, "CS")
// console.log(jay)
// jay.introduce()
//! **********************************************************************************************************
//* Encapsulation: Protected Property and Methods
// class Account {
//   constructor(owner, currency, pin){
//     this.owner = owner
//     this.currency = currency
//     this._pin = pin
//     //protected property
//     this._movements = []
//     this.locale = navigator.language
//   }

//   getMovemments(){
//     return this._movements
//   }

//   deposit(val){
//     this._movements.push(val)
//   }

//   withdraw(val){
//     this.deposit(-val)
//   }
//   _approveLoad(){
//     return true
//   }

//   requestloan(val){
//     if (this._approveLoad()){
//       this.deposit(val)
//       console.log("Load approved")
//     }
//   }
//   total(){
//     console.log(this._movements.reduce((acc, curr) => acc+=curr))
//   }
// }

// const acc1 = new Account( "Jonas", 'EUR', 1111)
// console.log(acc1)

// acc1.requestloan(1000)
// console.log(acc1)

//! **********************************************************************************************************
//*Coding challenge

class CarCL {
  constructor(make, speed){
    this.speed = speed;
    this.make = make
  }

  accelerate(){
    this.speed +=10
    console.log(`${this.make} is good at ${this.speed} km/h`)
  }
  brake(){
    this.speed -= 5;
    console.log(`${this.make} is good at ${this.speed} km/h`)
  }
  get speedUS(){
    return this.speed /1.6
  }

  set speedUS(speed){
    this.speed = speed * 1.6
  }
}

class EVCL extends CarCL{
  #charge;
  constructor(make, speed, charge){
    super(make, speed)
    this.#charge = charge
  }
  chargeBatery(val){
    this.#charge = val
    return this
  }
  accelerate(){
    this.speed += 20
    this.#charge -= 1
    console.log(`${this.make} is going aat ${this.speed} km/h with a charge ${this.#charge}`)
    return this
  }
  brake(){
    this.speed -=10
    return this
  }
}

const rivian = new EVCL("Rivian", 120, 23)
console.log(rivian)
rivian.accelerate().accelerate()
console.log(rivian)

