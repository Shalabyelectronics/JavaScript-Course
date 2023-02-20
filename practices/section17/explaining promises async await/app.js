const button = document.querySelector("button");
const output = document.querySelector("p");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");

function clearInputs() {
  document
    .querySelectorAll("input")
    .forEach((input) => (input.value = input.getAttribute("value")));
}
clearInputs();

function startStep1() {
  // Defined 3 variables
  let firstName;
  let lastName;
  let email;
  // It's a samulation Api lood
  function apiSamulation(wait) {
    counter = 0;
    for (let i = 0; i < wait; i++) {
      counter += i;
    }
    firstName = "Shalaby";
    lastName = "Moahmed";
    email = "ShalabyCode@email.com";
  }

  // Update Ui With new data that we got from API
  function updateUi() {
    firstNameInput.value = firstName;
    lastNameInput.value = lastName;
    emailInput.value = email;
  }

  // Will add clicked element to the page
  function clicked() {
    const newOutput = output.cloneNode(true);
    newOutput.innerText = "Button Clicked";
    document.body.appendChild(newOutput);
  }

  // calling Functions on order

  // Make an HTTP Request
  apiSamulation(250000000);

  // Update Our Page with new data
  updateUi();

  button.addEventListener("click", () => {
    clicked();
  });
}
// startStep1();

// ---------------------------------

// Step 2 with Browser Multithreading
function startStep2() {
  // For later use
  function ErrorInputs() {
    document
      .querySelectorAll("input")
      .forEach((input) => (input.value = "Error"));
  }

  // Defined 3 variables
  let firstName;
  let lastName;
  let email;
  // It's a samulation Api lood
  function apiSamulation(wait) {
    counter = 0;
    for (let i = 0; i < wait; i++) {
      counter += i;
    }
    firstName = "Shalaby";
    lastName = "Moahmed";
    email = "ShalabyCode@email.com";
  }

  // Update Ui With new data that we got from API
  function updateUi() {
    firstNameInput.value = firstName;
    lastNameInput.value = lastName;
    emailInput.value = email;
  }

  // Will add clicked element to the page
  function clicked() {
    const newOutput = output.cloneNode(true);
    newOutput.innerText = "Button Clicked";
    document.body.appendChild(newOutput);
  }

  // calling Functions on order

  // Make an HTTP Request
  setTimeout(apiSamulation.bind(null, 250000000), 0);

  // Update Our Page with new data
  updateUi();

  button.addEventListener("click", () => {
    clicked();
  });
}
// startStep2();

// ---------------------------------

// Step 3 : using Promise
function startStep3() {
  // For later use
  function ErrorInputs() {
    document
      .querySelectorAll("input")
      .forEach((input) => (input.value = "Error"));
  }

  // Defined 3 variables
  let firstName;
  let lastName;
  let email;
  // It's a samulation Api lood
  function apiSamulation(wait) {
    counter = 0;
    for (let i = 0; i < wait; i++) {
      counter += i;
    }
    firstName = "Shalaby";
    lastName = "Moahmed";
    email = "ShalabyCode@email.com";
  }

  // Update Ui With new data that we got from API
  function updateUi() {
    firstNameInput.value = firstName;
    lastNameInput.value = lastName;
    emailInput.value = email;
  }

  // Will add clicked element to the page
  function clicked() {
    const newOutput = output.cloneNode(true);
    newOutput.innerText = "Button Clicked";
    document.body.appendChild(newOutput);
  }

  // calling Functions on order

  // Make an HTTP Request
  const gettingData = new Promise((resolve) => {
    setTimeout(() => {
      return new Promise(() => {
        apiSamulation(250000000);
        resolve("Getting Data Done");
      });
    }, 0);
  });

  // Update Our Page with new data
  gettingData.then(() => updateUi());

  button.addEventListener("click", () => {
    clicked();
  });
}
// startStep3();

// ---------------------------------

// Step 4 : using Asunc /Await
function startStep4() {
  // For later use
  function ErrorInputs() {
    document
      .querySelectorAll("input")
      .forEach((input) => (input.value = "Error"));
  }

  // Defined 3 variables
  let firstName;
  let lastName;
  let email;
  // It's a samulation Api lood
  async function apiSamulation(wait) {
    counter = 0;
    for (let i = 0; i < wait; i++) {
      counter += i;
    }
    firstName = "Shalaby";
    lastName = "Moahmed";
    email = "ShalabyCode@email.com";
    console.log("apiSamulation Called");
  }

  // Update Ui With new data that we got from API
  async function updateUi() {
    firstNameInput.value = firstName;
    lastNameInput.value = lastName;
    emailInput.value = email;
    console.log("updateUi Called");
  }

  // Will add clicked element to the page
  function clicked() {
    const newOutput = output.cloneNode(true);
    newOutput.innerText = "Button Clicked";
    document.body.appendChild(newOutput);
  }

  // calling Functions on order

  // Make an HTTP Request
  async function getData() {
    setTimeout(
      new Promise(() => {
        apiSamulation(250000000);
      }),
      0
    );
  }

  async function startApp() {
    await getData();
    await updateUi();
  }
  startApp();

  button.addEventListener("click", () => {
    clicked();
  });
}
// startStep4();
