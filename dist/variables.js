"use strict";
let movieTitle = 'Titanic';
let myNumber = 23;
// Type Interference
let tvShow = 'Money Heist';
// Any
let thing = 'yellow';
thing = 1;
thing = false;
const movies = ['Arrival', 'Batman', 'Bugs Life', 'Fight Club'];
let foundMovie;
for (let movie of movies) {
    if (movie === 'Batman') {
        foundMovie = 'Dark Knight';
    }
}
