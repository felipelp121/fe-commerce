import { Request, Response } from "express";
import productsMK from "../api/mock/productsMK";

export async function productsRoute(req: Request, res: Response) {
  const json = productsMK;
  res.status(200).send(json);
}
