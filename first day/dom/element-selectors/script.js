 

 const myhead=document.getElementById("myhead")
 myhead.style.backgroundColor="yellow"
 myhead.style.textAlign="center"

 console.log(myhead)



//  const fruits=document.getElementsByClassName("fruits")

//  fruits[0].style.backgroundColor="yellow"



//  for(let fruit of fruits ){
//     fruit.style.backgroundColor="red"
//  }


 // html collection dont have a for each function

//to use like for first type cast it into array then we can use for each method



// Array.from(fruits).forEach(fruit=>{
//     fruit.style.backgroundColor="yellow"
// }

// )


const h4el=document.getElementsByTagName('h4')
const liel=document.getElementsByTagName("li")

for(let h4elem of h4el){
   h4elem.style.backgroundColor="red"
}

for(let liem of liel){
   liem.style.backgroundColor="lightgreen"
}


// const elem=document.querySelector(".fruits")

// elem.style.backgroundColor="yellow"


const fruits=document.querySelectorAll(".fruits")

fruits[1].style.backgroundColor="skyblue"


