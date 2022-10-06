/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';




// const result = confirm('Are you Okey?');
// console.log(result);

let numberOfFilms;

function start(){
    numberOfFilms = +prompt("How much films did you look?", "");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How much films did you look?", "");

    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function RememberMyFilm(){
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
}

RememberMyFilm();

function MyPersenalLevel(){
    personalMovieDB.count < 10 ?  alert("you looked little films") :  alert("you looked a lot of films");
}

MyPersenalLevel();

function writeYourGenres(){
    for(let i=1; i<=numberOfFilms; i++){
        const namegenres = prompt(`Your lovely genere number ${i} is?`, "");
        const numbergeners = i-1;
        if(namegenres.length < 50  && namegenres != null &&  namegenres != "" ) {
            personalMovieDB.genres[numbergeners] = namegenres;
            console.log('done');
        }else {
            alert("Please, can you write last film wich you looked?");
            i--;    
        }
    }
}

writeYourGenres();

function showMyDB(){
    personalMovieDB.privat == false ? console.log(personalMovieDB) : alert("DataBase Privat, Sorry");
}

showMyDB();