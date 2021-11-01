import express, { Request, Response } from "express";
import { json } from "body-parser";
import { allMakeRouter } from "./routes/allmake";
import { allModelRouter } from "./routes/allmodel";
import { vinRouter } from "./routes/vin";

const app = express();
app.use(json());

app.use(allMakeRouter);
app.use(allModelRouter);
app.use(vinRouter);

app.get("*", (req: Request, res: Response) => {
  res.send("Page not found!!!");
});

app.listen(8080, () => {
  console.log("Server successfully started on 8080!");
});
