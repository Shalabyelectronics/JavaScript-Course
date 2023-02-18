function get(url) {
  // Rrturning a new promise
  return new Promise(function (resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open("GET", url);

    req.onload = function () {
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      } else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningfull error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function () {
      reject(Error("Network Error"));
    };

    // Make the request
    req.send();
  });
}

// const data = get("https://randomuser.me/api")
//   .then(function (response) {
//     return JSON.parse(response);
//   })
//   .then(
//     function (response) {
//       return response;
//     },
//     function (error) {
//       console.error("Faild!", error);
//     }
//   );

// Also we can shorten our promise like below
// const data = get("https://randomuser.me/api")
//   .then(JSON.parse)
//   .then(
//     function (response) {
//       console.log(response);
//     },
//     function (error) {
//       console.error("Faild!", error);
//     }
//   );

// console.log(data);

// Also you can getJSON function really easy
let firstName;
let lastName;
const printRandomName = (firstName, lastName) => {
  console.log(firstName, lastName);
};
function getJSON(url) {
  get(url)
    .then(JSON.parse)
    .then((data) => data.results[0].name)
    .then((userFullName) => {
      printRandomName(userFullName.first, userFullName.last);
      firstName = userFullName.first;
      lastName = userFullName.last;
    });
  return [firstName, lastName];
}
getJSON("https://randomuser.me/api");
