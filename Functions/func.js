//Function Statement also known as functuion declaration
a();
function a(){
    console.log("hello a");
} //Hoisting is possible in Function statement

//Function Expression

const b= function(){
    console.log("b called");
} 
b();
// function acts like a value u can assign a func to a variable
//Hoisting is not possible with Function expresssion and get Reference error


//Function Declaration
function aa(){
    console.log("hello aa");
} //Hoisting is possible in Function statement


// Anonymous Function
// function (){

// }//used in place where functions are used as values to a variables


//Named function expression

const namedFuncvar= function namedFunc(){
    console.log("namedFunc called");
} 
namedFuncvar(); //
//namedFunc() //gives reference error 


//Diff between parameters and arguments
function abc(param1,param2){
    console.log("parameters and arguments " +param1); 
} //param1 and param 2 are local to the function

abc(1,2) //1,2 are passed as arguments

//First Class Functions
function firstClassFunction(param1){
    console.log("firstClassFunction " +param1); 
    return function v(){

    }
} //param1 and param 2 are local to the function

firstClassFunction(function(){

});//passing anonymus function as an argument

firstClassFunction(aa);//passing another function as arfument
console.log(firstClassFunction(aa))
//passing a function as an argument to another function
//also called as first class citizens

//Arrow Function
//es6

// CALLBACK FUNCTIONS
function xx(yy){
//function yy is called back sometime late 
console.log(yy)
console.log("xx called ")
yy()
}

xx(function yy(){
    console.log("yy called ")

}) //passing yy function as argument yy() is called as callback function

setTimeout(function(){
    console.log("settimeout called ")
},2000)