import { Request, Response } from "express";
import productsHardwareMK from "../api/mock/productsHardwareMK";

export async function productsHardwareRoute(req: Request, res: Response) {
  const json = productsHardwareMK;
  res.status(200).send(json);
}
