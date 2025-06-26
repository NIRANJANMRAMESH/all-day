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


function voteOrNOte(age){
    if(age>=18){
        console.log("u can vote")
    }
    else{
        console.log("u cant vote")
    }
}


function largest(a,b){
    if(a>b){
        console.log(` ${a}is greater`)
    }
    else if(a<b){
        console.log(` ${b}is greater`)
    }

    else{
        console.log("two are equal")
    }
}


function grade(mark){
    if(mark>=90){
        console.log("grade A")
    }
    else if(mark>=75 && mark<90){
        console.log("grade A")
    }
    else if(mark>=50 && mark,75){
        console.log("grade A")
    }
    else {
        console.log("failed")
    }
}


