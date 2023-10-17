const arr = [2,3,4,5,8,88];

function findSum(arr){
let sum =0;
for(let i=0;i<arr.length;i++){
    sum = sum+arr[i]
}
return sum;
}

function findMax(arr){
    let max =0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max
}

console.log(findSum(arr))
console.log(findMax(arr))

//finding sum using reduce
const output= arr.reduce(function(acc,curr){
    acc= acc+curr;
    return acc;
},0)
console.log(output)


const outputMax = arr.reduce((max,item)=>{
    if(item>max){
        max=item
    }
    return max;
},0)
console.log(outputMax)