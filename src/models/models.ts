export interface VehicleInfo {
  Model: string;
  Make: string;
  Year: string;
}

export type ModelType = Pick<VehicleInfo, "Model">;

export type MakeType = Pick<VehicleInfo, "Make">;
