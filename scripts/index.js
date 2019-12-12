const jockServerAddress = "https://api.chucknorris.io/jokes/random"
function convertToJson(response) {

    return response.json();
}

function doStuffWithData(dataObject) {
    console.log(dataObject.value);

}

function printJock(joke) {
    console.log(joke);

}

function extractJoke(dataObject){

    return dataObject.value
}

function rendersJokeToPage(contatainerJoke) {
    
    //const  div = document.querySelector("div") 
    div.textContent = contatainerJoke;
    document.body.appendChild(div);
}





// Small Exercises

//option 1

//option2
function rendersJokeToPage (jokes){
    const container = document.querySelector("div")
    container.textContent = "";
    const span = document.createElement("span");
    span.textContent = jokes;
    container.appendChild(span)
    
}



// Create a "joke" button


function buttonAndContainer (){
    const button = document.createElement("button");
    button.textContent = "joke"
    document.body.appendChild(button)
    const container = document.createElement("div");
    document.body.appendChild(container)
    button.addEventListener("click", fetchJoke)
}
buttonAndContainer();

const jokeButton = document.querySelector("button");








function fetchJoke(){

    fetch(jockServerAddress)    
        .then(convertToJson)
        .then(extractJoke)
        .then(rendersJokeToPage)
        // .then(containerDisplayJoke)
        
}
// fetchJoke();
// fetchJoke();
// fetchJoke();
// fetchJoke();
// fetchJoke();

// Medium exercises

// Create a `fetchMultipleJokes` function

function rendersJokeToPage (jokes){
        const container = document.querySelector("div")
        const span = document.createElement("span");
        span.textContent = jokes;
        container.appendChild(span)
        
    }

function fetchMultipleJokes(){
    for(let i = 0; i<4; i++){
    
        console.log(fetchJoke());
        }
}
console.log(fetchMultipleJokes());
    


function button (){
    const button = document.createElement("button");
    button.textContent = "joke"
    document.body.appendChild(button)
    button.addEventListener("click", fetchJoke)
}
button();

//const fetchMultipleJokesButton = .map(fetchMultipleJokes)
//const jokeButton = document.querySelector("button");

function creatContainer(){
    const container = document.createElement("div");
    document.body.appendChild(container)
    return container;
}
 const container = creatContainer();

 function buttonMultipleJokes (){
    const button = document.createElement("button");
    button.textContent = "joke"
    document.body.appendChild(button)
    button.addEventListener("click", fetchMultipleJokes)
}
buttonMultipleJokes();




