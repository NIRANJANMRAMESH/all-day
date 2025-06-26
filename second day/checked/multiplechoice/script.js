const read = document.getElementById("reading");
const sports = document.getElementById("sports");
const music = document.getElementById("music");

function getHobbies() {
  hobbies = [];
  if (read.checked) {
    hobbies.push("reading");
  }
  if (sports.checked) {
    hobbies.push("sports");
  }
  if (music.checked) {
    hobbies.push("music");
  }

  if (hobbies.length > 0) {
    console.log(`selected hobbies:${hobbies.join(",")}`);
  } else {
    console.log("no hobbies");
  }
}
