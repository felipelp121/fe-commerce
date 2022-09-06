import { Router } from "express";
import * as routes from "../routes/index";

export const router = Router();

router.get("/products", routes.productsRoute);
router.get("/products/hardware", routes.productsHardwareRoute);
router.get("/products/device", routes.productsDeviceRoute);
router.get("/products/pc", routes.productsPcRoute);
