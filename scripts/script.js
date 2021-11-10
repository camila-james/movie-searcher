
// IMD API WEBSITE: https://imdb-api.com/api/#Top250Movies-header

// initializing app
const moviesApp = {};

// api info
moviesApp.apiKey = 'k_bsagv4oc';
moviesApp.apiKey = 'k_af7vd4w1';
moviesApp.baseUrl = 'https://imdb-api.com/';
moviesApp.searchMovieEndPoint = 'en/API/SearchMovie/';
moviesApp.keywordEndPoint = 'en/API/SearchKeyword/';

// let a = `${moviesApp.apiUrl}${apiKey}`

// getting info from the API
moviesApp.getMovies = (movie) => { 
    console.log(movie);
    const url = new URL(`${moviesApp.baseUrl}${moviesApp.searchMovieEndPoint}`);
    url.search = new URLSearchParams({
        apiKey: moviesApp.apiKey,
        expression: movie
        // this expression is where the user types in the search
    })

// perfoming the api request
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // moviesApp.displayMovies(data);
            console.log(data)
        })
        // data is the json response 
}


// function to display the info on the page
moviesApp.displayMovies = (data) => {

// <div class="movies">
//    <ul>
//       <h2>title of movie</h2>
//       <img src="" alt="">
//    </ul>
// </div>

    // data.results.forEach( (item) => {
    // // creating elements to display on page
    // // for (let i = 0; i < 10; i++)

    // const movieDiv = document.createElement('div')
    // movieDiv.classList.add("movies")
    
    // const movieTitle = document.createElement('h2')
    // movieTitle.innerText = `${item.title}`

    // const movieImg = document.createElement('img')
    // movieImg.src = `${item.image}`
    // movieImg.alt = `${item.title}`


    // movieDiv.appendChild(movieTitle)
    // movieDiv.appendChild(movieImg)
    // })
}

// attach event listeners to the page
moviesApp.setupEventListeners = () => {
    // document.getElementById("movieGenre").addEventListener("change", (event) => {
    //     const genreChoice = event.target.value

    // })

    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const userInput = document.getElementById('text').value;
        moviesApp.getMovies(userInput);
    })

}

// init/calls functions
moviesApp.init = () => {
    moviesApp.getMovies("string")
    moviesApp.setupEventListeners()
}

// initializing app 
moviesApp.init();
