// console.log("%cHello, World", "color: blue; font-size: 40px");
//
/*
 *

function getMonthName(mo) {
  mo--; // Adjust month number for array index (so that 0 = Jan, 11 = Dec)
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (months[mo]) {
    return months[mo];
  } else {
    throw new Error("InvalidMonthNo"); // throw keyword is used here
  }
}

try {
  // statements to try
  monthName = getMonthName(15); // function could throw exception
} catch (e) {
  monthName = "unknown";
  console.log(e); // pass exception object to error handler (i.e. your own function)
}
console.log("All Done And the code still running");
*/

class Name {
  constructor(firstName, lastName) {
    this.fName = firstName;
    this.lName = lastName;
  }
}

class BoysName extends Name {
  constructor(firstName, lastName, school) {
    Name.constructor(firstName, lastName);
    this.school = school;
  }
}
// const myName = new Name("Mohamed", "Shalaby");
const myBoy = new BoysName("A", "B", "school");
console.log(myBoy);
