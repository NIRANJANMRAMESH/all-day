let buttons=document.querySelectorAll(".mybutton")


// buttons.forEach(button =>{
//     button.style.backgroundColor="green"
//     button.textContent+="😁"
// })

// buttons.forEach(button =>{
//     button.addEventListener("click",event=>{
//         event.target.style.backgroundColor="red"
//     } )
// })

// buttons.forEach(button =>{
//     button.addEventListener("mouseover",event=>{
//         event.target.style.backgroundColor="hsl(180, 69%, 25%)"
//     } )
// })
// buttons.forEach(button =>{
//     button.addEventListener("mouseout",event=>{
//         event.target.style.backgroundColor="hsl(180, 69%, 38%)"
//     } )
// })

// const newbutton=document.createElement("button")
// newbutton.textContent="button5"
// newbutton.classList="mybutton"
// document.body.appendChild(newbutton)


buttons.forEach(button=>{
    button.addEventListener("click",event =>{
        event.target.remove()
        buttons=document.querySelectorAll("mybutton")
    })
})

