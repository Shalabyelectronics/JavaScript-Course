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

class ProductItem {
  constructor(product) {
    this.product = product;
  }
  addToCart() {
    console.log("Adding product to cart...");
    console.log(this.product);
    const toCartClass = new ShopCart(this.product);
    toCartClass.updateTotal();
    toCartClass.updateTotalUi();
  }
  render() {
    const createNewLi = document.createElement("li");
    createNewLi.className = "product-item";
    createNewLi.innerHTML = `
      <div>
      <img src="${this.product.imageUrl}" alt="${this.product.title}"/>

      <div class="product-item__content">
      <h2>${this.product.title}</h2>
      <h3>\$${this.product.price}</h3>
      <p>${this.product.description}</p>
      <button>Add to cart</button>
      </div>
      </div>
      `;
    const addBtn = createNewLi.querySelector("button");
    addBtn.addEventListener("click", this.addToCart.bind(this));
    return createNewLi;
  }
}

class ShopCart {
  constructor(product) {
    this.product = product;
  }
  allProduct = [];
  addProducts(newProduct) {
    if (this.allProduct) {
      for (const product of this.allProduct) {
        if (product.title in newProduct) {
          continue;
        }
        this.allProduct.push(newProduct);
      }
    }
    return this.allProduct;
  }
  updateTotal() {
    // const newTotal = document.querySelector("span");
    // const totalPrice = this.currentPrice + this.product.price;
    // newTotal.innerText = totalPrice;
    this.currentPrice = document.querySelector("span");
    this.totalPrice = +this.currentPrice.innerText + +this.product.price;
  }
  updateTotalUi() {
    document.querySelector("span").innerText = this.totalPrice;
  }
  render() {
    const shopCartEl = document.createElement("section");
    shopCartEl.innerHTML = `
    <h2>Total:\$<span>${0}</span></h2>
    <button>Order Now!</button>
    `;
    shopCartEl.className = "cart";
    return shopCartEl;
  }
}

class ProductList {
  products = [
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

  render() {
    const productBoard = document.getElementById("app");
    const productUl = document.createElement("ul");
    productUl.className = "product-list";

    for (const product of this.products) {
      const itemList = new ProductItem(product);
      const itemObj = itemList.render();
      productUl.append(itemObj);
    }
    productBoard.append(productUl);
  }
}

class Shop {
  render() {
    const shopApp = document.getElementById("app");
    const shopCart = new ShopCart();
    shopApp.append(shopCart.render());
    const myProducts = new ProductList();
    myProducts.render();
  }
}

new Shop().render();
