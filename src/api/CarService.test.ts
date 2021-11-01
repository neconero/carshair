import CarService from "./CarService";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("CarService", () => {
  describe("getAllMake", () => {
    let axiosResult: {
      data: { Results: { Make_ID: number; Make_Name: string }[] };
    };
    beforeEach(() => {
      jest.clearAllMocks();
      axiosResult = {
        data: {
          Results: [
            { Make_ID: 1, Make_Name: "JAQUAR" },
            { Make_ID: 2, Make_Name: "MERCEDES" },
            { Make_ID: 3, Make_Name: "TESLA" },
          ],
        },
      };
      mockedAxios.get.mockResolvedValue(axiosResult);
    });
    it("should return array of models", async () => {
      const res = await CarService.getAllMake();
      const expectedResult = axiosResult.data.Results.map((r) => r.Make_Name);
      expect(res).toBeInstanceOf(Array);
      expect(res).toEqual(expectedResult);
    });
    it("should throw if api call fails", async () => {
      const errorMessage = "err: endpoint not accessible";
      mockedAxios.get.mockRejectedValue(errorMessage);

      await expect(CarService.getAllMake()).rejects.toThrow(
        `Something went wrong ${errorMessage}`
      );
    });
  });


  describe("getAllModels", () => {
    let axiosResult: {
      data: {
        Results: { Make_ID: number; Make_Name: string; Model_ID: number; Model_Name: string }[]
      }
    };
    beforeEach(() => {
      jest.clearAllMocks();
      axiosResult = {
        data: {
          Results: [
            { Make_ID: 40, Make_Name: "HONDA", Model_ID: 1863, Model_Name: "CR-V" },
            { Make_ID: 40, Make_Name: "HONDA", Model_ID: 1864, Model_Name: "Odyssey" },
            { Make_ID: 40, Make_Name: "HONDA", Model_ID: 1866, Model_Name: "Ridgeline" },
          ]
        }
      }
      mockedAxios.get.mockResolvedValue(axiosResult);
    })

    it("should return array of models", async () => {
      let make = 'HONDA';
      let year = '2011'

      const res = await CarService.getAllModels(make, year);
      const expectedResult = axiosResult.data.Results.map((r) => r.Model_Name);
      expect(res).toBeInstanceOf(Array);
      expect(res).toEqual(expectedResult);
    });

    it("should throw if api call fails", async () => {
      const errorMessage = "err: endpoint not accessible";
      mockedAxios.get.mockRejectedValue(errorMessage);

      await expect(CarService.getAllModels('', '')).rejects.toThrow(
        `Something went wrong ${errorMessage}`
      );
    });
  });


  describe("getVehicleByVin", () => {
    
    it.todo("should return correct vehicle when called with a valid VIN");
    it.todo("should return null when an invalid vin is provided");
  });
});
