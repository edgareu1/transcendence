export default class User {
  constructor(username) {
    this.userId = 1; // reference to manipulate database
    this.username = username;
    this.score = 0;
    this.games = [];
    this.personalScores = {
      wins: 0,
      loses: 0,
      totalScore: 0,
    };
  }

  // here we will create logic to sed database
  storeGames(id, result, opponent, leftScore, rightScore) {
    let game = {
      id: id,
      result: result,
      opponent: opponent,
      scoreBoard: `${leftScore} x ${rightScore}`,
    };
    this.games.push(game);
    this.updateScores(result);
  }

  updateScores(result) {
    result === "win" ? this.personalScores.wins++ : this.personalScores.loses++;
    this.personalScores.totalScore += this.score;
  }

  // only for test
  printGames() {
    console.log(this.username, this.games);
  }

  // only for test
  printScores() {
    console.log(this.username, this.personalScores);
  }
}
