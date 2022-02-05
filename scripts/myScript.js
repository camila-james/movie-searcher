
// initilizing app
const moviesApp = {};

// api info
const baseUrl = 'https://api.themoviedb.org/3/discover/movie';
const apiKey = 'f012df5d63927931e82fe659a8aaa3ac';


// getting info from the API

moviesApp.getMovies = (userChoice) => {
    
    const url = new URL(baseUrl);
    url.search = new URLSearchParams({
        api_key: apiKey,
        with_original_language: 'en',
        with_genres: userChoice,
    });
    
    // perfoming the api request
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonResult){
        // console.log(jsonResult);
        moviesApp.displayMovies(jsonResult.results)
    })
    
}


// attach event listeners to the page
    // if genre is clicked

moviesApp.setupEventListeners = () => {

    document.querySelector('#genre').addEventListener('change', (event) => {

        const userChoice = event.target.value
        moviesApp.getMovies(userChoice); 

    });
    
}


// function to display the info on the page
moviesApp.displayMovies = (moviesArray) => {

    const divElement = document.getElementById('movies');
    divElement.innerHTML = '';
    
    const imageUrl = 'https://image.tmdb.org/t/p/w300';

    moviesArray.forEach( (movie) => {

        const listElement = document.createElement('li');

        const image = document.createElement('img');
        image.src = imageUrl + movie.poster_path;

        const movieHeader = document.createElement('h2');
        movieHeader.innerText = movie.original_title;

        const rating = document.createElement('p');
        rating.innerText = movie.vote_average

        // append the h2 and img to the li
        listElement.append(image);
        listElement.append(movieHeader);
        listElement.append(rating)

        // display on page
        divElement.appendChild(listElement)

    })
}


// init/calls functions
moviesApp.init = () => {
    moviesApp.setupEventListeners()
}

// initializing app 
moviesApp.init();