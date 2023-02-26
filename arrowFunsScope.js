// ARROW FUNCTIONS AND SCOPE

// const obj = {
//   mountains: ["Freel", "Rose", "Tallac", "Rubicon", "Silver"],

//   print: function (delay = 1000) {
//     setTimeout(function () {
//       console.log(this.mountains.join(", "));
//     }, delay);
//   },
// };

// obj.print();

const obj = {
  mountains: ["Freel", "Rose", "Tallac", "Rubicon", "Silver"],

  print: function (delay = 1000) {
    setTimeout(() => {
      console.log(this.mountains.join(", "));
    }, delay);
  },
};

obj.print();

// Scope test
const newObj = {
  name: "Test",
  print: () => {
    console.log(this, this.name); // This refer to the window object
  },
};

const newObj_02 = {
  name: "Test",
  print: function () {
    console.log(this, this.name); // This refer to the newObj_02 object
  },
};
