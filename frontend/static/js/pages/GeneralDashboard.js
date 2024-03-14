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

			<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
				<li class="nav-item" role="presentation">
					<button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">History</button>
				</li>
				<li class="nav-item" role="presentation">
					<button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Ranking</button>
				</li>
				<li class="nav-item" role="presentation">
					<button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Graphs</button>
				</li>
			</ul>
			<div class="tab-content" id="pills-tabContent">
				<div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">${this.generateTable()}</div>
				<div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">Ranking is coming here</div>
				<div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">Graphs are coming here</div>
			</div>
		`;
	}
}
