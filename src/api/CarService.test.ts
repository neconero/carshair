import CarService from "./CarService";
import * as axios from "axios";

jest.mock("axios");

describe("CarService", () => {
  describe("getAllMake", () => {
    let axiosResult: {
      data: { Results: { Make_ID: number; Make_Name: string }[] };
    };
    beforeEach(() => {
      axiosResult = {
        data: {
          Results: [
            { Make_ID: 1, Make_Name: "JAQUAR" },
            { Make_ID: 2, Make_Name: "MERCEDES" },
            { Make_ID: 3, Make_Name: "TESLA" },
          ],
        },
      };
      (axios as any).get.mockImplementation(() => Promise.resolve(axiosResult));
    });
    it("should return array of models", async () => {
      const res = await CarService.getAllMake();
      const expectedResult = axiosResult.data.Results.map((r) => r.Make_Name);
      expect(res).toBeInstanceOf(Array);
      expect(res).toEqual(expectedResult);
    });
  });
  describe("getAllModels", () => {});
  describe("getVehicleByVin", () => {
    it.todo("should return correct vehicle when called with a valid VIN");
    it.todo("should return null when an invalid vin is provided");
  });
});
