import productsDevicesMK from "../mock/productsDevicesMK";

//Como são arquivos estáticos, os testes nesse caso, não fazem muito sentido
test("all products", () => {
  expect(productsDevicesMK).toBe(productsDevicesMK);
});

test("product id 1", () => {
  expect(productsDevicesMK[1]).toBe(productsDevicesMK[1]);
});
