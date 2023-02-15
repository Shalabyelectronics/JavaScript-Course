// Product class will creat an object that hold all product info (title,imageUrl,price,description)
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
// ShoppingCart class will create an Object that hold two methods and one field
class ShoppingCart {
  // items field that will holds all tems you added to cart
  items = [];
  addProduct(product) {
    this.items.push(product);
    this.totalOutput.innerHTML = `<h2>Total: \$${1}</h2>`;
  }
  // update Total and updateTotalUi this my try and I didn't use it for this project
  updateTotal() {
    this.currentPrice = document.querySelector("span");
    this.totalPrice = +this.currentPrice.innerText + +this.product.price;
  }
  updateTotalUi() {
    document.querySelector("span").innerText = this.totalPrice;
  }
  // render method will creat an shopCart Elementand return it to add it to app later.
  render() {
    const shopCartEl = document.createElement("section");
    shopCartEl.innerHTML = `
    <h2>Total:\$${0}</h2>
    <button>Order Now!</button>
    `;
    shopCartEl.className = "cart";
    this.totalOutput = shopCartEl.querySelector("h2");
    return shopCartEl;
  }
}

// ProductItem will get an product object from ProductList object and we will use it to render our products and add event listener for each with add to cart method that will use helper class App
class ProductItem {
  constructor(product) {
    this.product = product;
  }
  addToCart() {
    // Helper class App have a static method that point to shopping cart addProduct method.
    App.addProductToCart(this.product);
    // console.log("Adding product to cart...");
    // console.log(this.product);
    // const toCartClass = new ShopCart(this.product);
    // toCartClass.updateTotal();
    // toCartClass.updateTotalUi();
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
  ];

  render() {
    const productUl = document.createElement("ul");
    productUl.className = "product-list";

    for (const product of this.products) {
      const itemList = new ProductItem(product);
      const itemObj = itemList.render();
      productUl.append(itemObj);
    }
    return productUl;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById("app");
    this.cart = new ShoppingCart();
    const cartEl = this.cart.render();
    const productList = new ProductList();
    const productEl = productList.render();

    renderHook.append(cartEl);
    renderHook.append(productEl);
  }
}

class App {
  static cart;
  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }
  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
