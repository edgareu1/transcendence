export default class User {
	constructor(username) {
		this.username = username;
		this.score = 0;
		this.games = [];
	}

	// here we will create logic to sed database
	storeGames(id, result, opponent) {
		let game = {
			id: id,
			result: result,
			opponent: opponent
		};
		this.games.push(game);
	}
}