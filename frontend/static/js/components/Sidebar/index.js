import { Abstract } from "/static/js/components/index.js";
import FriendsSection from "./FriendsSection.js";

export default class extends Abstract {
	constructor(props) {
		super(props);

		this.params = props;
		this.friendsSection = new FriendsSection();
	}

	async addFunctionality() {
		await this.friendsSection.addFunctionality();
	}

	async getHtml() {
		return `
			<div class="sidebar-wrapper">
				<h2>Sidebar</h2>

				${await this.friendsSection.getHtml()}
			</div>
		`;
	}
}
