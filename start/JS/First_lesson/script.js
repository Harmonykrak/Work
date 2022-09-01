'use strict'

// const result = confirm('Are you Okey?');
// console.log(result);

const numberOfFilms = +prompt("How much films did you look?", "");
console.log(numberOfFilms);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i=1; i<=numberOfFilms; i++){
    const namefilm = prompt("Last film wich you looked?", "");
    const ratingfilm = prompt("How rating was this film?", "");
    if(namefilm.length < 50  && namefilm != null && ratingfilm != null && namefilm != "" && ratingfilm != "") {
        personalMovieDB.movies[namefilm] = ratingfilm;
        console.log('done');
    }else {
        alert("Please, can you write last film wich you looked?");
        i--;    
    }
}
personalMovieDB.count < 10 ?  alert("you looked little films") :  alert("you looked a lot of films");
console.log(personalMovieDB);