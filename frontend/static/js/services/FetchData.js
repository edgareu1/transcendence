export default class FetchData {
  constructor() {}

  static async getData() {
    return fetch("/static/js/db.json")
      .then((response) => response.json())
      .catch((error) => console.log(error.message));
  }
}
