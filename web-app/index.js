// Note: 'http://' or 'https://' is required
const apiUrl = "http://localhost:3000/api/products";

axios
  .get(apiUrl)
  .then((response) => {
    const products = response.data;

    for (const product of products) {
      console.log(product.name);

      const listElement = document.getElementById("productList");
      const newListItemElement = document.createElement("li");
      newListItemElement.classList.add("product");

      const newImageElement = document.createElement("img");
      newImageElement.src = `./thumbnails/${product.imageUrl}`;
      newImageElement.alt = product.name;

      const nameElement = document.createElement("div");
      nameElement.innerText = product.name;

      const categoryElement = document.createElement("div");
      categoryElement.innerText = product.category;

      const priceElement = document.createElement("div");
      priceElement.innerText = `\$${product.price}`;

      newListItemElement.appendChild(newImageElement);
      newListItemElement.appendChild(nameElement);
      newListItemElement.appendChild(categoryElement);
      newListItemElement.appendChild(priceElement);

      listElement.appendChild(newListItemElement);
    }
  })
  .catch((error) => {
    debugger;
  });
