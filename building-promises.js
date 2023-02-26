// Building Promises

const shouldPass = true;

const getDelayedResponse = (delay = 3000) => {
  return new Promise((resolve, reject) => {
    if (shouldPass) {
      setTimeout(() => {
        resolve("Success");
      }, delay);
    } else {
      reject("Failed");
    }
  });
};

getDelayedResponse()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
