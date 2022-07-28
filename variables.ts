let movieTitle: string = 'Titanic';
let myNumber: number = 23;

// Type Interference
let tvShow = 'Money Heist';

// Any
let thing: any = 'yellow';
thing = 1;
thing = false;

const movies = ['Arrival', 'Batman', 'Bugs Life', 'Fight Club'];
let foundMovie: string;

for (let movie of movies) {
	if (movie === 'Batman') {
		foundMovie = 'Dark Knight';
	}
}
