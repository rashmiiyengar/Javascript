// function a(){

// console.log(b);
// child()
// function child(){
//     console.log(b); 
// } //vhild() is in the lexical environment of a(), a( ) is in the lexical env of Global
// }
// var b=10;

// a();
// var b=11;
// function a(){
//     var a=1;
//     let b=2
//     const c=9
//     console.log(b)
// //block is also knwon as compound statement
// }
// console.log(b)


// let k=1
// {
//     const k=2
//     {
//         const k=9
//         console.log(k)
//     }
    
// }
// console.log(k); 
// function parent(){
//     var b=100;

//     function x(){
//         var a=7;
//         function y(){
//             console.log(a,b)
//         }
//         y();
//     }
//     x();
// }

// parent();
 ///closures ----------------'

 function x(){
    for( let i=1;i<=5;i++){
        setTimeout(() => {
            console.log(i);
        }, i* 1000);
    }
 }
 x();

 function xx(){
    for(var i=1;i<=5;i++){
        function close(x){
            setTimeout(() => {
                console.log(x);
               
            }, x* 1000);
        }
       close(i);
    }
 }
 xx();
 
 function outerouter(b){
    var out=1
    function outer(){
        let o=10;
        function inner(){
            console.log(o,b,out);
        }
        return inner;
     }
    return outer()
 }

 outerouter("hello" )(); // closure heirarchy explained


 function dataHide(){
    var counter =0
    function inccount(){
       counter++;
       console.log(counter)
    }
    return inccount
    //console.log(counter)
 }
 const dd= dataHide()
 dd()
 dd() //data hiding can be  achieved with closures // counter var cannot be accessed outside the function
 
 const dd2= dataHide()

 dd2()


 // below function represents more scalable code when there needs another function to be added
 //below function uses constructor 
 //you can create closure function within a constructor also

 function dataHide1(){
    var counter =0
    this.incrementcount=function(){
       counter++;
       console.log(counter)
    }
    this.decrementcount=function(){
        counter--;
        console.log(counter)
     }
    //console.log(counter)
 }

const result = new dataHide1()
result.decrementcount();
result.incrementcount();

//disadvantages of closures
//overconsumption of memory because every time a closure is formed it consumes a lot of memory
//because the variables are not garbage collected
//garbage collector example

function a()
{
    var p=10,y=21
    return function b(){
    console.log(p)
    }
  
}

const z= a()
z()