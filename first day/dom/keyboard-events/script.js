const mybox = document.getElementById("mybox");

document.addEventListener("keydown", (event) => {
  mybox.textContent = "😁";
  mybox.style.backgroundColor = "red";
});

document.addEventListener("keyup", (event) => {
  mybox.textContent = "😊";
  mybox.style.backgroundColor = "rgb(130, 197, 197)";
});

let x = 0;
let y = 0;
const movement = 100;

document.addEventListener("keydown", event => {

  if (event.key.startsWith("Arrow")) {

    event.preventDefault();

    switch (event.key) {
      case "ArrowUp":
        y -= movement;
        break;

      case "ArrowDown":
        y += movement;
        break;

         case "ArrowLeft":
        x -= movement;
        break;

         case "ArrowRight":
        x += movement;
        break;
    }

    mybox.style.top=`${y}px`
    mybox.style.left=`${x}px`
  }
});
