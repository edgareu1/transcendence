import { Abstract } from "/static/js/components/index.js";
import { Game } from "/static/js/pages/pong/index.js";

export default class extends Abstract {
  constructor(props) {
    super(props);

    this.params = props;
  }

  async addFunctionality() {
    //it is hardcoded but should be properties being received by app management
    let game = new Game("ansilva-", "tpereira");
    game.draw();
  }

  async getHtml() {
    return `
		<h1 class="mb-4">
				${i18next.t("pong.title")}
			</h1>
		<div id="pong" tabindex="1" class="d-flex flex-column align-items-center m-4">
			<div class="d-flex flex-column align-items-center">
				<canvas id="canvas" width="600" height="400" class="bg-dark"></canvas>
			</div>
			<div class="buttons d-flex justify-content-around mt-2">
				<button id="start-btn" type="button" class="btn pong-buttons w-50 m-1 shadow">${i18next.t("pong.buttons.start")}</button>
				<button id="pause-btn" type="button" class="btn pong-buttons w-50 m-1 shadow">${i18next.t("pong.buttons.pause")}</button>
				<button id="restart-btn" type="button" class="btn pong-buttons w-50 m-1 shadow">${i18next.t("pong.buttons.restart")}</button>
			</div>
		</div>

		<div class="modal fade" tabindex="-1" role="dialog" id="message-modal">
			<div class="modal-dialog modal-dialog-centered" role="document">
				<div class="modal-content">
					<div class="modal-body">
						<h5 id="message"></h5>
					</div>
					<div class="modal-footer">
						<button type="button" id="message-modal-close" class="btn btn-secondary" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>
		`;
  }
}
