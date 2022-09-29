import axios from "axios";

export default class ShipService {
    static async getAll() {
      const response = await axios.get(
        "https://swapi.dev/api"
      );
      return response;
    }
    static async getSingleShip(id) {
      const response = await axios.get(
        `https://swapi.dev/api/starships/${id}`
      );
      return response;
    }
  }