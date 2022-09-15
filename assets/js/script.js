/* What are the most popular movies? */
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=14bd8f982f89e1b1a206780215c62b44&page=1';


// const IMG_PATH = "https://image.tmdb.org/t/p/w500/" ;   W500 is the web size
const IMG_PATH    = 'https://image.tmdb.org/t/p/w1280'             ;
const SEARCH_API  = 'https://api.themoviedb.org/3/search/movie?api_key=14bd8f982f89e1b1a206780215c62b44&query="';

const formEl      = document.getElementById('form')                ;
const mainEl      = document.getElementById('main')                ;
const searchEl    = document.getElementById('search')              ;

const movieOptEl  = document.getElementById("movie_opt")           ;
const movieTypeEl = document.getElementById("movie_type")          ;



// Get initial movies
getMovies(API_URL)

async function getMovies(apiUrl) {
    fetch(apiUrl).then(function(apiUrl) {
        if (apiUrl.ok) {
          // Clean <DIV>
          main.innerHTML = '' ;

          apiUrl.json().then(function(dataUrl) {

          movies    = dataUrl.results          ;
            // totMovies = dataUrl.total_results;
          
          var nShow = dataUrl.results.length   ;

        // for (var i=1; i<=15; i++) {
        for (var i=0; i<=nShow; i++) {
            console.log(i);

            // console.log(movies[i].poster_path) ;
            console.log(movies[i].title)       ;
            cImgPath   = movies[i].poster_path ;
            cTitle     = movies[i].title       ;
            nVote      = movies[i].vote_average;
            cOverView  = movies[i].overview    ;



            const movieEl = document.createElement('div') ;
            movieEl.classList.add('movie')     ;
    
            // <span class="${nVote}">${nVote}</span>
            // Remove Vote
            movieEl.innerHTML = `
                <img src="${IMG_PATH + cImgPath}" alt="${cTitle}">
                <div class="movie-info">
              <h3>"${cTitle}"</h3>
              <span class="${nVote}">${nVote}</span>
                </div>
                <div class="overview">
              <h3>OVERVIEW</h3>
              ${cOverView}
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
    const searchType = form.movie_type.value
    

    if(searchTerm && searchTerm !== '') {

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

        // getMovies(SEARCH_API + searchTerm)

        switch( searchType) {
          case "Popular":
            getMovies('https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=14bd8f982f89e1b1a206780215c62b44&page=1&query="'+searchTerm+'"') ;
            break;
          case "R":  // "Kids":
            getMovies('https://api.themoviedb.org/3/search/movie?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=14bd8f982f89e1b1a206780215c62b44&page=1&query="'+searchTerm+'"') ;
            break;
          case "Best":
            getMovies('https://api.themoviedb.org/3/search/movie?primary_release_year=2020&sort_by=vote_average.desc&api_key=14bd8f982f89e1b1a206780215c62b44&page=1&query="'+searchTerm+'"') ;
            break;
          case "Drama":
            getMovies('https://api.themoviedb.org/3/search/movie?with_genres=18&primary_release_year=2014&api_key=14bd8f982f89e1b1a206780215c62b44&page=1&query="'+searchTerm+'"') ;
            break;
        }

        search.value = ''
     } else {
        //  window.location.reload()

        // If Search criteria is blank 
        switch( searchType) {
          case "Popular":
            getMovies('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=14bd8f982f89e1b1a206780215c62b44&page=1') ;
            break;
          case "R":  // "Kids":
            getMovies('https://api.themoviedb.org/3/discover/movie?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=14bd8f982f89e1b1a206780215c62b44&page=1') ;
            break;
          case "Best":
            getMovies('https://api.themoviedb.org/3/discover/movie?primary_release_year=2020&sort_by=vote_average.desc&api_key=14bd8f982f89e1b1a206780215c62b44&page=1') ;
            break;
          case "Drama":
            getMovies('https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2014&api_key=14bd8f982f89e1b1a206780215c62b44&page=1') ;
            break;
        }

    }
})
