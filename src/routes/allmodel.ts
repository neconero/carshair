import express, { Request, Response } from "express";
import CarService from "../api/CarService";

const router = express.Router();

router.get("/api/:make/:year", async (req: Request, res: Response) => {
  const result = await CarService.getAllModels(
    req.params.make,
    req.params.year
  );
  res.send(result);
});

export { router as allModelRouter };
