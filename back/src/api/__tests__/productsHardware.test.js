import productsHardwareMK from "../mock/productsHardwareMK";

//Como são arquivos estáticos, os testes nesse caso, não fazem muito sentido
test("all products", () => {
  expect(productsHardwareMK).toBe(productsHardwareMK);
});

test("product id 1", () => {
  expect(productsHardwareMK[1]).toBe(productsHardwareMK[1]);
});
