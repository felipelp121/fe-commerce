import { Router } from "express";
import * as routes from "../routes/index";

export const router = Router();

router.get("/products", routes.products);
router.get("/products/hardware", routes.productsHardware);
router.get("/products/device", routes.productsDevice);
router.get("/products/pc", routes.productsPc);
