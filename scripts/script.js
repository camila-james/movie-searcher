

// IMD API WEBSITE: https://imdb-api.com/api/#Top250Movies-header

const moviesApp = {};

// --> API INFO:
moviesApp.apiKey = 'k_bsagv4oc';
moviesApp.apiUrl = 'https://imdb-api.com/en/API/MostPopularMovies/';


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
        arrayOfMovies.items.forEach((item) => {

        // create a list item element
		const li = document.createElement('li');

		// create a image element for inside the <li> 
		const img = document.createElement('img');

		// add the content to the img element (src & alt text)
		// img.src = items.image;
		img.alt = item.fullTitle;

        li.innerHTML = `${item.fullTitle}`;
		// appending the img element to the li
		// li.append(img);
		// append li to the gallery ul
		ul.append(li);
        })
    }

// --> FUNCTION TO ADD EVENT LISTENERS:
//     // run search after user types in movie name in search bar 

//     document.addEventListener('submit', button)
//     // search button ... 

moviesApp.getMovies();


