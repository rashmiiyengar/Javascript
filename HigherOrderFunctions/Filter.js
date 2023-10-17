const arr = [2,3,4,5,8,9];

const users= [{firstName:"Rashmi",lastName:"Iyengar",age:28},
{firstName:"Ashwin",lastName:"Venkatesh",age:30},
{firstName:"Ramya",lastName:"Iyengar",age:25},
{firstName:"Sri",lastName:"iyer",age:18},
{firstName:"Ram",lastName:"bhat",age:18},
{firstName:"Ridhi",lastName:"Iyengar",age:8},
]

const op= users.filter((i)=>i.age<20).map((n)=>n.firstName)//firstname of all ppl whose age is less than 20
console.log(op)

const names= users.reduce((acc,curr)=>{
if(curr.age<20){
   acc[curr.firstName]= curr.firstName
   console.log(acc)
}
return acc;
},{})
console.log(`${names}, reduce for first name less than 20`)

function isOdd(x){
return x%2;
}

const output = arr.filter(isOdd)
console.log(output);

const output2=arr.filter(i=>i%2==0)
console.log(output2);

