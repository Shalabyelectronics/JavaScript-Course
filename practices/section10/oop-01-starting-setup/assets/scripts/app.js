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

class ElementAttribute {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class Componant {
  constructor(renderHookId) {
    this.hookId = renderHookId;
  }
  creatRootElement(tag, cssClass, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClass) {
      rootElement.className = cssClass;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

// ShoppingCart class will create an Object that hold two methods and one field
class ShoppingCart extends Componant {
  constructor(hookId) {
    super(hookId);
  }
  // items field that will holds all tems you added to cart
  items = [];

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: \$${this.getTotal.toFixed(
      2
    )}</h2>`;
  }

  get getTotal() {
    return this.items.reduce(
      (prevoiseValue, currentValue) => prevoiseValue + +currentValue.price,
      0
    );
  }

  addProduct(product) {
    const updateItems = [...this.items];
    updateItems.push(product);
    this.cartItems = updateItems;
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
    const cartEl = this.creatRootElement("section", "cart");
    cartEl.innerHTML = `
    <h2>Total:\$${0}</h2>
    <button>Order Now!</button>
    `;
    this.totalOutput = cartEl.querySelector("h2");
  }
}

// ProductItem will get an product object from ProductList object and we will use it to render our products and add event listener for each with add to cart method that will use helper class App
class ProductItem extends Componant {
  constructor(product, hookId) {
    super(hookId);
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
    const createNewLi = this.creatRootElement("li", "product-item");
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
  }
}

class ProductList extends Componant {
  constructor(renderHookId) {
    super(renderHookId);
  }
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
    this.creatRootElement("ul", "product-list", [
      new ElementAttribute("id", "product-list"),
    ]);

    for (const product of this.products) {
      const itemList = new ProductItem(product, "product-list");
      const itemObj = itemList.render();
    }
  }
}

class Shop {
  render() {
    this.cart = new ShoppingCart("app");
    this.cart.render();
    const productList = new ProductList("app");
    productList.render();
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
