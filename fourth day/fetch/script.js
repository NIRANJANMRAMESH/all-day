// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(response => {
    
//     if(!response.ok){
//         throw new Error("could not found")
//     }
//     return response.json()


// })
// .then(data=> console.log(data))
// .catch(error=>console.error(error))

async function fetchdata(){
    try{

        const pokename=document.getElementById("poke").value.toLowerCase()
        const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`)
        if(!response.ok){
            throw new Error("not found")
        }

       const data= await response.json()
       const pokmonsp=data.sprites.front_default;
       const imgel=document.getElementById("pokesprit")

       imgel.src=pokmonsp
       imgel.style.display="block"
     
    }

    catch(error){
        console.error(error)
    }
}
