import { Router } from "express";
import path from "path";

export const contactRouter = new Router();

contactRouter.get("/", (req, res) => {
  res.sendFile(path.resolve("./pages/contact.html"));
});

