import { Request, Response } from "express";
import productsPcMK from "../api/mock/productsPcMK";

export async function productsPcRoute(req: Request, res: Response) {
  const json = productsPcMK;
  res.status(200).send(json);
}
