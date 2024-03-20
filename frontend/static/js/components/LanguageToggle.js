import { LOCALES } from "/static/variables.js";
import { Abstract } from "./index.js";

export default class extends Abstract {
  constructor(props) {
    super(props);

    this.params = props;
  }

  async getHtml() {
    return `
			<div class="btn-group language-toggle__wrapper" role="group">
				<button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
					Language
				</button>

				<ul class="dropdown-menu dropdown-menu-end">
					${LOCALES.map(
            (lang) => `
						<li>
							<button class="dropdown-item ${i18next.language == lang ? "active" : ""}" type="button" data-link-locale=${lang}>
								${lang.toUpperCase()}
							</button>
						</li>
					`,
          ).join("")}
				</ul>
			</div>
		`;
  }
}
