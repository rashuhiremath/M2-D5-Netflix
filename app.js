var myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMmEwMDRiYjUzZDAwMTViMTlmODkiLCJpYXQiOjE2MzI0Nzc4NzAsImV4cCI6MTYzMzY4NzQ3MH0.kB4QT4bmKcCrFkXoH9T3S99NMuhWNlKoMY7DJjdqerg"
);
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

const fetching = async () => {
  try {
    await fetch(
      "https://striveschool-api.herokuapp.com/api/movies",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        let genre = document.getElementById("containerForGenre");
        genre.innerHTML = "";
        let newinnerHtml = `<div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Home
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#" onclick='fetchMovies("${data[0]}")'>${data[0]}</a>
        <a class="dropdown-item" href="#" onclick='fetchMovies("${data[1]}")'>${data[1]}</a>
        <a class="dropdown-item" href="#" onclick='fetchMovies("${data[2]}")'>${data[2]}</a>
      </div>
    </div>`;
        genre.innerHTML += newinnerHtml;
      });
  } catch (error) {
    console.log(error);
  }
};

const fetchMovies = async (querry) => {
  document.querySelector("#dropdownMenuButton").innerHTML = querry;
  console.log(querry);
  await fetch(
    `https://striveschool-api.herokuapp.com/api/movies/${querry}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let romanceMovies = document.querySelector(".productstoshow");
      romanceMovies.innerHTML = "";
      data.forEach((element) => {
        let newMovies = ` <div  class=" col-2 px-1 movieImage" style="
        height: 12rem" >
        <img
          class=" img-fluid w-100  h-40  "
          style=" height: 7rem"
          src=${element.imageUrl}
          alt=""
        <div class="card-body">
        <p class="card-text text-white">${element.name}</p>
        <p class="card-text text-white">${element.description}</p>
        <p class="card-text text-white">${element.category}</p>
        </div>
        </div>`;
        romanceMovies.innerHTML += newMovies;
      });
    });
};

window.onload = async () => {
  await fetching();
};
