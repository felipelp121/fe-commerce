export const api = async () => {
  const response = await (await fetch("https://restcountries.com/v3.1/all"))
    .json();
  //   console.log(response[0].name);
  return response;
};

api();
