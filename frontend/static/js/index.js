import Dashboard from "./pages/Dashboard.js";
import Home from "./pages/Home.js";
import SignIn from "./pages/SignIn.js";
import SignUp from "./pages/SignUp.js";

const ROUTES = [
	{ path: "/", title: "Home", page: Home },
	{ path: "/sign-up", title: "Sign-up", page: SignUp },
	{ path: "/sign-in", title: "Sign-in", page: SignIn },
	{ path: "/dashboard", title: "Dashboard", page: Dashboard }
];

const doesPathMatch = (path) => {
	const regex = new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

	return (location.pathname.match(regex) !== null)
};

const router = async () => {
	let thisRoute = ROUTES.find(route => doesPathMatch(route.path));

	if (!thisRoute) {
		thisRoute = ROUTES[0];
	}

	const page = new thisRoute.page({ title: thisRoute.title });

	document.querySelector("#app").innerHTML = await page.getHtml();
	document.title = thisRoute.title;

	page.addFunctionality();
};

const navigateTo = (url) => {
	history.pushState(null, null, url);
	router();
};

const initi18next = async () => {
	const locales = ['en', 'pt', 'es'];

	await Promise.all(locales.map(async locale => {
		return fetch(`/static/locales/${locale}.json`)
			.then(res => {
				if (!res.ok) {
					throw new Error(`Failed to fetch translation for ${locale}`);
				}
				return res.json();
			})
			.then(jsonData => {
				return {
					[locale]: {
						translation: jsonData
					}
				}
			})
			.catch(error => {
				throw new Error(`Failed to fetch or parse the translation for ${locale}: ${error}`);
			});
		})).then(localesData => {
			i18next.init({
				lng: locales[0],
				fallbackLng: locales[0],
				resources: localesData.reduce((acc, curr) => ({ ...acc, ...curr }), {})
			});
			i18next.languages = ['en', 'pt', 'es'];
			i18next.on('languageChanged', router)
		})
		.catch(error => {
			throw new Error(`Failed to initiate the i18next: ${error}`);
		});
};

document.addEventListener("DOMContentLoaded", () => {
	document.body.addEventListener("click", e => {
		if (e.target.matches("[data-link]")) {
			e.preventDefault();
			navigateTo(e.target.href);
		}
	});

	initi18next().then(router);
});
