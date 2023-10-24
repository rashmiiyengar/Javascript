const jsonData = require('./jsondata.json');

const arrSize= jsonData.courses.api.length;
let sum =0
let actualCourses=[];

const mapobject = jsonData.courses.webAutomation.map(item=>({
courseTitle:item.courseTitle,
price:item.price
}));

console.log(mapobject)
mapobject.forEach(obj => {
    console.log(obj);
  });

jsonData.courses.webAutomation.forEach(obj=>{
    console.log(obj.courseTitle)
  
});

const opt= jsonData.courses.webAutomation.reduce((acc,curr)=>{
if(acc[curr.price]){
  acc[curr.price] = acc[curr.price]+1
  acc[curr.courseTitle] = curr.courseTitle
  
}else{
  acc[curr.price]=1
  acc[curr.courseTitle] = curr.courseTitle
}
return acc
},{})
console.log(opt);
  
// const cypressObject = jsonData.courses.webAutomation.filter(item=>item.courseTitle ==="Cypress");


// for (let i=0;i<arrSize;i++){
//     sum+=  parseInt(jsonData.courses.api[i].price);
    
//     }
//     console.log(cypressObject)
//     jsonData.courses.webAutomation.map(m=> actualCourses.push(m.courseTitle));

//     console.log(actualCourses)