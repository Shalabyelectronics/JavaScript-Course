const addListenerBtn = document.getElementById("add-listener-btn");
const clickableBtn = document.getElementById("clickable-btn");
const messageInput = document.getElementById("click-message-input");

function printMessage() {
  const value = messageInput.value;
  console.log(value || "Clicked me!");
}

function addListener() {
  clickableBtn.addEventListener("click", printMessage);
}

addListenerBtn.addEventListener("click", addListener);

function test1() {
  console.log("I'm the test one being called from test2");
}
function test2() {
  console.log("I'm the test two and im going to call test1");
  test1();
}
