import { Friends } from "/static/js/api/index.js";
import { Abstract } from "/static/js/components/index.js";

export default class extends Abstract {
	constructor(props) {
		super(props);

		this.params = props;
	}

	async addFunctionality() {
		const handleClick = async (target) => {
			const {
				action,
				id
			} = target;

			switch (action) {
				case 'message':
					alert(`message: ${id}`);
					break;

				case 'refuse':
					await Friends.refuse(id);
					break;

				case 'accept':
					await Friends.accept(id);
					break;

				case 'cancel':
					await Friends.cancel(id);
					break;
			}
		}

		document.querySelector('#sidebar').addEventListener('click', (event) => {
			if (event.target.closest('button')) {
				handleClick(event.target.closest('button').dataset);
			}
		});
	}

	async getHtml() {
		this.data = await Friends.getAll();

		const accepted = this.data.filter(({ was_accepted }) => was_accepted)
			.map(({ id, user1, user2 }) => ({ id, user: (user1.id == 1) ? user2 : user1 }));

		const pending = this.data.filter(({ was_accepted, was_canceled, was_refused }) => !was_accepted && !was_canceled && !was_refused);
		const pedingReceived = pending.filter(({ user1 }) => user1.id == 1)
			.map(({ id, user2 }) => ({ id, user: user2 }));
		const pedingSent = pending.filter(({ user1 }) => user1.id != 1)
			.map(({ id, user1 }) => ({ id, user: user1 }));

		return `
			<div class="sidebar-section">
				<h3>Friends</h3>

				<div class="sidebar-section-list">
					${accepted.map(({ id, user }) => `
						<div class="sidebar-section-element">
							<div class="sidebar-section-element-info">
								<img src="${user.avatar}" class="sidebar-section-avatar" />

								<span class="sidebar-section-username">
									${user.username}
								<span>
							</div>

							<div class="sidebar-section-element-controls">
								<button data-action="message" data-id="${id}">
									<i class="bi bi-chat-left-dots-fill"></i>
								</button>
							</div>
						</div>
					`).join("")}
				</div>

				<div class="sidebar-subsection">
					<h5>Pending (received)</h5>
					<div class="sidebar-section-list">
						${pedingReceived.map(({ id, user }) => `
							<div class="sidebar-section-element">
								<div class="sidebar-section-element-info">
									<img src="${user.avatar}" class="sidebar-section-avatar" />

									<span class="sidebar-section-username">
										${user.username}
									<span>
								</div>

								<div class="sidebar-section-element-controls">
									<button data-action="refuse" data-id="${id}">
										<i class="bi bi-x-circle-fill"></i>
									</button>

									<button data-action="accept" data-id="${id}">
										<i class="bi bi-check-circle-fill"></i>
									</button>
								</div>
							</div>
						`).join("")}
					</div>
				</div>

				<div class="sidebar-subsection">
					<h5>Pending (sent)</h5>
					<div class="sidebar-section-list">
						${pedingSent.map(({ id, user }) => `
							<div class="sidebar-section-element">
								<div class="sidebar-section-element-info">
									<img src="${user.avatar}" class="sidebar-section-avatar" />

									<span class="sidebar-section-username">
										${user.username}
									<span>
								</div>

								<div class="sidebar-section-element-controls">
									<button data-action="cancel" data-id="${id}">
										<i class="bi bi-x-circle-fill"></i>
									</button>
								</div>
							</div>
						`).join("")}
					</div>
				</div>
			</div>
		`;
	}
}
