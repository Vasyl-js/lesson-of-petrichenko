"use strict";
const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


if (personalMovieDB.count < 10) {
    alert('you are watching just a litle films');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('you are classic zritel');
} else if (personalMovieDB.count >= 30) {
    alert('you are monster');
} else {
    alert('error');
}


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

console.log(personalMovieDB);