// console.log('Hello world');

// fruit= Number(prompt('how much was the fruit'))

// tipPercentage=Number(prompt('tip %?'))/100
// tipAmount=fruit*tipPercentage
// total= fruit+tipAmount
// Math.floor(total)
// console.log('tip Amount ' +tipAmount)
// console.log('total ' +total)

//numbers 1,2,3
//strings 'hello','whats up'
//arrays[]
//objects{}
//boolean true/false

/* Math operation
multiply *
divide /
exponents **
modulo/remainder %
Add + 
Subtract -
*/

/* Math methods
Floor - Rounds Down
Ceil - Rounds Up
random - gives random number Math.random()*10 - gives number between 0 and 10
*/

/* Variables
const - value cannot be changed
let - value can be changed
var value can be changed not recommended to use
*/

// conditionals
// == double equals checks for  equality
//=== triple equals checks for equality and data type x==='4' - false bec of datatype mismatch
// ==  ===  > < <= >= != !==
// let weather = prompt('how is the weather')
// if(weather =='rain'){
//     console.log('rain')
// }else{
//     console.log('sunglasses')
// }

//Functions
//saymyname is a function which has one argument
//logs out yiur name
// function sayMyName(name){
//     console.log(name)
// }

// sayMyName('ras')

// function greeting(name){
//     //greet = 'hi ' +name+ ' nice to meet u'
//     greet =`hi ${name}, nice to meet u`
//     console.log(greet)
// }

// greeting('raashi')

// function sum(a,b){
// return a+b
// }

// num= sum(2,4)
// console.log(num)

// function calculatetip(fruit, tip){

//     const tipPercentage=tip/100
//     const tipAmount = fruit * tipPercentage
//     const total= sum(fruit, tipAmount)
//     return total

// }

// console.log("Tip calucluated is ", calculatetip(88,9))

//ES6 Arrow functions

//arrow function with explicit return
// const sumnum =(a, b)=>{
//     return a+b
// }

//arrow function with implicit return
//for implicit return remove curly braces
// const sumArrows =(a, b) => a+b
// console.log(sumArrows(8,8))

// const add_result = (a, b) => {
//     return a + b
// }
// console.log(add_result(1,2))

// const sub = (a, b) => a - b
// console.log(`subtracted ` +sub(4, 2)+ ` is this`)

// console.log('==========================')
// console.log('Array')

//Arrays

// const groceries = ["ras", "ash", "banana", "grapes"];

// console.log(groceries);
// console.log(groceries[0]);
// console.log(groceries[2]);

// //push adds eleent to end of array
// groceries.push('apple')
// groceries.push('strawberry')
// console.log(groceries)

// // slice gives a portion of the array
// console.log(groceries.slice(0,-1))
// //console.log(groceries.slice(0,2))

// //arrays- length , indexof
// console.log(groceries.indexOf('apple'))
// console.log(groceries.length)

// Objects
//Key value pair
// const person = {
//   name: "rash",
//   age: 9,
// };
// console.log(person.age); // dot notation
// console.log(person["name"]); // accessing through brackets

// //assign object
// person.phone = "67689";
// console.log(person["phone"]);
// console.log(person);
// person["location"] = "banglore";
// console.log(person["location"]);
// console.log(person);

//methods
// const introducer2 = (name, shirt) => {
//   const person1 = {
//     name: name,
//     shirt: shirt,
//     assets: 10000,
//     liability: 5000,
//     //you can store a function inside an object
//     networth: function () {
//       return this.assets - this.liability;
//     },
//   };

//   const intro = `hi my name is ${person1.name} and my shirt is ${person1.shirt}
//   and my net worth is $${person1.networth()}`;

//   return intro;
// };
// console.log(introducer2("raashi", "black"));

//For loop
let fruit_arr = ["mango", "papaya", "watermelon", "banana", "grapes"];

// for (let i=0;i<fruit_arr.length;i++){
//     console.log(fruit_arr[i])

// for (let fruit in fruit_arr ) {
//     console.log("fruit is", fruit_arr[fruit])
// }

// for (const fruit of fruit_arr) {
//   console.log(fruit);
// }

//const numbers1 =[1,2,3,4,5,6]

// const doubleNum = (nums) => {
//   let res = [];
//   for (const num of nums) {
//     res.push(num ** 2);
//   }
//   return res;
// };
// console.log(doubleNum([1, 2, 3, 4]));

// const letterCounter = (phrase) => {
//   let result = 0;

//   for (letter in phrase) {
//     // check if this character is a space ''
//     //console.log(Number(letter)+1)
//     result = letter;
//   }
//   //console.log('Count is ', count)
//   return { result };
// };
// const phrase = "can u go to london";
// console.log(letterCounter(phrase));
// console.log(phrase.length)
// const  arr = ['a', 'b', 'c']
// for (index in arr) {
//     console.log(index)
// }
// for (ind of arr){
//     console.log(ind)
// }

// const sumArr = (num) => {
//   let result = 0;
//   for (const no of num) {
//     console.log(no);
//     result += no
//   }
//   return { result };
// };

// const arr1 = [1, 3, 4, 5];
// console.log(sumArr(arr1));

// const findMax = (nums) => {
//   let res = nums[0];
//   for (const no of nums) {
//     if (no > res) {
//       res = no;
//     }
//   }

//   return { res };
// };

// const array = [1, 2, 3, 4, 6, 9, 88];

//console.log(findMax(array));

///===========================================

//const calculateFreq = (phrase) => {
//letter frequency 'haha'  {'h':2,'a':2}
//console.log(phrase);

//make freq object
//   let freq = {};

//   for (const letter of phrase) {
//     //check if letter exist in frequency
//     //if it exist then increment value by 1 other wise set the value to 1
//     if (letter in freq) {
//       freq[letter] += 1;
//     } else {
//       freq[letter] = 1;
//     }
//     //console.log(letter);
//   }
//   return freq;
// };

//console.log(calculateFreq("hahaha what are u doing"));

//incremental operators
//++ -- +=

// const wordfreq = (phr) => {
//   const words = phr.split(" ");

//   return letterFrequency(words);
// };

//console.log(wordfreq("lol what lol what lol"));

//Higher order function
// map() - loops and returns an array
// filter() - loops and returns an array with matching condition
// reduce() -

const nums = [1, 2, 4, 5, 6, 8];
// let res = nums.map((number) => number * 2);

// console.log(res);

// const mapDouble = (numbers) => {
//   return numbers.map((no) => no * 2);
// };

// console.log(mapDouble(nums));

//FILTER loops and returns an array with matching condition
const filterr = (nums, greaterThan) => {
  let result = [];
  for (const num of nums) {
    if (num > greaterThan) {
      result.push(num);
    }
  }

  return result;
};

//console.log(filterr([3, 4, 5, 6, 7, 8], 5));

//console.log(nums.filter((no) => no > 3 || no < 2));

// const actors1 = [
//   { name: "johnny", netWorth: 20000 },
//   { name: "amber", netWorth: 100 },
//   { name: "matt", netWorth: 17000 },
//   { name: "brad", netWorth: 300 },
//   { name: "leonardo", netWorth: 500 },
// ];

// let det = actors1.filter(
//   (actor) => actor.netWorth > 300 || actor.netWorth <= 100
// );
// //console.log(det);

// playground.innerHTML = `<h2> ${JSON.stringify(
//   det.map((act) => act.name).join(", ")
// )}</h2>`;

//console.log(det.map((act) => act.name).join(", "));

//REDUCE - Sum all of networths
//SUM: Think Reduce
//reduce takes in a function as an argument
//reduce loops and gives u back the accumulator

function sum(a, b) {
  return a + b;
}
function mul(a, b) {
  return a * b;
}
const arr = [6, 9, 4];
//const sumWithReduce = (arr) => [arr.reduce((prev, curr) => prev + curr)];
const sumWithReduce = (arr) => [arr.reduce(mul)];
//console.log(sumWithReduce(arr));

const actors2 = [
  { name: "johnny", netWorth: 20000 },
  { name: "amber", netWorth: 100 },
  { name: "matt", netWorth: 17000 },
  { name: "brad", netWorth: 300 },
  { name: "leonardo", netWorth: 500 },
];

const result1 = actors2.reduce((a, b) => a + b.netWorth, 0);
//console.log(`the total networth of actors is ${result1}`)

//DOM Manipulation
//Document object model

// how to select an item out of an array

const randomSelectionArr = (fruits) => {
  const randonNumber = Math.floor(Math.random() * fruits.length);
  console.log(fruits.length);
  return fruits[randonNumber];
};

let fruits_array = ["mango", "papaya", "watermelon", "banana", "grapes"];

console.log(randomSelectionArr(fruits_array));

// if else if else

const weatherScore = (weather) => {
  let score;
  if (weather == "rainy") {
    score = 1;
    console.log(score);
  } else if (weather == "sunny") {
    score = -1;
  } else {
    score = 0;
  }
  return score;
};

console.log(weatherScore("rainy"));
