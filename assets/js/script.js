const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=14bd8f982f89e1b1a206780215c62b44&page=1';
// const IMG_PATH = "https://image.tmdb.org/t/p/w500/" ;   W500 is the web size
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=14bd8f982f89e1b1a206780215c62b44&query="';

const form = document.getElementById('form')
const search = document.getElementById('search')

// Get initial movies
getMovies(API_URL)

function getMovies(apiUrl) {
    fetch(apiUrl).then(function(apiUrl) {
        if (apiUrl.ok) {
          apiUrl.json().then(function(dataUrl) {
            console.log(dataUrl) ;

          })
        }
    })
}
