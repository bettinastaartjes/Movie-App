// https://www.themoviedb.org/documentation/api?language=en-US
// https://www.themoviedb.org/documentation/api/discover


/* What are the most popular movies? */
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=14bd8f982f89e1b1a206780215c62b44&page=1';

/*

pular movies?
URL: /discover/movie?sort_by=popularity.desc

What are the highest rated movies rated R?
URL: /discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc

What are the most popular kids movies?
URL: /discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc

What is are the best movies from 2010?
URL: /discover/movie?primary_release_year=2010&sort_by=vote_average.desc

What are the best dramas that were released this year?
URL: /discover/movie?with_genres=18&primary_release_year=2014
*/




// const IMG_PATH = "https://image.tmdb.org/t/p/w500/" ;   W500 is the web size
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=14bd8f982f89e1b1a206780215c62b44&query="';

/* 
Other API calls
---------------
https://www.themoviedb.org/documentation/api/discover
*/


const formEl = document.getElementById('form')
const mainEl = document.getElementById('main')
const searchEl = document.getElementById('search')

// Get initial movies
getMovies(API_URL)

async function getMovies(apiUrl) {
    fetch(apiUrl).then(function(apiUrl) {
        if (apiUrl.ok) {
          // Clean <DIV>
          main.innerHTML = '' ;

          apiUrl.json().then(function(dataUrl) {


            movies    = dataUrl.results      ;
            totMovies = dataUrl.total_results;
          
            if (totMovies<20) {
                var nShow = (totMovies-1)             ;
            } else {
                // if totMovies >= 30
                var nShow = (20 - 1)                  ;   // ill Show 30 movies
            }

        //   for (var i=1; i<=nShow; i++) {
        // for some reason, doesn't accept nShow

        // for (var i=1; i<=15; i++) {
        for (var i=0; i<=nShow; i++) {
            console.log(i);

            // console.log(movies[i].poster_path) ;
            console.log(movies[i].title) ;
            cImgPath   = movies[i].poster_path ;
            cTitle     = movies[i].title       ;
            nVote      = movies[i].vote_average;
            cOverView  = movies[i].overview    ;



            const movieEl = document.createElement('div')
            movieEl.classList.add('movie')
    
            // <span class="${nVote}">${nVote}</span>
            // Remove Vote
            movieEl.innerHTML = `
                <img src="${IMG_PATH + cImgPath}" alt="${cTitle}">
                <div class="movie-info">
              <h3>"${cTitle}"</h3>
              <span class="${nVote}">${nVote}</span>
                </div>
                <div class="overview">
              <h3>Overview</h3>
              ${cOverView}git
            </div>
            `
            mainEl.appendChild(movieEl)

        }

          
          })
        }

}
)}

formEl.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})
