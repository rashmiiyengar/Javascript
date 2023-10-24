function attachEventListeners(){
    let count =0;
    document.getElementById("clickMe").addEventListener("click",function clickfunc(){
        console.log("button click",count++)
        setTimeout(function(){
            console.log("settimeout called ")
        },2000)
        })
    }

attachEventListeners()

function submitListener(){
    let count =0;
    document.getElementById("submit").addEventListener("click",function c(){
        console.log("Submit")
        alert("Submit button Clicked");
        
        })
    }

    submitListener()



fetch("https://api.facebook.com")
.then(()=>console.log("fetch api logged"));
//garbage collectors and remove event listeners

//event listeners are heavy 

