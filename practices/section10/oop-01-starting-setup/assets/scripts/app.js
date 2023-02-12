class Product {
  constructor(
    title = "default",
    imageUrl = "https://quickbooks.intuit.com/oidam/intuit/sbseg/en_row/quickbooks/web/content/default-placeholder.png",
    price = 0,
    description = "No Description."
  ) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }
}

class ProductList {
  myProduct = [
    new Product(
      "Samsung smart tv",
      "https://images.samsung.com/is/image/samsung/p5/sa/tvs/smart-tv/highlights/smart-tv-f02-pc001.jpg?$ORIGIN_JPG$",
      "500",
      "A nice tv to have"
    ),
    new Product(
      "Platstation 5",
      "https://www.alhub.me/wp-content/uploads/2022/09/ps5-1-1591910417-1.png",
      "300",
      "Start to live an Adventure"
    ),
    new Product(),
  ];
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }
  render() {
    const productBoard = document.getElementById("app");
    const productUl = document.createElement("ul");
    productUl.className = "product-list";
    productBoard.append(productUl);
    for (const prod of this.product) {
      const createNewLi = document.createElement("li");
      createNewLi.className = "product-item";
      createNewLi.innerHTML = `
      <div>
      <img src="${prod.imageUrl}" alt="${prod.title}"/>

      <div class="product-item__content">
      <h2>${prod.title}</h2>
      <h3>\$${prod.price}</h3>
      <p>${prod.description}</p>
      <button>Add to cart</button>
      </div>
      </div>
      `;
      productUl.append(createNewLi);
    }
  }
}

const test = new ProductItem(new ProductList().myProduct);
test.render();
