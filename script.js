let btn = document.getElementById("btn")
let joke = document.getElementById("joke")

btn.addEventListener("click",getJoke)
function getJoke(){
    fetch("https://v2.jokeapi.dev/joke/Any")
    .then((res)=> {
        return res.json()
    })
    .then((data)=>{
        if(!data.joke){
            joke.innerHTML = `
            <p style="font-weight: 800;">${data.setup}</p>
            <p style="font-weight: 400;">${data.delivery}</p>
            `
        }
        else{
            joke.innerText = data.joke
        }
    })
}