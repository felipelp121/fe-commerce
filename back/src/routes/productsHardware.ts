import { Request, Response } from "express";

export async function productsHardware(req: Request, res: Response) {
  const json = {
    "name": "Teclado Razer",
    "value": 749,
  };
  res.status(200).send(json);
}