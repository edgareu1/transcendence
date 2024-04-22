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
			<div class="sidebar-outter-wrapper">
				<div class="sidebar-wrapper position-absolute top-0 start-0 p-3 overflow-y-scroll rounded">
					<h2 class="text-white lh-1 mb-4">
						Menu
					</h2>

					${await this.friendsSection.getHtml()}
				</div>
			</div>
		`;
	}
}
