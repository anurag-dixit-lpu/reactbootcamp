// var versus const

/*
var topic = "JavaScript";

if (topic) {
  var topic = "React"; // change back to let
  console.log("block", topic); // block React
}

console.log("global", topic); // global React

*/

for (let index = 0; index < 5; index++) {
  setTimeout(() => {
    console.log(index);
  }, 0);
}
