const jokeEl = document.querySelector(".theJoke");
const getJoke= document.querySelector(".jokeBtn");



getJoke.addEventListener('click' , function GetJoke(){

        const config = {
            headers: {
                Accept: "application/json"
            },
        }

        fetch ('https://icanhazdadjoke.com/', config)
        .then((res) => res.json())
        .then((data) => {
            jokeEl.innerHTML = data.joke
        } )

}) 