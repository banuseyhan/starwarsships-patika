import axios from "axios";

export default class service {
  static async getAll() {
    const response = await axios.get("https://swapi.dev/api/starships/");
    return response;
  }
  static async getSinglePage(id) {
    const response = await axios.get(`https://swapi.dev/api/starships/${id}`);
    return response;
  }
}
