import { Ui } from "./ui.module.js";

export class Details {
  constructor(id) {
    this.ui = new Ui();
    document.querySelector(".btn-close").addEventListener("click", () => {
      document.querySelector(".games").classList.remove("d-none");
      document.querySelector(".details").classList.add("d-none");
    });

    this.getDetails(id);
  }

  async getDetails(id) {
    const loading = document.querySelector(".loading");
    loading.classList.remove("d-none");
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "9ef2b153e4msh00325f794365f8ep1c0c70jsn287088805176",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    );
    const response = await api.json();
    this.ui.displayDetails(response);
    loading.classList.add("d-none");
  }
}
