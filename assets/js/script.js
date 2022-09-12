const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=14bd8f982f89e1b1a206780215c62b44&page=1';
// const IMG_PATH = "https://image.tmdb.org/t/p/w500/" ;   W500 is the web size
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=14bd8f982f89e1b1a206780215c62b44&query="';

const formEl = document.getElementById('form')
const mainEl = document.getElementById('main')
const searchEl = document.getElementById('search')

// Get initial movies
getMovies(API_URL)

async function getMovies(apiUrl) {
    fetch(apiUrl).then(function(apiUrl) {
        if (apiUrl.ok) {
          apiUrl.json().then(function(dataUrl) {

          movies    = dataUrl.results      ;
          totMovies = dataUrl.total_results;

          for (var i=1; i<=5; i++) {
            cImgPath   = movies[i].poster_path ;
            cTitle     = movies[i].title       ;
            nVote      = movies[i].vote_average;
            cOverView  = movies[i].overview    ;



            const movieEl = document.createElement('div')
            movieEl.classList.add('movie')
    
            movieEl.innerHTML = `
                <img src="${IMG_PATH + cImgPath}" alt="${cTitle}">
                <div class="movie-info">
              <h3>${cTitle}</h3>
              <span class="${nVote}">${nVote}</span>
                </div>
                <div class="overview">
              <h3>Overview</h3>
              ${cOverView}
            </div>
            `
            main.appendChild(movieEl)

            }

          
          })
        }

}
)}


