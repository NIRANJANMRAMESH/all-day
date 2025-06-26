


try{

const dividend=Number(window.prompt("enter a didvidend"))
const dividor=Number(window.prompt("enter the divisor"))

if (dividor == 0){
    throw new Error("u cant divide by  0rr")
}

if( isNaN(dividend)|| isNaN(dividor)){
    throw new Error("cant be not a number")
}

const result=dividend/dividor;
console.log(result)
}

catch(error){
    console.error(error)
}


console.log("u reached the end ")