const slides=document.querySelectorAll(".slides img")

let slideindex=0;
let intervelId=null;


// initialslide()
document.addEventListener("DOMContentLoaded",initialslide())

function initialslide(){

    if (slides.length>0) {
        slides[slideindex].classList.add("displayslide")
        intervelId=setInterval(nextslide,5000)
    }

}


function showslide(index){

    if(index >=slides.length){
        slideindex=0
    }
    else if(index<0){
        slideindex=slides.length-1
    }
    
    slides.forEach(slide=>{
        slide.classList.remove("displayslide")
    })

    slides[slideindex].classList.add("displayslide")

}


function prevslide(){
    clearInterval(intervelId)
    slideindex--
    showslide(slideindex)
}




function nextslide(){
    clearInterval(intervelId)
    slideindex++
    showslide(slideindex)

}