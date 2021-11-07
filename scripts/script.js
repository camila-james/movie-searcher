
// IMD : to get a list of search movies 
// url/en/API/SearchMovie/{apiKey}/{expression}aka the movie searched


const moviesApp = {};

// --> API info
moviesApp.apiKey = 'k_bsagv4oc';
moviesApp.apiUrl = 'https://imdb-api.com/en/API/SearchMovie/';


// --> function to request info from the API
moviesApp.getMovies = () => { 
// make the url with the required api parameters

const url = new URL(moviesApp.apiUrl);
url.search = new URLSearchParams({
// adding api key as query parameter
        apiKey: moviesApp.apiKey
})
    


// --> fetch() to make the api request
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((jsonResponse) => {
        console.log(jsonResponse);
    })

}

// --> function to display movies on the age
moviesApp.displayMovies = (arrayDataFromAPI) => {

    document.addEventListener('click', button)
    // search button ... 

    document. 
    // run search after user types in movie name in search bar 



    // COLINS CODE
    const ul = document.querySelector('ul');
    
    arrayDataFromAPI.forEach( (item) => {

        const li = document.createElement('li');
        const img = document.createElement('img');

        // add content to img
        img.src = item.image;
        img.alt = item.description;
        img.title = item.title;

        li.appendChild(img);
        ul.appendChild(li);

    })
}

moviesApp.displayMovies ();



