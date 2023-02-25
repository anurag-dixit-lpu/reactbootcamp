// Function Expressions
const logCompliment = function () {
  console.log("You're doing great!");
};

logCompliment();

// Invoking the function before it's declared
// hey();

// Function Expression
const hey = function () {
  console.log("Invoking the function before it's declared");
};

// Passing arguments and return
const createCompliment = function (firstName, message) {
  return `${firstName}: ${message}`;
};

createCompliment("Molly", "You're so cool");

// Default Parameters

const defaultPerson = {
  name: {
    first: "Deepak",
    last: "Singh",
  },
  favActivity: "Leading",
};

function logActivity(person = defaultPerson) {
  console.log(`${person.name.first} loves ${person.favActivity}`);
}

logActivity();
