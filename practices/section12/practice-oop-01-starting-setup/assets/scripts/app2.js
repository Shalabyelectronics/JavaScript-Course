class SwapCards {
  constructor(
    activeBtnNode,
    pendingBoxClassName,
    doneBoxClassName,
    activeBtnAttr = "class"
  ) {
    this.activeBtn = Array.from(activeBtnNode).filter(
      (b) => !b.getAttribute(activeBtnAttr)
    );
    this.finishProjectSection = doneBoxClassName;
    this.activeProjectSection = pendingBoxClassName;
  }

  copyNodeCard = (e) => e.target.parentElement.cloneNode(true);

  evenListener = (e) => this.addeventListenersToBtn(e);

  addeventListenersToBtn = (e) => {
    e.target.removeEventListener("click", this.evenListener);
    const jobSection = e.target.parentElement.parentElement.parentElement.id;
    const copyNode = this.copyNodeCard(e);
    e.target.parentElement.remove();
    if (this.activeProjectSection === jobSection) {
      copyNode.lastElementChild.innerText = "Activate";
      copyNode.lastElementChild.addEventListener("click", this.evenListener);
      document
        .getElementById(this.finishProjectSection)
        .lastElementChild.append(copyNode);
    } else if (this.finishProjectSection === jobSection) {
      copyNode.lastElementChild.innerText = "Finish";
      copyNode.lastElementChild.addEventListener("click", this.evenListener);
      document
        .getElementById(this.activeProjectSection)
        .lastElementChild.append(copyNode);
    }
  };

  addEventListenerstoAllBtn = () =>
    this.activeBtn.forEach((b) =>
      b.addEventListener("click", this.evenListener)
    );
}
const btn = document.querySelectorAll("button");
const swapCard = new SwapCards(btn, "active-projects", "finished-projects");
swapCard.addEventListenerstoAllBtn();
