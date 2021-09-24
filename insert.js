const BASE_URL = "https://striveschool-api.herokuapp.com/api/movies ";
const headers = new Headers({
  "Content-Type": "application/json",
  Authorization:
    "Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMmEwMDRiYjUzZDAwMTViMTlmODkiLCJpYXQiOjE2MzIzMTU5MDQsImV4cCI6MTYzMzUyNTUwNH0.XEyGL0co4MoD-hfKjeEVQoXEjm_JQ91ygqIVkDcnVv4",
});

const fetchMovies = async (event) => {
  event.preventDefault();

  const title = document.querySelector("input[name=title]").value;
  const description = document.querySelector("input[name=description]").value;
  const category = document.querySelector("input[name=category]").value;
  const imageUrl = document.querySelector("input[name=imageUrl]").value;
  const submitbody = JSON.stringify({
    name: title.value,
    description: description.value,
    imageUrl: imageUrl.value,
    category: category.value,
  });
  console.log(submitbody);
  await fetch(BASE_URL, {
    headers,
    method: "POST",
    body: submitbody,
  })
    .then((res) => res.json())
    .then((data) => console.log(data));

  event.target.reset();
  window.location.replace("/");
};

window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = fetchMovies;
};
