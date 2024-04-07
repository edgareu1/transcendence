import { Abstract } from "/static/js/components/index.js";
import { FetchData } from "/static/js/services/index.js";

export default class extends Abstract {
  constructor(props) {
    super(props);

    this.params = props;
    this.data;
    this.user;
    // we can use this to retreive data from database
    this.userId = this.params.userId;
  }

  generateTable() {
    let table = `<table class="table table-hover text-center">
						<thead class="table-secondary">
							<tr>
								<th scope="col">${i18next.t("individualDashboard.columns.id")}</th>
								<th scope="col">${i18next.t("individualDashboard.columns.victory")}</th>
								<th scope="col">${i18next.t("individualDashboard.columns.defeat")}</th>
								<th scope="col">${i18next.t("individualDashboard.columns.opponent")}</th>
								<th scope="col">${i18next.t("individualDashboard.columns.points")}</th>
								<th scope="col">${i18next.t("individualDashboard.columns.total")}</th>
							</tr>
						</thead>
						<tbody class="table-group-divider" style="border-top-color: #6c757d">`;

    this.user.games.forEach((game) => {
      table += `<tr>
							<th scope="row">${game.gameId}</th>
							<td>${game.victory ? "x" : " "}</td>
							<td>${game.defeat ? "x" : " "}</td>
							<td>${game.opponent}</td>
							<td>${game.points}</td>
							<td>${game.totalPoints}</td>
						</tr>`;
    });
    table += "</tbody></table>";
    return table;
  }

  async addFunctionality() {}

  async getHtml() {
    // fetching data mocked on db.json
    this.data = await FetchData.getData();
    this.user = this.data.users.filter((user) => user.userId == this.userId)[0];

    return `
			<h1>
				${i18next.t("individualDashboard.title")} - ${this.user.username}
			</h1>
			<div class="dashboard">${this.generateTable()}</div>
		`;
  }
}
