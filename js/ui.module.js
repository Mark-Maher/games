export class Ui {
  displayGames(data) {
    let gamesBox = "";

    for (let i = 0; i < data.length; i++) {
      gamesBox += `            <div data-id="${data[i].id}" class="col-xl-3 col-lg-4 col-md-6 game-card">
      <div class="card" >
        <div class="inner p-3 ">
          <figure>
            <img
              class="w-100 rounded-2"
              src="${data[i].thumbnail}"
              alt="${data[i].title}"
            />
          </figure>
          <figcaption>
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
        class="card-footer small  hstack justify-content-between"
      >
        <span class="badge badge-bg ">${data[i].genre}</span>
        <span class="badge badge-bg">${data[i].platform}</span>
      </footer>

      </div>
    </div>`;
    }
    document.querySelector("#gamesData").innerHTML = gamesBox;
  }

  displayDetails(data) {
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
}
