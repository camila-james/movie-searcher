
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
            moviesApp.displayMovies(data);
        })
        // data is the json response 
}


// function to display the info on the page
moviesApp.displayMovies = (data) => {

    /* <div class="movies">
    <ul>
        <h2>title of movie</h2>
        <img src="" alt="">
    </ul>
    </div> */
    const ulElement = document.getElementById('moviesList');

    // console.log();
    // loop through results array
    // for each element make and li and add h2+img to it
    for (let i = 0; i < data.results.length; i++) {
        const liElement = document.createElement('li');
        // make h2 element
        const movieTitle = document.createElement('h2');
        // add title to h2
        movieTitle.innerText = `${data.results[i].title}`;

        // make img element
        const movieImg = document.createElement('img');
        // add src and alt to img
        movieImg.src = `${data.results[i].image}`;
        movieImg.alt = `${data.results[i].title}`;
        
        // add title and img to li
        liElement.appendChild(movieTitle);
        liElement.appendChild(movieImg);

        // add the li to ul
        ulElement.appendChild(liElement);
    }
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
