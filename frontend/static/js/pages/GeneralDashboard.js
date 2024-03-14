import { Abstract } from "/static/js/components/index.js";

export default class extends Abstract {
	constructor(props) {
		super(props);

		this.params = props;

		// this is mocking data from database
		this.games = [
			{
				id: 1,
				leftPlayer: "Bob",
				rightPlayer: "Will",
				leftPts: 3,
				rightPts: 5
			},
			{
				id: 2,
				leftPlayer: "Jeff",
				rightPlayer: "John",
				leftPts: 5,
				rightPts: 1
			},
			{
				id: 3,
				leftPlayer: "Bob",
				rightPlayer: "John",
				leftPts: 5,
				rightPts: 2
			}
		];

		
	}

	generateTable() {

		let table = '<table class="table text-center">';
		table += `<thead class="table-secondary">
						<tr>
							<th scope="col">${i18next.t('generalDashboard.columns.id')}</th>
							<th scope="col" colspan="2">${i18next.t('generalDashboard.columns.players')}</th>
						</tr>
					</thead>
					<tbody class="table-group-divider" style="border-top-color: #6c757d">`;

		this.games.forEach(game => {
			table += `<tr>
							<th scope="row" rowspan="2">${game.id}</th>
							<td class="border-bottom-0">${game.leftPlayer}</td>
							<td class="border-bottom-0">${game.rightPlayer}</td>
						</tr>
						<tr>
							<td class="border-top-0">${game.leftPts}</td>
							<td class="border-top-0">${game.rightPts}</td>
						</tr>`
		});
		table += '</tbody></table>';
		return table;
	};

	async addFuncionality() {

	}

	async getHtml() {
		return `
			<h1>
				${i18next.t('generalDashboard.title')}
			</h1>
			<div class="dashboard" id="table-container">${this.generateTable()}</div>
		`;
	}
}
