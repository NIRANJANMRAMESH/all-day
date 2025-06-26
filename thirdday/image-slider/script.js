const slide=document.querySelector(".slider img")

let slideindex=0;
let intervellid=null



document.addEventListener("DOMContentLoaded",initialsllide)

function initialsllide(){
    slide[slideindex].classList.add("displayslide")
  intervellid=setInterval(nextslide,5000)
}

function showslide(index){

}


function prevslide(){

}
function nextslide(){
    
}
