import productsPcMK from "../mock/productsPcMK";

//Como são arquivos estáticos, os testes nesse caso, não fazem muito sentido
test("all products", () => {
  expect(productsPcMK).toBe(productsPcMK);
});

test("product id 1", () => {
  expect(productsPcMK[1]).toBe(productsPcMK[1]);
});
