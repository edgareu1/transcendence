import { Abstract } from "/static/js/components/index.js";

export default class extends Abstract {
	constructor(props) {
		super(props);

		this.params = props;

		// this is mocking data from database
		this.userData = {
			username: "Bob",
			games: [
				{
					id: 1,
					victory: true,
					defeat: false,
					opponent: "Jeff",
					points: 5,
					totalPoints: 5
				},
				{
					id: 2,
					victory: false,
					defeat: true,
					opponent: "Will",
					points: 3,
					totalPoints: 8
				},
				{
					id: 3,
					victory: false,
					defeat: true,
					opponent: "John",
					points: 2,
					totalPoints: 10
				}
			]
		};
	}

	generateTable() {
		let table = `<table class="table table-hover text-center">
						<thead class="table-secondary">
							<tr>
								<th scope="col">${i18next.t('individualDashboard.columns.id')}</th>
								<th scope="col">${i18next.t('individualDashboard.columns.victory')}</th>
								<th scope="col">${i18next.t('individualDashboard.columns.defeat')}</th>
								<th scope="col">${i18next.t('individualDashboard.columns.opponent')}</th>
								<th scope="col">${i18next.t('individualDashboard.columns.points')}</th>
								<th scope="col">${i18next.t('individualDashboard.columns.total')}</th>
							</tr>
						</thead>
						<tbody class="table-group-divider" style="border-top-color: #6c757d">`;

		this.userData.games.forEach(data => {
			table += `<tr>
							<th scope="row">${data.id}</th>
							<td>${data.victory ? 'x' : ' '}</td>
							<td>${data.defeat ? 'x' : ' '}</td>
							<td>${data.opponent}</td>
							<td>${data.points}</td>
							<td>${data.totalPoints}</td>
						</tr>`;
		});
		table += '</tbody></table>';
		return table;
	}

	async addFuncionality() {

	}

	async getHtml() {
		return `
			<h1>
				${i18next.t('individualDashboard.title')} - ${this.userData.username}
			</h1>
			<div class="dashboard">${this.generateTable()}</div>
		`;
	}
}
