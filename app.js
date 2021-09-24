let allData;
window.onload = async () => {
  await fetchData();
};
let allProducts;
const fetchData = async () => {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/movies/action",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMmEwMDRiYjUzZDAwMTViMTlmODkiLCJpYXQiOjE2MzIzMTU5MDQsImV4cCI6MTYzMzUyNTUwNH0.XEyGL0co4MoD-hfKjeEVQoXEjm_JQ91ygqIVkDcnVv4",
        },
      }
    );
    let products = await response.json();
    allproducts = await products;
    displayAll(allproducts);
  } catch (error) {
    console.log(error);
  }
};

const displayAll = async (products) => {
  let showProducts = document.getElementById("productstoshow");
  showProducts.innerHTML = "";

  console.log(products);

  products.forEach((element) => {
    console.log(element);
    showProducts.innerHTML += `
  
  
  <div id="moivieImage" class=" col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 px-1">
            <img
              class="img-fluid w-100 rounded "
              src=${element.imageUrl}
              alt=""
            />
            <p id="movieTitle"> ${element.title}</p>
            <p id="movieDescription">${element.description} </p>
            <p id="movieCategory"> ${element.category}</p>
          </div>`;
  });
};
