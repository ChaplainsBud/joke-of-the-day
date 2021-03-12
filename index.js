
// https://api.chucknorris.io/jokes/random

// .value

fetch('https://api.chucknorris.io/jokes/random')
    .then(data => data.json())
    // .then(data => console.log(data.value))
    .then(data => document.querySelector('.container').innerHTML = `${data.value}`)

let btn = document.querySelector('BUTTON');
btn.addEventListener('click', (e) => {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(data => data.json())
    // .then(data => console.log(data.value))
    .then(data => document.querySelector('.container').innerHTML = `${data.value}`)
});