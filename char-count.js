export default function (str) {
  if (typeof str === "string") {
    return str.length;
  } else {
    throw Error("Incorrect value passed");
  }
}
