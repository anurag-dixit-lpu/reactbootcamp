// Arrow Functions

const double = (number) => `double of ${number} is ${number * 2}`;

console.log(double(456.34));

// Returning objects

const person = (firstName, lastName) => ({
  first: firstName,
  last: lastName,
});
console.log(person("Deepak", "Singh"));
