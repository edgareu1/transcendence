import Abstract from "./_Abstract.js";

export default class extends Abstract {
	constructor(props) {
		super(props);

		this.params = props;
	}

	async getHtml() {
		return `
			<h1>Dashboard</h1>
		`;
	}
}
