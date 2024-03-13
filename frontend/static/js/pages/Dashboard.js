import { Abstract } from "/static/js/components/index.js";

export default class extends Abstract {
	constructor(props) {
		super(props);

		this.params = props;
	}

	async addFuncionality() {

	}

	async getHtml() {
		return `
			<h1>
				${i18next.t('dashboard.title')}
			</h1>
			<div class="dashboard">
				<table class="table table-hover text-center">
					<thead class="table-secondary">
						<tr>
							<th scope="col">Game id</th>
							<th scope="col">Victory</th>
							<th scope="col">Defeat</th>
							<th scope="col">Points</th>
							<th scope="col">Total Points</th>
						</tr>
					</thead>
					<tbody class="table-group-divider" style="border-top-color: #6c757d">
						<tr>
							<th scope="row">1</th>
							<td>x</td>
							<td></td>
							<td>5</td>
							<td>5</td>
						</tr>
						<tr>
							<th scope="row">2</th>
							<td></td>
							<td>x</td>
							<td>3</td>
							<td>8</td>
						</tr>
						<tr>
							<th scope="row">3</th>
							<td></td>
							<td>x</td>
							<td>2</td>
							<td>10</td>
						</tr>
					</tbody>
				</table>
			</div>
		`;
	}
}
