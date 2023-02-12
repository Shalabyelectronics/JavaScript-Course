const productList = {
  myProduct: [
    {
      title: "Samsung smart tv",
      imageUrl:
        "https://images.samsung.com/is/image/samsung/p5/sa/tvs/smart-tv/highlights/smart-tv-f02-pc001.jpg?$ORIGIN_JPG$",
      price: "500",
      description: "A nice tv to have",
    },
    {
      title: "Platstation 5",
      imageUrl:
        "https://www.alhub.me/wp-content/uploads/2022/09/ps5-1-1591910417-1.png",
      price: "300",
      description: "Start to live an Adventure",
    },
  ],
  render() {
    const productBoard = document.getElementById("app");
    const productUl = document.createElement("ul");
    productUl.className = "product-list";
    productBoard.append(productUl);

    for (const product of this.myProduct) {
      const createNewLi = document.createElement("li");
      createNewLi.className = "product-item";
      createNewLi.innerHTML = `
      <div>
      <img src="${product.imageUrl}" alt="${product.title}"/>
      
      <div class="product-item__content">
      <h2>${product.title}</h2>
      <h3>\$${product.price}</h3>
      <p>${product.description}</p>
      <button>Add to cart</button>
      </div>
      </div>
      `;
      productUl.append(createNewLi);
    }
  },
};

productList.render();
