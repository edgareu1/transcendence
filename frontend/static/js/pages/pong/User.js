export default class User {
	constructor(username) {
		this.username = username;
		this.score = 0;
		this.games = [];
	}

	storeGames(id, result, opponent) {
		let game = {
			id: id,
			result: result,
			opponent: opponent
		};
		this.games.push(game);
	}
}