import express, { Request, Response } from "express";
import { json } from "body-parser";
import { allMakeRouter } from "./routes/allmake";
import { allModelRouter } from "./routes/allmodel";
import { vinRouter } from "./routes/vin";
import { errorHandler } from "./middlewares/error-handler";

const app = express();
app.use(json());

app.use(allMakeRouter);
app.use(allModelRouter);
app.use(vinRouter);

app.all("*", (req: Request, res: Response) => {
  throw new Error();
});

app.use(errorHandler)

app.listen(8080, () => {
  console.log("Server successfully started on 8080!");
});
