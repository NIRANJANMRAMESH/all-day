function maxmath() {
  const numbers = [3, 7, 2, 9, 5];
  const max = Math.max(...numbers);

  console.log(max);
}
function circle() {
  const circle = {
    radius: 5,
    area: function () {
      return Math.PI * this.radius * this.radius;
    },
  };

  console.log(circle.area());
}

//round a number

// console.log(Math.round(4.7))
// console.log(Math.round(4.3))

//floor and ceil

// console.log(Math.floor(5.9))
// console.log(Math.ceil(5.1))

// let price=49.99

// console.log(Math.floor(price))

// let students =17
// console.log(Math.floor(students/4))

// let currentHieght=17.3
// console.log(Math.floor(currentHieght/3))

// let totalpages=47
// console.log(Math.ceil(totalpages/5))

// //smallest of three
// function smallst() {
//     let array=[3,1,5]
//     let smallestNum=Math.min(...array)
//     console.log(smallestNum)

// smallest number withot Math.min

function smallest() {
  let array = [3, 1, 5];
  let smallest = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
    }
  }
  console.log(smallest);
}
smallest();

function diceroll() {
  let dice = Math.floor(Math.random() * 6 + 1);
  console.log(dice);
}
diceroll();

//rondom number withhin a range

function raandomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

setInterval(console.log(raandomRange(5, 55)), 1000);

// evenn or odd checker

function evenorodd(number) {
  if (!isNaN(number)) {
    if (number % 2 === 0) {
      console.log("the numver is even");
    } else {
      console.log("the number is odd");
    }
  } else {
    console.log("enter a nuber");
  }
}

function isleap(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("its a leap year");
  } else {
    console.log("not leapyear");
  }
}
