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
}

const navigateTo = (url) => {
	history.pushState(null, null, url);
	router();
};

const router = async () => {
	let thisRoute = ROUTES.find(route => doesPathMatch(route.path));

	if (!thisRoute) {
		thisRoute = ROUTES[0];
	}

	const page = new thisRoute.page({ title: thisRoute.title });

	document.querySelector("#app").innerHTML = await page.getHtml();
	document.title = thisRoute.title;

	await page.addFunctionality();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
	document.body.addEventListener("click", e => {
		if (e.target.matches("[data-link]")) {
			e.preventDefault();
			navigateTo(e.target.href);
		}
	});

	router();
});
