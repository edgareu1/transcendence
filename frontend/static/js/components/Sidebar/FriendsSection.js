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
		const invitations = this.data.filter(({ was_accepted, was_canceled, was_refused, user1 }) => !was_accepted && !was_canceled && !was_refused && (user1.id == 1))
			.map(({ id, user2 }) => ({ id, user: user2 }));

		return `
			<div>
				<button class="btn btn-toggle text-start text-white opacity-75 w-100 p-0 border-0 mb-2" data-bs-toggle="collapse" data-bs-target="#friends-list" aria-expanded="false">
					Friends
				</button>

				<div id="friends-list" class="collapse">
					<ul class="list-unstyled d-flex flex-column gap-2">
						${accepted.map(({ id, user }) => `
							<div class="sidebar-section-element d-flex justify-content-between gap-1 p-1 bg-light rounded">
								<div class="d-flex align-items-center gap-1">
									<img src="${user.avatar}" class="rounded-circle" />

									<span class="lh-1">
										${user.username}
									<span>
								</div>

								<div class="d-flex align-items-center gap-1">
									<button class="bg-transparent p-1 border-0" data-action="message" data-id="${id}">
										<i class="bi bi-chat-left-dots-fill"></i>
									</button>
								</div>
							</div>
						`).join("")}
					</ul>
				</div>

				<div class="mt-2">
					<button class="btn btn-toggle d-flex gap-2 align-items-center text-start text-white opacity-75 w-100 p-0 border-0 mb-2" data-bs-toggle="collapse" data-bs-target="#friends-received" aria-expanded="false">
						Invitations

						<span class="badge text-bg-secondary">
							${invitations.length}
						</span>
					</button>

					<div id="friends-received" class="collapse">
						<ul class="list-unstyled d-flex flex-column gap-2">
							${invitations.map(({ id, user }) => `
								<div class="sidebar-section-element d-flex justify-content-between gap-1 p-1 bg-light rounded">
									<div class="d-flex align-items-center gap-1">
										<img src="${user.avatar}" class="rounded-circle" />

										<span class="lh-1">
											${user.username}
										<span>
									</div>

									<div class="d-flex align-items-center gap-1">
										<button class="bg-transparent p-1 border-0" data-action="refuse" data-id="${id}">
											<i class="bi bi-x-circle-fill"></i>
										</button>

										<button class="bg-transparent p-1 border-0" data-action="accept" data-id="${id}">
											<i class="bi bi-check-circle-fill"></i>
										</button>
									</div>
								</div>
							`).join("")}
						</ul>
					</div>
				</div>
			</div>
		`;
	}
}
