import express, { Request, Response } from "express";
import { json } from "body-parser";
import { allMakeRouter } from "./routes/allmake";
import { allModelRouter } from "./routes/allmodel";
import { vinRouter } from "./routes/vin";
import { errorHandler } from "./middlewares/error-handler";
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../swagger_output.json'
import cors from 'cors'

const app = express();
const port = process.env.PORT || 8080

app.use(json());
app.use(cors())

//Extended

app.use(allMakeRouter);
app.use(allModelRouter);
app.use(vinRouter);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.all("*", (req: Request, res: Response) => {
  throw new Error();
});

app.use(errorHandler)


app.listen(port, () => {
  console.log(`Server successfully started on ${port}!`);
});

export { app }
