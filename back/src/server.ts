import express from "express";
import { router } from "./config/router";

const app = express();
app.use(express.json());
app.use(router);

app.listen("4000", () => {
  console.log("server running on port 4000");
});
