import { Navbar } from "/static/js/components/index.js";
import {
  GeneralDashboard,
  IndividualDashboard,
  Home,
  SignIn,
  SignUp,
  Pong,
} from "/static/js/pages/index.js";

const ROUTES = [
  { path: "/", title: "Home", page: Home },
  { path: "/pong", title: "Pong", page: Pong },
  { path: "/sign-up", title: "Sign-up", page: SignUp },
  { path: "/sign-in", title: "Sign-in", page: SignIn },
  {
    path: "/dashboard/general",
    title: "General statistics",
    page: GeneralDashboard,
  },
  {
    path: "/dashboard/individual/:userId",
    title: "Individual statistics",
    page: IndividualDashboard,
  },
];

const getParams = (path) => {
  const paramKeys = path.match(/\/:(\w+)*/g);
  const regex = new RegExp(
    "^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$",
  );

  let params = {};

  const paramValues = location.pathname.match(regex);

  paramKeys?.forEach((key, i) => {
    let paramKey = key.replace("/:", "");
    params[paramKey] = paramValues[i + 1];
  });

  return params;
};

const doesPathMatch = (path) => {
  const regex = new RegExp(
    "^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$",
  );

  return location.pathname.match(regex) !== null;
};

const renderPage = async () => {
  let thisRoute = ROUTES.find((route) => doesPathMatch(route.path));

  if (!thisRoute) {
    thisRoute = ROUTES[0];
  }

  let params = {};

  if (thisRoute.path.search(":") !== -1) params = getParams(thisRoute.path);

  const page = new thisRoute.page({ title: thisRoute.title, ...params });

  const navbar = new Navbar();
  document.querySelector("#navbar").innerHTML = await navbar.getHtml();

  document.querySelector("#app").innerHTML = await page.getHtml();
  document.title = thisRoute.title;
  page.addFunctionality();
};

export default renderPage;
