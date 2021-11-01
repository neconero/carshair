import CarService from "./CarService";
import mockData from '../mockData/mockData'
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

    let validVinArr = ['JTHBJ46G182171887', '3VWDZ7AJ7BM382452', '2FMDK3JC4ABA11603'];
    let invalidVinArr = ['adsfdsfdsfads', 'invalidVin']

    it("should return correct vehicle when called with a valid VIN", async () => {
      for (const vin of validVinArr) {
        const response = mockData(vin).response
        const expectedResult = mockData(vin).expectedResult
        mockedAxios.get.mockResolvedValue(response);
        const result = await CarService.getVehicleByVin(vin)

        expect(result.Make)
          .toEqual(expectedResult.Make)
          .not.toHaveLength(0)

        expect(result.Model)
          .toEqual(expectedResult.Model)
          .not.toHaveLength(0)

        expect(result.Year)
          .toEqual(expectedResult.Year)
          .not.toHaveLength(0)
      }
    });

    it("should return empty values for invalid vin", async () => {
      for (const vin of invalidVinArr) {
        const response = mockData(vin).response
        const expectedResult = mockData(vin).expectedResult
        mockedAxios.get.mockResolvedValue(response);
        const result = await CarService.getVehicleByVin(vin)

        expect(result.Make)
          .toEqual(expectedResult.Make)
          .toHaveLength(0)

        expect(result.Model)
          .toEqual(expectedResult.Model)
          .toHaveLength(0)

        expect(result.Year)
          .toEqual(expectedResult.Year)
          .toHaveLength(0)
      }
    });

    it("should throw if api call fails", async () => {
      const errorMessage = "err: endpoint not accessible";
      mockedAxios.get.mockRejectedValue(errorMessage);

      await expect(CarService.getVehicleByVin(validVinArr[0])).rejects.toThrow(
        `Something went wrong ${errorMessage}`
      );
    });

  });

})
