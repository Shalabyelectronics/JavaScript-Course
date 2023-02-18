const button1 = document.querySelector("button");
const button2 = button1.nextElementSibling;
const button3 = button2.nextElementSibling;
const output = document.querySelector("p");

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, duration);
  });
  return promise;
};

// function trackUserHandler() {
//   navigator.geolocation.getCurrentPosition(
//     posData => {
//       setTimer(2000).then(data => {
//         console.log(data, posData);
//       });
//     },
//     error => {
//       console.log(error);
//     }
//   );
//   setTimer(1000).then(() => {
//     console.log('Timer done!');
//   });
//   console.log('Getting position...');
// }

// button.addEventListener('click', trackUserHandler);

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);
const student1 = {
  name: "shalaby",
  course: "JavaScript",
};

const student2 = {
  name: "Ahmed",
  course: "React",
};
const student3 = {
  name: "Ali",
  course: "Sass",
};

const whichStudent = (student) => {
  console.log(
    `Student name : ${student.name}\nStudent Course: ${student.course}`
  );
};

button1.addEventListener("click", whichStudent.bind(this, student1));
button2.addEventListener("click", whichStudent.bind(this, student2));
button3.addEventListener("click", whichStudent.bind(this, student3));
