// Destructuring Objects

const sandwich = {
  bread: "dutch crunch",
  meat: "tuna",
  cheese: "swiss",
  toppings: ["lettuce", "tomato", "mustard"],
};

const { bread, meat, ...rest } = sandwich;

console.log(rest); // dutch crunch tuna

// destructuring incoming function arguments
/*
const lordify = ({ firstName }) => {
  console.log(`${firstName} of Canterbury`);
};

const regularPerson = {
  firstName: "Bill",
  lastName: "Wilson",
};

lordify(regularPerson); // Bill of Canterbury
*/

// deep destructuring

const regularPerson = {
  firstname: "Bill",
  lastname: "Wilson",
  spouse: {
    firstname: "Phil",
    lastname: "Wilson",
  },
};

const lordify = ({ spouse: { firstname } }) => {
  console.log(`${firstname} of Canterbury`);
};

lordify(regularPerson); // Phil of Canterbury
