const jsonData = require('./jsondata.json');

const arrSize= jsonData.courses.api.length;
let sum =0
let actualCourses=[];

const mapobject = jsonData.courses.webAutomation.map(item=>({
courseTitle:item.courseTitle,
price:item.price
}));


mapobject.forEach(obj => {
    console.log(obj);
  });

jsonData.courses.webAutomation.forEach(obj=>{
    console.log(obj.courseTitle)
  
});

  
// const cypressObject = jsonData.courses.webAutomation.filter(item=>item.courseTitle ==="Cypress");


// for (let i=0;i<arrSize;i++){
//     sum+=  parseInt(jsonData.courses.api[i].price);
    
//     }
//     console.log(cypressObject)
//     jsonData.courses.webAutomation.map(m=> actualCourses.push(m.courseTitle));

//     console.log(actualCourses)