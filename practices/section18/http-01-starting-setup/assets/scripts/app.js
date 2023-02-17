// const xhr = new XMLHttpRequest();

// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
// xhr.open("GET", "https://randomuser.me/api");

// console.log("Done");

// const data = fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res)
//   .then((data) => data)
//   .catch((err) => err);
// console.log(data.then());

const image = document.querySelector("img");

function loaded() {
  console.log("Image Loaded no need to add event listener");
}

if (image.complete) {
  loaded();
} else {
  image.addEventListener("load", () => console.log("Wiki Image loaded"));
}

image.addEventListener("error", () => console.log("We can't load Wiki Image"));
