let btn = document.querySelectorAll('.btn');
let joke = document.getElementById('joke');

const generate = async () => {
    let url = await fetch("https://v2.jokeapi.dev/joke/Programming?type=single");
    let data = await url.json();
    document.getElementById('joke').innerHTML = data.joke;
}

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', generate);  // Use btn[i] instead of btn
    console.log(btn[i]);
}

generate();  // Initial joke generation
