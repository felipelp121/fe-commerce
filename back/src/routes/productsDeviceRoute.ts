import { Request, Response } from "express";
import productsDeviceMK from "../api/mock/productsDevicesMK";

export async function productsDeviceRoute(req: Request, res: Response) {
  const json = productsDeviceMK;
  res.status(200).send(json);
}
