/*
	Owner: Joaquín Paz
	Year: 2022
	Description: A Film Finder that recommends random movies based on the themoviedb API. Fetch function practice with DOM manipulation.
*/

const tmdbKey = 'daad24d8d9eabcdfb321e8e7188b8ea8';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');

const getGenres = async () => {
    const genreRequestEndpoint = tmdbBaseUrl + '/genre/movie/list';
    const requestParams = '?api_key=' + tmdbKey;
    const urlToFetch = genreRequestEndpoint + requestParams;
    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            const genres = jsonResponse.genres;
            return genres
        }
    } catch (err) {
        console.log(err);
    }
};

const getMovies = async () => {
    const selectedGenre = getSelectedGenre();
    const discoverRequestEndpoint = '/discover/movie';
    const requestParams = '?api_key=' + tmdbKey + '&with_genres=' + selectedGenre;
    const urlToFetch = tmdbBaseUrl + discoverRequestEndpoint + requestParams;
    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            // we parse a random page and random result and return it
            let maxPages = jsonResponse.total_pages; // total pages returned
            if (maxPages > 500) maxPages = 500; // we set max page number to 500 (since the API's crashes with a larger page number)
            const choice = Math.floor(Math.random() * maxPages); // random page number choice
            const randomChoice = await fetch(urlToFetch + '&page=' + choice); // we generate a new fetch based on a random page
            const movies = await randomChoice.json();
            return movies.results
            /*--unreachable code below--
            If we would like to randomize the choice inside the page 
            const pageSize = jsonResponseRandom.results.length; // results in page (to generate a random search)
            const randomPageChoice = Math.floor(Math.random() * pageSize);
            console.log(`Chose page ${choice}/${maxPages} and result number ${randomPageChoice}/${pageSize} which results in: \n${jsonResponseRandom.results[randomPageChoice].title}`);
            console.log(jsonResponseRandom.results[randomPageChoice]);
            return jsonResponseRandom.results[randomPageChoice].title;
            --end of unreachable code */
        }
    } catch (error) {
        console.log(error);
    }


};

const getMovieInfo = async movie => {
    const movieId = movie.id;
    const movieInfoEndpoint = `/movie/${movieId}`
    const requestParams = '?api_key=' + tmdbKey;
    const urlToFetch = tmdbBaseUrl + movieInfoEndpoint + requestParams;
    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const movieInfo = await response.json();
            return movieInfo;
        }
    } catch (error) {
        console.log(error);
    }

};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async () => {
    const movieInfo = document.getElementById('movieInfo');
    if (movieInfo.childNodes.length > 0) {
        clearCurrentMovie();
    };
    const movies = await getMovies();
    const randomMovie = getRandomMovie(movies);
    const info = await getMovieInfo(randomMovie);
    displayMovie(info);
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;