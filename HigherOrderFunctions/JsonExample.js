const users= [{firstName:"Rashmi",lastName:"Iyengar",age:28},
{firstName:"Ashwin",lastName:"Venkatesh",age:30},
{firstName:"Ramya",lastName:"Iyengar",age:25},
{firstName:"Sri",lastName:"iyer",age:18},
{firstName:"Ram",lastName:"bhat",age:18},
{firstName:"Ridhi",lastName:"Iyengar",age:8},
]

const output = users.reduce((acc,curr)=>{
if(acc[curr.age]){
console.log(acc[curr.age])
acc[curr.age] =acc[curr.age]+1
}
else
{
    acc[curr.age] =1;
}

return acc
}, {});


console.log(output);
//console.log(acc[curr.age])