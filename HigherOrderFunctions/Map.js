const arr = [2,3,4,5,8];

const double =(x)=>{
return x*2;
}

let arr1=arr.map(double);
console.log(arr1)

let arr3=arr.map(function Binary(x){
    return x.toString(2);
})

console.log(arr3)