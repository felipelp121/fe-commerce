export const api = async (endpoint) => {
  const url = `http://localhost:4000${endpoint}`;
  const response = await (await fetch(url)).json();
  return response;
};
