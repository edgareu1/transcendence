import { Abstract } from "/static/js/components/index.js";

export default class extends Abstract {
  constructor(props) {
    super(props);

    this.params = props;
  }

  async getHtml() {
    return `
			<h1>
				${i18next.t("home.title")}
			</h1>
		`;
  }
}
