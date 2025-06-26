const mybutton=document.getElementById("mybutton")
const myiimg=document.getElementById("myimg")

mybutton.addEventListener("click",event =>{

    if(myiimg.style.visibility==="hidden"){
        myiimg.style.visibility="visible"
        mybutton.textContent="show"
    }
    else{
    myiimg.style.visibility="hidden"
    mybutton.textContent="show"
    }
})