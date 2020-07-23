import ValueSchema from "../models/Value";
import mongoose from "mongoose";
import HouseSchema from "../models/House";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Houses = mongoose.model("House", HouseSchema);
}

export const dbContext = new DbContext();
