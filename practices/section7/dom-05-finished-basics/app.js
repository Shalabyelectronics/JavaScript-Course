const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;
const item1 = firstLi.firstElementChild;
// console.log(firstLi);
// console.log(item1.innerText);

const section = document.querySelector("section");
const button = document.querySelector("button");

// section.style.backgroundColor = 'blue';
section.className = "red-bg";

// create New Child
const newLi = document.createElement("li");
// Add textContent to newLi
newLi.textContent = "Item 4";
// add it to its parent ul usingappendchile Method Most supported in all browsers

// firstLi.appendChild(newLi);
// Or we can use append method but it is not supported with IE Browser
// firstLi.append(newLi);
// Also We can use insertAdjacentElement to insert child to parent on four positions
/*
<!-- beforebegin -->
<p>
<!-- afterbegin -->
foo
<!-- beforeend -->
</p>
<!-- afterend -->

*/
// firstLi.insertAdjacentElement("beforeend", newLi);

// Or we can use append only but it not support IE

firstLi.append(newLi);

// To add it to the top use prepend

// firstLi.prepend(newLi);

const item4 = firstLi.lastElementChild;
const item3 = item4.previousElementSibling;
const item2 = item3.previousElementSibling;

// item4.before(item2);
// item3.after(item1);
// item1.replaceWith(item4);
// item1.remove();
// console.log(item2.innerText);
// We can use replaceChild to replace it with the first parameter
// firstLi.replaceChild(item1, item4);

// We can remove Child bt removeChild

// firstLi.removeChild(item4);

button.addEventListener("click", () => {
  // if (section.className === 'red-bg visible') {
  //   section.className = 'red-bg invisible';
  // } else {
  //   section.className = 'red-bg visible';
  // }

  // section.classList.toggle('visible');
  section.classList.toggle("invisible");
});
