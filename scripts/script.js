

// IMD API WEBSITE: https://imdb-api.com/api/#Top250Movies-header

const moviesApp = {};

// --> API INFO:
moviesApp.apiKey = 'k_bsagv4oc';
moviesApp.apiKey = 'k_af7vd4w1';
moviesApp.apiUrl = 'https://imdb-api.com/en/API/SearchMovie/';


// --> FUNCTION TO REQUEST INFO FROM THE API: 
moviesApp.getMovies = () => { 
    // make the url with the required api parameters

    const url = new URL(moviesApp.apiUrl);
    url.search = new URLSearchParams({
        apiKey: moviesApp.apiKey
    })

// --> FETCH() TO MAKE API REQUEST: 
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((jsonResponse) => {
            console.log(jsonResponse);
            moviesApp.displayMovies(jsonResponse);
        })
}


// --> FUNCTION TO DISPLAY MOVIES ON THE PAGE:
    moviesApp.displayMovies = (arrayOfMovies) => {

        const ul = document.querySelector('ul');
        // for (let i = 0; i < 10; i++) 
        arrayOfMovies.results.forEach((item) => {

        // create a list item element
		const li = document.createElement('li');

		// create a image element for inside the <li> 
		const img = document.createElement('img');

		// add the content to the img element (src & alt text)
		img.src = item.image;
		img.alt = item.title;

        li.innerHTML = `${item.title}`;
		// appending the img element to the li
		li.append(img);
		// append li to the gallery ul
		ul.append(li);
        })
    }

// --> FUNCTION TO ADD EVENT LISTENERS:
    // run search after user types in movie name in search bar 
    function handleClick(){
        // search the API for the movie typed in search
    }

    document.addEventListener('submit', handleClick)

    // search button ... 

    
moviesApp.getMovies();



