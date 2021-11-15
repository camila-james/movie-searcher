
// IMD API WEBSITE: https://imdb-api.com/api/#Top250Movies-header

// initializing app
const moviesApp = {};

// api info
// moviesApp.apiKey = 'k_bsagv4oc';
moviesApp.apiKey = 'k_af7vd4w1';
moviesApp.baseUrl = 'https://imdb-api.com/';
moviesApp.searchMovieEndPoint = 'en/API/SearchMovie/';
moviesApp.keywordEndPoint = 'en/API/SearchAll/';

// let a = `${moviesApp.apiUrl}${apiKey}`

// getting info from the API
moviesApp.getMovies = (movie) => { 
    const url = new URL(`${moviesApp.baseUrl}${moviesApp.searchMovieEndPoint}`);
    url.search = new URLSearchParams({
        apiKey: moviesApp.apiKey,
        expression: movie
        // this expression is where the user types in the search
    });

// perfoming the api request
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            moviesApp.displayMovies(data);
        });
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
    const divElement = document.getElementById('movies');
    divElement.innerHTML = '';
    // console.log();
    // loop through results array
    // for each element make and li and add h2+img to it
    for (let i = 0; i < data.results.length; i++) {
        // make h2 element
        const movieTitle = document.createElement('h2');
        // add title to h2
        movieTitle.innerText = `${data.results[i].title}`;

        // make img element
        const movieImg = document.createElement('img');
        // add src and alt to img
        movieImg.src = `${data.results[i].image}`;
        movieImg.alt = `${data.results[i].title}`;
        

        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        // add title and img to div
        movieElement.appendChild(movieTitle);
        movieElement.appendChild(movieImg);

        // add the content div to container div
        document.getElementById('movies').appendChild(movieElement);
    }
}

// attach event listeners to the page
moviesApp.setupEventListeners = () => {
    // dropdown toggle
    document.addEventListener('click', e => {
        const isDropdownButton = e.target.matches("[data-dropdown-button]")
        if (!isDropdownButton && e.target.closest('[data-dropdown') != null) return

        let currentDropdown

        if (isDropdownButton) {
            currentDropdown = e.target.closest('[data-dropdown');
            currentDropdown.classList.toggle('active');
        }

        // closes dropdown that is open
        document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
            if (dropdown === currentDropdown) return
            dropdown.classList.remove('active');
        });
    });

    function getGenreMovies(genre) { 
        const url = new URL(`${moviesApp.baseUrl}${moviesApp.keywordEndPoint}`);
        url.search = new URLSearchParams({
            apiKey: moviesApp.apiKey,
            expression: genre
            // this expression is where the user types in the search
        })
    
        // perfoming the api request
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                moviesApp.displayMovies(data);
            })
            // data is the json response 
    }

    // if genre is clicked
    const genres = document.getElementsByClassName('genre')
    const genreArray = [];
    // const dropdownLinks = dropdownMenu[0].
    for (let i = 0; i < genres.length; i++) {
        genreArray.push(genres[i]);
    }
    console.log(genreArray)
    genreArray.forEach((genre) => {
        genre.addEventListener('click',e => {
            e.preventDefault();
            getGenreMovies(genre.textContent);
        });
    })



    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const userInput = document.getElementById('text').value;
        moviesApp.getMovies(userInput);
    });
}

// init/calls functions
moviesApp.init = () => {
    // moviesApp.getMovies("string");
    moviesApp.setupEventListeners();
}

// initializing app 
moviesApp.init();
