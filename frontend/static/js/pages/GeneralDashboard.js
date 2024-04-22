import { Abstract } from "/static/js/components/index.js";
import { FetchData } from "/static/js/services/index.js";

export default class extends Abstract {
  constructor(props) {
    super(props);

    this.params = props;

    this.data;
    this.games;
    this.users;
  }

  async addFunctionality() {}

  generateHistoryTable() {
    let table = `<table class="table text-center">
						<thead class="table-secondary">
							<tr>
								<th scope="col">${i18next.t("generalDashboard.columns.id")}</th>
								<th scope="col" colspan="2">${i18next.t("generalDashboard.columns.players")}</th>
							</tr>
						</thead>
						<tbody class="table-group-divider" style="border-top-color: #6c757d">`;

    this.games.forEach((game) => {
      table += `<tr>
							<th scope="row" rowspan="2">${game.gameId}</th>
							<td class="border-bottom-0">${game.leftPlayer}</td>
							<td class="border-bottom-0">${game.rightPlayer}</td>
						</tr>
						<tr>
							<td class="border-top-0">${game.leftPts}</td>
							<td class="border-top-0">${game.rightPts}</td>
						</tr>`;
    });
    table += "</tbody></table>";
    return table;
  }

  generateRankingTable() {
    // data can be sorted on SQL query
    this.users.sort((a, b) => b.totalPoints - a.totalPoints);

    let table = `<table class="table text-center table-hover">
						<thead class="table-secondary">
							<tr>
								<th scope="col">${i18next.t("generalDashboard.columns.players")}</th>
								<th scope="col">${i18next.t("generalDashboard.columns.points")}</th>
							</tr>
						</thead>
						<tbody class="table-group-divider" style="border-top-color: #6c757d">`;

    this.users.forEach((user) => {
      table += `<tr href="/dashboard/individual/${user.userId}" data-link>
							<th scope="row">${user.username}</th>
							<td> ${user.totalPoints}</td>
						</tr>`;
    });
    table += "</tbody></table>";

    return table;
  }

  async getHtml() {
    // fetching data mocked on db.json
    this.data = await FetchData.getData();
    this.games = this.data.games;
    this.users = this.data.users;

    return `
			<h1>
				${i18next.t("generalDashboard.title")}
			</h1>

			<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
				<li class="nav-item" role="presentation">
					<button class="nav-link active" id="pills-history-tab" data-bs-toggle="pill" data-bs-target="#pills-history" type="button" role="tab" aria-controls="pills-history" aria-selected="true">${i18next.t("generalDashboard.tabs.history")}</button>
				</li>
				<li class="nav-item" role="presentation">
					<button class="nav-link" id="pills-ranking-tab" data-bs-toggle="pill" data-bs-target="#pills-ranking" type="button" role="tab" aria-controls="pills-ranking" aria-selected="false">${i18next.t("generalDashboard.tabs.ranking")}</button>
				</li>
				<li class="nav-item" role="presentation">
					<button class="nav-link" id="pills-graphs-tab" data-bs-toggle="pill" data-bs-target="#pills-graphs" type="button" role="tab" aria-controls="pills-graphs" aria-selected="false">${i18next.t("generalDashboard.tabs.graphs")}</button>
				</li>
			</ul>
			<div class="tab-content" id="pills-tabContent">
				<div class="tab-pane fade show active" id="pills-history" role="tabpanel" aria-labelledby="pills-history-tab">${this.generateHistoryTable()}</div>
				<div class="tab-pane fade" id="pills-ranking" role="tabpanel" aria-labelledby="pills-ranking-tab">${this.generateRankingTable()}</div>
				<div class="tab-pane fade" id="pills-graphs" role="tabpanel" aria-labelledby="pills-gaphs-tab">Graphs are coming here</div>
			</div>
		`;
  }
}
