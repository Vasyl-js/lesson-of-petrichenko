"use strict";
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');
    }

}
start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};




function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('you are watching just a litle films');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('you are classic zritel');
    } else if (personalMovieDB.count >= 30) {
        alert('you are monster');
    } else {
        alert('error');
    }
}
detectPersonalLevel();


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', '');
        const b = prompt('Насколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
        
    }
}
rememberMyFilms();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        const genre = prompt(`what is yiur favorite genre # ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}
writeYourGenres();