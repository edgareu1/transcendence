import Abstract from "../components/_Abstract.js";

export default class extends Abstract {
	constructor(props) {
		super(props);

		this.params = props;
	}

	async getHtml() {
		return `
			<h1>
				${i18next.t('home.title')}
			</h1>
		`;
	}
}
