const btn = document.querySelectorAll("button");

const finishedProject = (e) => {
  e.target.removeEventListener("click", finishedProject);
  const copyNode = e.target.parentElement.cloneNode(true);
  e.target.parentElement.remove();
  copyNode.addEventListener("click", activeProject);
  document.getElementById("active-projects").lastElementChild.append(copyNode);
};

const activeProject = (e) => {
  e.target.removeEventListener("click", activeProject);
  const copyNode = e.target.parentElement.cloneNode(true);
  e.target.parentElement.remove();
  copyNode.addEventListener("click", finishedProject);
  document
    .getElementById("finished-projects")
    .lastElementChild.append(copyNode);
};

const swapCards = (nodeElement) => {
  nodeElement.target.removeEventListener("click", swapCards);
  const jobSection =
    nodeElement.target.parentElement.parentElement.parentElement.id;
  const copyNode = nodeElement.target.parentElement.cloneNode(true);
  nodeElement.target.parentElement.remove();
  if (jobSection === "active-projects") {
    copyNode.lastElementChild.innerText = "Activate";
    copyNode.lastElementChild.addEventListener("click", swapCards);
    document
      .getElementById("finished-projects")
      .lastElementChild.append(copyNode);
  } else if (jobSection === "finished-projects") {
    copyNode.lastElementChild.innerText = "Finish";
    copyNode.lastElementChild.addEventListener("click", swapCards);
    document
      .getElementById("active-projects")
      .lastElementChild.append(copyNode);
  }
};

// Filter only action Buttons

const actionBtn = Array.from(btn).filter((b) => !b.getAttribute("class"));

actionBtn.forEach((b) => b.addEventListener("click", swapCards));

/*
Event Object 

e.target.innerText
e.target.parentElement

*/
