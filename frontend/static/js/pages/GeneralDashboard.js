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
				${i18next.t('generalDashboard.title')}
			</h1>
			<div class="dashboard">
				<table class="table text-center">
					<thead class="table-secondary">
						<tr>
							<th scope="col">${i18next.t('generalDashboard.columns.id')}</th>
							<th scope="col" colspan="2">${i18next.t('generalDashboard.columns.players')}</th>
						</tr>
					</thead>
					<tbody class="table-group-divider" style="border-top-color: #6c757d">
						<tr>
							<th scope="row" rowspan="2">1</th>
							<td class="border-bottom-0">ansilva-</td>
							<td class="border-bottom-0">tpereira</td>
						</tr>
						<tr>
							<td class="border-top-0">5</td>
							<td class="border-top-0">2</td>
						</tr>
						<tr>
							<th scope="row" rowspan="2">2</th>
							<td class="border-bottom-0">efreire-</td>
							<td class="border-bottom-0">tpereira</td>
						</tr>
						<tr>
							<td class="border-top-0">3</td>
							<td class="border-top-0">5</td>
						</tr>
						<tr>
							<th scope="row" rowspan="2">3</th>
							<td class="border-bottom-0">ansilva-</td>
							<td class="border-bottom-0">efreire-</td>
						</tr>
						<tr>
							<td class="border-top-0">5</td>
							<td class="border-top-0">0</td>
						</tr>
					</tbody>
				</table>
			</div>
		`;
	}
}
