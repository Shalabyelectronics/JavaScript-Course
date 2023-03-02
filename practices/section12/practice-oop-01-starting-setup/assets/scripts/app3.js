// First step we need to create a Project list Class the mani goal of it to select all project items inside each box.

// Second step we are going to create another class that calss will be Project Item the main goal of it is to addEvent listiner for an action button for each item.

// Explain how to Add an Event listenner for a project item for each prject type.
// 1- we need to create two methods inside Project list Class as below
//      *- switchProject method and it will switch project between active and finished project instance.
//      **- add project method that will add project from instance A to instance B and it will update the action button as will between finish and activate

class CreateComponent {
  constructor(info, className, parentSelector) {
    this.info = info;
    this.className = className;
    this.parentSelector = parentSelector;
    this.creatInfoBox();
  }
  creatInfoBox() {
    const infoElement = document.createElement("div");
    infoElement.classList.add(this.className);
    infoElement.innerHTML = `
    <p>
    ${this.info}
    </p>`;
    const parentElement = document.querySelector(this.parentSelector);
    parentElement.append(infoElement);
  }
}

class DOMHelper {
  static removeEventsonElements(projectElement) {
    const copyElement = projectElement.cloneNode(true);
    projectElement.replaceWith(copyElement);
    return projectElement;
  }
  static switchProjectTo(projectId, destenationType) {
    // console.log(type, projectId);
    const destenation = document.querySelector(
      `#${destenationType}-projects ul`
    );
    let projectElement = document.getElementById(`${projectId}`);
    destenation.append(projectElement);
    projectElement = this.removeEventsonElements(projectElement);
  }
}

class ProjectItem {
  constructor(id, switchhandlerFn) {
    this.id = id;
    this.switchHandler = switchhandlerFn;
    this.setSwitchHandlerBtn();
    this.setInfoBtn();
  }
  setSwitchHandlerBtn() {
    // console.log("Current project id", this.id);
    // console.log("Current project switch handler", this.switchHandler);
    const switchButton = document.querySelector(
      `#${this.id} button:last-of-type`
    );
    switchButton.addEventListener(
      "click",
      this.switchHandler.bind(null, this.id)
    );
  }
  setInfoBtn() {
    const infoBtn = document.querySelector(`#${this.id} button`);
    const infoData = document
      .querySelector(`#${this.id}`)
      .getAttribute("data-extra-info");
    infoBtn.addEventListener("click", () => {
      if (document.querySelector(".info")) {
        document.querySelector(".info").remove();
        new CreateComponent(infoData, "info", "body");
      } else {
        new CreateComponent(infoData, "info", "body");
      }
    });
  }
  update(switchhandlerFn, type) {
    this.switchHandler = switchhandlerFn;
    const switchBtn = document.querySelector(`#${this.id} button:last-of-type`);
    const switchInnerText = type === "active" ? "Finish" : "Activate";
    switchBtn.innerText = switchInnerText;
    this.setSwitchHandlerBtn();
    this.setInfoBtn();
  }
}

class ProjectList {
  projectItems = [];
  constructor(type) {
    this.type = type;
    this.allProjectItemsNode = document.querySelectorAll(
      `#${this.type}-projects li`
    );
    // Below will create an Objects from Project Items
    for (const project of this.allProjectItemsNode) {
      this.projectItems.push(
        new ProjectItem(project.id, this.switchProject.bind(this))
      );
    }
  }

  switchHandlerFunction(switchHandlerCallback) {
    this.switchHandler = switchHandlerCallback;
  }
  addProject(projectItem) {
    this.projectItems.push(projectItem);
    // console.log(projectItem.id, this.type);
    DOMHelper.switchProjectTo(projectItem.id, this.type);
    projectItem.update(this.switchProject.bind(this), this.type);
  }
  switchProject(projectId) {
    // Switch project must remove the current project item from the current instance then add it to other instance throw addProject method when the event fired
    // console.log("Passed to switch Method", projectId);
    const projectItem = this.projectItems.find((p) => p.id === projectId);
    this.switchHandler(projectItem);
    this.projectItems = this.projectItems.filter((p) => p.id !== projectId);
    // projectItem.setSwitchHandlerBtn();
    // console.log("Inside the switchProject", this);
    // console.log("Current project items", projectId);
  }
}

class App {
  static init() {
    const activeProjectList = new ProjectList("active");
    const finishedProjectList = new ProjectList("finished");
    activeProjectList.switchHandlerFunction(
      finishedProjectList.addProject.bind(finishedProjectList)
    );
    finishedProjectList.switchHandlerFunction(
      activeProjectList.addProject.bind(activeProjectList)
    );
  }
}

App.init();
