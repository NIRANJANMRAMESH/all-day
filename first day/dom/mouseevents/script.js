const mybox = document.getElementById("mybox");
const mybtn = document.getElementById("mybtn");

// function changecolor(event){
//  mybox.style.backgroundColor="red"
//  mybox.textContent="ouch! 😒"

// }
// mybox.addEventListener("click", function (event) {
//  mybox.style.backgroundColor = "red";
//  mybox.textContent = "ouch! 😒";
// });

mybtn.addEventListener("click", (event) => {
  mybox.style.backgroundColor = "red";
  mybox.textContent = "ouch! 😒";
});

mybtn.addEventListener("mouseover", (event) => {
  mybox.style.backgroundColor = "yellow";
  mybox.textContent = "dont do that! 😒";
});

mybtn.addEventListener("mouseout", (event) => {
  mybox.style.backgroundColor = "aquamarine";
  mybox.textContent = "dont click me 😒";
});
