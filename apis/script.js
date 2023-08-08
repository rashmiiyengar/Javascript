// DOG API
// https://dog.ceo/api/breeds/image/random
//.then Promises

console.log('Async Programming get started')
const getDogDiv = document.getElementById('dogImage')
const dogButton= document.getElementById('dogButton')

//ashynchronus programming 

dogButton.onclick =()=>getNewDog()

const getNewDog=()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(json=> {console.log(json.message),
    getDogDiv.innerHTML=`<img src='${json.message}' heigth=300 width=300/>`
    })
    
}

