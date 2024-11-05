import { Router } from "express";
import path from "path";

export const aboutRouter = new Router();

aboutRouter.get("/", (req, res) => {
  res.sendFile(path.resolve("./pages/about.html"));
});

