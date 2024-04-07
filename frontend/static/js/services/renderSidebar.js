import { Sidebar } from "/static/js/components/index.js";

const renderSidebar = async () => {
  const sidebar = new Sidebar();
  document.querySelector("#sidebar").innerHTML = await sidebar.getHtml();
}

export default renderSidebar;
