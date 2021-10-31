import express, { Request, Response } from "express";
import CarService from "../api/CarService";

const router = express.Router();

router.get("/api/:vin", async (req: Request, res: Response) => {
  const result = await CarService.getVehicleByVin(req.params.vin);

  res.send(result);
});

export { router as vinRouter };
