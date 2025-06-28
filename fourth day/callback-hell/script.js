// function walkdog(call){
//     setTimeout(()=>{
//         console.log("walked the dog");
//         call();
//     },1500)
// }

// function cleanHouse(call){
//     setTimeout(()=>{
//         console.log("cleaned the dog");
//         call();
//     },2400)
// }
// function taketrash(call){
//     setTimeout(()=>{
//         console.log("taked it");
//         call();
//     },1000)
// }

// walkdog(()=>{
//     cleanHouse(()=>{
//         taketrash(()=>console.log("completed"))
//     })
// })

function walkdog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dog = true;
      if (dog) {
        resolve("walked the dog");
      } else {
        reject("u didnt");
      }
    }, 1500);
  });
}

function cleanHouse() {
  return new Promise((resolve, rejecct) => {
    setTimeout(() => {
      const clean = true;
      if (clean) {
        resolve("cleaned the dog");
      } else {
        rejecct("u dont");
      }
    }, 2400);
  });
}

function taketrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trash = false;
      if (trash) {
        resolve("taked it");
      } else {
        reject("u didnt");
      }
    }, 1000);
  });
}

// using then---------------------------------------------------------------------------------------------------------------------------
// walkdog()
//   .then((value) => {
//     console.log(value);
//     return cleanHouse();
//   })
//   .then((value) => {
//     console.log(value);
//     return taketrash();
//   })
//   .then((value) => console.log(value))
//   .catch((error) => console.error(error));

async function doparams() {
  try {
    const walakdog = await walkdog();
    console.log(walakdog);

    const clwan = await cleanHouse();
    console.log(clwan);

    const trash = await taketrash();
    console.log(trash);
  } catch (error) {
    console.log(error);
  }
}


doparams()