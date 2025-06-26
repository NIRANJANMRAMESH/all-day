const ulel=document.querySelectorAll("ul")

// ulel.forEach(ullem => {
//     const firstChild=ullem.fi;
//     firstChild.style.backgroundColor="yellow"
    
// });

// ulel.forEach(ullem => {
//     const firstChild=ullem.lastElementChild;
//     firstChild.style.backgroundColor="yellow"
    
// });


// const element=document.getElementById("apple")


// element.nextElementSibling.style.backgroundColor="yellow"



// const element=document.getElementById("orange")


// element.previousElementSibling.style.backgroundColor="yellow"



// const element=document.getElementById("apple")
// element.parentElement.style.backgroundColor="yellow"


const element=document.getElementById("fruits")
const child=element.children

Array.from(child).forEach(childs =>{
    childs.style.backgroundColor="yellow"
})