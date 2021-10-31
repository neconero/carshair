import express, { Request, Response } from "express";
import CarService from "../api/CarService";
const router = express.Router();

router.get("/api/makes", async (req: Request, res: Response) => {
  const result = await CarService.getAllMake();

  res.send(result);
});

export { router as allMakeRouter };
