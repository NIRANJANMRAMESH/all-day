function swapvar() {
  let a = 5;
  let b = 10;
  [a, b] = [b, a];
  console.log(b);
}


function areaofrec() {
  let length = 10;
  let width = 5;

  area = 10 * 5;

  console.log(area);
}


function sum0f3() {
  (num1 = 12), (num2 = 8), (num3 = 20);
  sum = num1 + num2 + num3;
  console.log(sum);
}


function typeofdata() {
    let data="123"
    console.log(typeof(data))
}


//intermediate


function test(){
    var x = 10;
    if (true){
        let x=20;
        console.log(x)
    }
    console.log(x)
}

function stringconv(){
    let strnum ="15";
    let realnum=10;
    strnum=Number(strnum)
    let sum=strnum+realnum
    console.log(sum)
}


const person={
    name:"alice",
    age:25
}

person.age=30


function arrayass() {
    
    let array=[1,2,3]
    
    a=array[0]
    b=array[1]
}

function tempalteLiterals() {
    
    let name="Niranjan"
    let age=24
    
    console.log(`hello,my name is ${name} and i am ${age} year old`)
}


let value;

if(value===undefined){
    console.log("value is undefined")
}
else{
    console.log("value is defined")
}

let a = 100;
function shadow() {
  let a = 50;
  console.log(a); // What will this print?
}
shadow();
console.log(a); // And this?



for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 1000);
}