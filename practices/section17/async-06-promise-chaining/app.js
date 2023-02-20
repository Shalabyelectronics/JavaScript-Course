const button = document.querySelector("button");
const output = document.querySelector("p");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
/*
const getPosition = opts => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      success => {
        resolve(success);
      },
      error => {},
      opts
    );
  });
  return promise;
};

const setTimer = duration => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return promise;
};

function trackUserHandler() {
  let positionData;
  getPosition()
    .then(posData => {
      positionData = posData;
      return setTimer(2000);
    })
    .then(data => {
      console.log(data, positionData);
    });
  setTimer(1000).then(() => {
    console.log('Timer done!');
  });
  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);
*/

function clearInputs() {
  document
    .querySelectorAll("input")
    .forEach((input) => (input.value = input.getAttribute("value")));
}
function ErrorInputs() {
  document
    .querySelectorAll("input")
    .forEach((input) => (input.value = "Error"));
}
clearInputs();

let firstName;
let lastName;
let email;

function setData() {
  firstName = "Shalaby";
  lastName = "Moahmed";
  email = "ShalabyCode@email.com";
}
// Step 1 without promises - Single Thread
/*

function clicked() {
  const newOutput = output.cloneNode(true);
  newOutput.innerText = "Button Clicked";
  document.body.appendChild(newOutput);
}

function getUserData(wait) {
  counter = 0;
  for (let i = 0; i < wait; i++) {
    counter += i;
  }
  setData();
}
getUserData(300000000);
console.log(firstName, lastName, email);
button.addEventListener("click", () => {
  clicked();
});

firstNameInput.value = firstName;
lastNameInput.value = lastName;
emailInput.value = email;
*/
// Step 2 with Browser Multithreading
/*
function setData() {
  firstName = "Shalaby";
  lastName = "Moahmed";
  email = "ShalabyCode@email.com";
}

function clicked() {
  const newOutput = output.cloneNode(true);
  newOutput.innerText = "Button Clicked";
  document.body.appendChild(newOutput);
}

function getUserData(wait) {
  counter = 0;
  for (let i = 0; i < wait; i++) {
    counter += i;
  }
  setData();
}
setTimeout(() => {
  getUserData(800000000);
}, 0);
console.log(firstName, lastName, email);
button.addEventListener("click", () => {
  clicked();
});
firstNameInput.value = firstName;
lastNameInput.value = lastName;
emailInput.value = email;
*/

// Step 3 : using Promise
/*
function getUserData(wait) {
  const promise = new Promise((resolve, reject) => {
    counter = 0;
    for (let i = 0; i < wait; i++) {
      counter += i;
    }
    if (false) {
      resolve("Done");
    } else {
      reject("Sorry there is an Error");
    }
  });
  return promise;
}
function start() {
  getUserData(800000000)
    .then(() => {
      setData();
    })
    .then(() => {
      button.addEventListener("click", () => {});
      firstNameInput.value = firstName;
      lastNameInput.value = lastName;
      emailInput.value = email;
    })
    .catch((err) => ErrorInputs());
}

start();
*/

// Step 4 using Async await

function setData() {
  firstName = "Shalaby";
  lastName = "Moahmed";
  email = "ShalabyCode@email.com";
}
async function updateUi() {
  firstNameInput.value = firstName;
  lastNameInput.value = lastName;
  emailInput.value = email;
}
async function getUserData(wait) {
  function looding() {
    counter = 0;
    for (let i = 0; i < wait; i++) {
      counter += i;
    }
  }

  await looding();

  await setData();
}

function clicked() {
  const newOutput = output.cloneNode(true);
  newOutput.innerText = "Button Clicked";
  document.body.appendChild(newOutput);
}

async function wait() {
  await setTimeout(getUserData.bind(null, 800000000), 0);
}
wait();
button.addEventListener("click", () => {
  clicked();
});
updateUi();
