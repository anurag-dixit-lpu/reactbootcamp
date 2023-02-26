// Async/Await

const getFakePerson = async (apiPath) => {
  try {
    const response = await fetch(apiPath);

    const { results } = await response.json();
    console.log(results);
  } catch (error) {
    console.log(error);
  }
};

getFakePerson("https://randomuser.me/api/");
