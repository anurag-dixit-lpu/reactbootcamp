// Asynchronous JavaScript

console.log(fetch("https://randomuser.me/api/"));

fetch("https://randomuser.me/api/").then((res) => console.log(res.json()));

fetch("https://randomuser.me/api/")
  .then((res) => res.json())
  .then((json) => json.results)
  .then(console.log)
  .catch(console.error);
