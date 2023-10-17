const radius = [3,4,7,8];

const area =(i)=>{
    return Math.PI * i *i ;
}//Callback Functions

const circumference=(radius)=>{
    return 2*Math.PI *radius;
}

const diameter =(radius)=>{
    return 2*radius;
}
const calculate = (radius,logic)=>{
const output =[];
for(let i=0;i<radius.length;i++){

    output.push(logic(radius[i]));
}
return output;
}//Higher Order Functions//map func replication

console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));

console.log(radius.map(diameter))

Array.prototype.calculateMap = (logic)=>{
    const res =[];
    for(let i=0;i<this.length;i++){
    
        res.push(logic(this[i]));
    }
    return res;
    }

    console.log(radius.calculateMap(diameter))