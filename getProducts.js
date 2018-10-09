const apiProducts = getProducts.API;
const BRANCH_ID = "145";
const queryString = `/products?branch_id=${BRANCH_ID}&page=1&results_per_page=300&viewUrl=true`;
const db = Singlenton.getInstance();
apiProducts({
  url: queryString,
  method: "get"
})
  .then(({ data }) => {
    console.log("Request fulfilled");
    return Promise.all(
      data.map(productObject => Singlenton.saveProduct(productObject))
    );
  })
  .then(response => console.log(response))
  .catch(error => console.error(error));
