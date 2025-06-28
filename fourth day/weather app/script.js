const weatherform=document.querySelector(".weather")
const cityinput=document.querySelector(".cityinput")
const card =document.getElementById(".card")
const apikey="0070e81b822b2c34fda980cf8f61ae56"

weatherform.addEventListener("submit",async event=>{

    event.preventDefault()
    const city=cityinput.value

    if (city){

        try{
            const weatherdata=await getweatherData(city)
            displayWeatherinfo(weatherdata)

        }
        catch(error){
            console.error(error);
            displayerror(error)
        }

    }

    else{
        displayerror("please enter the cuty")
    }

})


async function getweatherData(city){
   const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`; // optional units=metric

    const response=await fetch(apiurl)
   
    // if(!response.ok){

    // }

}

function displayWeatherinfo(data){

}

function getweatheremoji(weatherid){

}

function displayerror(message){

    const errorDisplay=document.createElement("p")
    errorDisplay.textContent=message;
    errorDisplay.classList.add("errordisplay")
    card.textContent=""
    card.appendChild(errorDisplay)

}