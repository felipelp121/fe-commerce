import productsMK from "../mock/productsMK";

//Como são arquivos estáticos, os testes nesse caso, não fazem muito sentido
test("all products", () => {
  expect(productsMK).toBe(productsMK);
});

test("product id 1", () => {
  expect(productsMK[1]).toBe(productsMK[1]);
});
