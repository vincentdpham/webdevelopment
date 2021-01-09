const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

async function generateJoke(){
    const config = {
        headers: {
            Accept: 'application/json'
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config) // Because fetch is async, need to wait for it to be done first, so use await/async.
    
    const data = await res.json()

    jokeEl.innerHTML = data.joke
}

// function generateJoke(){
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         },
//     }

//     fetch('https://icanhazdadjoke.com', config)
//         .then((res) => res.json())
//         //.then((data) => console.log(data))
//         .then((data) => {
//             jokeEl.innerHTML = data.joke
//         })
// }