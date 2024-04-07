import { Friends } from "/static/js/api/index.js";
import { Abstract } from "/static/js/components/index.js";

export default class extends Abstract {
	constructor(props) {
		super(props);

		this.params = props;
	}

	async getHtml() {
		this.data = await Friends.getAll();

		const accepted = this.data.filter(({ was_accepted }) => was_accepted)
			.map(({ user1, user2 }) => (user1.id == 1) ? user2 : user1);

		const pending = this.data.filter(({ was_accepted, was_canceled, was_refused }) => !was_accepted && !was_canceled && !was_refused);
		const pedingReceived = pending.filter(({ user1 }) => user1.id == 1)
			.map(({ user2 }) => user2);
		const pedingSent = pending.filter(({ user1 }) => user1.id != 1)
			.map(({ user1 }) => user1);

		return `
			<div class="sidebar-section">
				<h3>Friends</h3>

				<div class="sidebar-section-list">
					${accepted.map(({ username, avatar }) => `
						<div class="sidebar-section-element">
							<img src="${avatar}" class="sidebar-section-avatar" />

							<span class="sidebar-section-username">
								${username}
							<span>
						</div>
					`).join("")}
				</div>

				<div class="sidebar-subsection">
					<h5>Pending (received)</h5>
					<div class="sidebar-section-list">
						${pedingReceived.map(({ username, avatar }) => `
							<div class="sidebar-section-element">
								<img src="${avatar}" class="sidebar-section-avatar" />

								<span class="sidebar-section-username">
									${username}
								<span>
							</div>
						`).join("")}
					</div>
				</div>

				<div class="sidebar-subsection">
					<h5>Pending (sent)</h5>
					<div class="sidebar-section-list">
						${pedingSent.map(({ username, avatar }) => `
							<div class="sidebar-section-element">
								<img src="${avatar}" class="sidebar-section-avatar" />

								<span class="sidebar-section-username">
									${username}
								<span>
							</div>
						`).join("")}
					</div>
				</div>
			</div>
		`;
	}
}
