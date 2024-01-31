import { Ui } from "./ui.module.js";
import { Details } from "./details.module.js";

export class Games {
  constructor() {
    const categoryList = document.querySelectorAll(".navbar-nav li a");
    for (let i = 0; i < categoryList.length; i++) {
      categoryList[i].addEventListener("click", (e) => {
        const categoryName = e.target.getAttribute("data-category");
        document
          .querySelector(".navbar-nav li a.active")
          .classList.remove("active");
        e.target.classList.add("active");
        this.getGames(categoryName);
      });
    }

    this.getGames("mmorpg");
    this.ui = new Ui();
  }

  async getGames(category) {
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
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      options
    );

    const response = await api.json();
    this.ui.displayGames(response);
    this.showDetails();
    loading.classList.add("d-none");
  }

  showDetails() {
    const gameCard = document.querySelectorAll(".game-card");

    for (let i = 0; i < gameCard.length; i++) {
      gameCard[i].addEventListener("click", (e) => {
        const id = gameCard[i].getAttribute("data-id");
        const details = new Details(id);
        document.querySelector(".games").classList.add("d-none");
        document.querySelector(".details").classList.remove("d-none");
      });
    }
  }
}
