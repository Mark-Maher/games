/*async function getGames(category) {
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

  getGamesFromLink();
  displayGames(response);
  showDetails();
  loading.classList.add("d-none");
}

function displayGames(data) {
  let gamesBox = "";

  for (let i = 0; i < data.length; i++) {
    gamesBox += `            <div data-id="${data[i].id}" class="col-xl-3 col-lg-4 col-md-6 game-card">
    <div class="card" >
      <div class="inner p-3">
        <figure>
          <img
            class="w-100 rounded-2"
            src="${data[i].thumbnail}"
            alt="${data[i].title}"
          />
        </figure>
        <figcaption class="mb-3">
          <div class="hstack justify-content-between mb-2">
            <h3 class="fs-5">${data[i].title}</h3>
            <span class="badge text-bg-primary p-2">Free</span>
          </div>
          <p
            class="card-text small text-center opacity-50 text-white"
          >
            ${data[i].short_description}
          </p>
        </figcaption>
      </div>
      <footer
        class="card-footer small hstack justify-content-between"
      >
        <span class="badge badge-bg">${data[i].genre}</span>
        <span class="badge badge-bg">${data[i].platform}</span>
      </footer>
    </div>
  </div>`;
  }
  document.querySelector("#gamesData").innerHTML = gamesBox;
}

async function getDetails(id) {
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
  // console.log(response.id);
  displayDetails(response);
  document.querySelector(".btn-close").addEventListener("click", () => {
    document.querySelector(".games").classList.remove("d-none");
    document.querySelector(".details").classList.add("d-none");
  });
  loading.classList.add("d-none");
}

function displayDetails(data) {
  let content = "";

  content += `   <div class="col-md-4">
  <img src="${data.thumbnail}" class="w-100" alt="image details" />
</div>
<div class="col-md-8">
  <h3>Title: ${data.title}</h3>
  <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
  <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
  <p>Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
  <p class="small">${data.description}</p>
  <a id="btnClose" class="btn btn-outline-warning text-white" target="_blank" href="${data.game_url}">Show Game</a>
</div>`;
  document.querySelector("#gamesDetails").innerHTML = content;
}

function showDetails() {
  const gameCard = document.querySelectorAll(".game-card");
  for (let i = 0; i < gameCard.length; i++) {
    gameCard[i].addEventListener("click", function () {
      document.querySelector(".games").classList.add("d-none");
      document.querySelector(".details").classList.remove("d-none");
      gameId = gameCard[i].getAttribute("data-id");
      getDetails(gameId);
    });
  }
}

function getGamesFromLink() {
  const link = document.querySelectorAll(".navbar-nav li a");
  for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function (e) {
      const categoryName = e.target.getAttribute("data-category");

      document.querySelector(".active").classList.remove("active");
      e.target.classList.add("active");
      getGames(categoryName);
    });
  }
}

getGames("mmorpg");
getDetails();
*/

/* OOP */

import { Games } from "./games.module.js";

new Games();
