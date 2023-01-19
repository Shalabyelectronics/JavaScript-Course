const task3Element = document.getElementById("task-3");

function anyText() {
  alert("Hi Shalaby!");
}
function userName(name) {
  alert(`Hi ${name}!`);
}

function callNames(name1, name2, name3) {
  return `${name1} , ${name2} ,${name3}`;
}
// anyText();
// userName("Shalaby");

task3Element.addEventListener("click", anyText);
alert(callNames("Shalaby", "Ali", "Khaled"));
