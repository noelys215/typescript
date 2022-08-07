'use strict';

class Player {
	static desc = 'Player In Game';
	#score = 0;
	numLives = 9;
	constructor(first, last) {
		this.first = first;
		this.last = last;
	}
	get score() {
		return this.#score;
	}
	set score(newScore) {
		if (newScore < 0) {
			throw new Error('Score must be positive!');
		}
		this.#score = newScore;
	}
	updateScore(newScore) {
		this.#score = newScore;
	}
	taunt() {
		console.log('Git Gud');
	}
	loseLife() {
		this.numLives -= 1;
	}
	get fullName() {
		return `${this.first} ${this.last}`;
	}
	set fullName(newName) {
		const [first, last] = newName.split(' ');
		this.first = first;
		this.last = last;
	}
}

class AdminPlayer extends Player {
	constructor(first, last, newPowers) {
		super(first, last);
		this.powers = newPowers;
	}
	isAdmin = true;
}

const player1 = new Player('Polly', 'Poppins');
const player2 = new Player('Charlie', 'Brown');

player1.score = 23;
const admin = new AdminPlayer('Chonky', 'Chonkerson', ['delete', 'restore']);
console.log(admin);

console.log(admin.fullName);
console.log(admin.powers);
