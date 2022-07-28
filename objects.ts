const cat = {
	name: 'Polly',
	breed: 'Orange',
	age: 0.5,
};

type Point = {
	x: number;
	y: number;
};

let coordinate: Point = { x: 34, y: 69 };

const printName = (person: { first: string; last?: string }) => {
	console.log(`${person.first} ${person.last}`);
};

printName({ first: 'John' });

const randomCoord = (): Point => ({
	x: Math.random(),
	y: Math.random(),
});

//

type Song = {
	readonly title: string;
	artist: string;
	numberStreams: number;
	credits: {
		producer: string;
		writer: string;
	};
};

const calculatePayout = (song: Song): number => song.numberStreams * 0.0033;

const printSong = (song: Song): void => {
	console.log(`${song.title} - ${song.title}`);
};

const mySong: Song = {
	title: 'Shadow Moses',
	artist: 'Bring Me the Horizon',
	numberStreams: 9999999,
	credits: {
		producer: 'Terry Date',
		writer: 'Oliver Sykes',
	},
};

calculatePayout(mySong);
printSong(mySong);

type Circle = {
	radius: number;
};

type Colorful = {
	color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
	radius: 4,
	color: 'yellow',
};
