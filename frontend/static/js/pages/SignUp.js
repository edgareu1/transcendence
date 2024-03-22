import { Abstract } from "/static/js/components/index.js";

export default class extends Abstract {
  constructor(props) {
    super(props);

    this.params = props;
  }

  async addFunctionality() {
    document.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault();

      const form = e.target;

      if (form.checkValidity()) {
        const formData = new FormData(e.target);
        const data = {};
        for (const key of formData.keys()) {
          data[key] = formData.get(key);
        }

        console.log(data);
      } else {
        e.stopPropagation();

        form.classList.add("was-validated");
      }
    });
  }

  async getHtml() {
    return `
			<h1 class="mb-4">
				${i18next.t("signUp.title")}
			</h1>

			<form class="needs-validation" novalidate>
				<div class="mb-4">
					<label for="email" class="form-label">
						${i18next.t("signUp.fields.email.label")}
					</label>
					<div class="input-group has-validation">
						<input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" required>
						<div class="invalid-feedback">
							${i18next.t("signUp.fields.email.invalidFeedback")}
						</div>
					</div>
					<div id="emailHelp" class="form-text">
						${i18next.t("signUp.fields.email.help")}
					</div>
				</div>

				<div class="mb-4">
					<label for="username" class="form-label">
						${i18next.t("signUp.fields.username.label")}
					</label>
					<div class="input-group has-validation">
						<input type="text" class="form-control" id="username" name="username" aria-describedby="usernameHelp" minlength="5" required>
						<div class="invalid-feedback">
							${i18next.t("signUp.fields.username.invalidFeedback")}
						</div>
					</div>
					<div id="usernameHelp" class="form-text">
						${i18next.t("signUp.fields.username.help")}
					</div>
				</div>

				<div class="mb-4">
					<label for="password" class="form-label">
						${i18next.t("signUp.fields.password.label")}
					</label>
					<div class="input-group has-validation">
						<input type="password" class="form-control" id="password" name="password" minlength="8" required>
						<div class="invalid-feedback">
							${i18next.t("signUp.fields.password.invalidFeedback")}
						</div>
					</div>
				</div>

				<button type="submit" class="btn btn-primary">
					${i18next.t("signUp.submitButton")}
				</button>
			</form>
		`;
  }
}
