import axios from "axios";
import { MakeType, ModelType, VehicleInfo } from "../models/models";

class CarService {
  public static getAllMake = async (): Promise<MakeType[]> => {
    try {
      const url =
        "https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json";
      let data = (await axios.get(url))?.data?.Results;
      return data?.map(
        (d: { Make_ID: number; Make_Name: string }) => d?.Make_Name
      );
    } catch (err) {
      console.error(err);
      throw new Error(`Something went wrong ${err}`);
    }
  };

  public static getAllModels = async (
    make: string,
    year: string
  ): Promise<ModelType[]> => {
    try {
      const url = `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/${make}/modelyear/${year}?format=json`;
      let data = (await axios.get(url))?.data?.Results;
      return data?.map(
        (d: {
          Make_ID: number;
          Make_Name: string;
          Model_ID: number;
          Model_Name: string;
        }) => d?.Model_Name
      );
    } catch (err) {
      console.error(err);
    }
    return [];
  };

  public static getVehicleByVin = async (vin: string): Promise<VehicleInfo> => {
    try {
      const url = `https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/${vin}?format=json`;
      let [data] = (await axios.get(url))?.data?.Results;
      console.log(data);

      return {
        Make: data?.Make ?? null,
        Model: data?.Model,
        Year: data?.ModelYear,
      };
    } catch (err) {
      console.error(err);
    }
    return <VehicleInfo>{};
  };
}

export default CarService;
