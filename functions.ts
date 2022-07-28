// Functions
function square(num: number) {
	return Math.pow(num, 2);
}
// const greet = (phrase: string) => console.log('hello');

const greet = (person: string = 'stranger') => `Hi there ${person}`;

const colors = ['red', 'yellow', 'green'];

colors.map((color) => color.toUpperCase());

function secondsInDay() {
	return 24 * 60 * 60;
}
