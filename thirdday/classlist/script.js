// const mybutton=document.getElementById("mybutton")
// const h1=document.getElementById("h1")

// h1.classList.add("enabled")
// mybutton.classList.add("enabled")
// // mybutton.classList.remove("enabled")

// // mybutton.addEventListener("mouseover",event=>{
// //     event.target.classList.toggle("hover")
// // })

// // mybutton.addEventListener("mouseout",event=>{
// //     event.target.classList.toggle("hover")
// // })

// h1.addEventListener("click",event=>{

//     if(event.target.classList.contains("disabled")){
//         event.target.textContent+="😒"
//     }
//     else{
//      event.target.classList.replace("enabled","disabled")
//     }
   
// })



let button = document.querySelectorAll(".mybutton")

button.forEach(btn => {
    btn.classList.add("enabled")
})


button.forEach(btn=>{
    btn.addEventListener("mouseover",event=>{
        event.target.classList.toggle("hover")
    })
})
button.forEach(btn=>{
    btn.addEventListener("mouseout",event=>{
        event.target.classList.toggle("hover")
    })
})

button.forEach(btn=>{
    btn.addEventListener("click",event=>{

        if(event.target.classList.contains("disabled")){
            event.target.textContent+="😍"
        }
        else{
            event.target.classList.replace("enabled","disabled")
        }
        
    })
})