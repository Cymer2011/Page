import express from "express";
import path from "path";
import { aboutRouter } from "./Routers/aboutRouter.js";
import { contactRouter } from "./Routers/contactRouter.js";

const app = express();

app.use(express.static("public"));


app.get("/", (req, res) => {
  res.sendFile(path.resolve("./pages/index.html"));
});

app.use("/about", aboutRouter);
app.use("/contact", contactRouter);

app.listen(8080, () => {
  console.log("http://localhost:8080");
});
