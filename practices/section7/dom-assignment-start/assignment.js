// TASK 1
/*
Select this task (in two different ways at least!) and change the background-color to black, text-color to white.
*/

const firstTask1 = document.querySelector("ol li:first-child");
const firstTask2 = document.querySelector("#task-1");
firstTask1.style.color = "#fff";
firstTask1.style.backgroundColor = "#000";
firstTask2.style.color = "#fff";
firstTask2.style.backgroundColor = "#000";

// TASK 2
/*
Change the document title (in <head></head>) to "Assignment - Solved!". Use two different ways for getting access to the <title> element: Via querySelector on document and via querySelector on the certain property you find in document.
*/

const title1 = (document.head.getElementsByTagName("title")[0].innerText =
  "Assignment - Solved!");
// const title2 = document.querySelector("title").innerText = "Assignment - Solved!"

// TASK 3
/*
Select the <h1> element on this page and change its text to "Assignment - Solved!".
*/

const h1 = (document.querySelector("h1").innerText = "Assignment - Solved!");
