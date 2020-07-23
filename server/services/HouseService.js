import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class HouseService {
  async addPerson(id, body) {
    return await dbContext.Houses.findByIdAndUpdate(
      { _id: id },
      { $addToSet: { people: body } },
      { new: true }
    );
  }
  async movinOut(houseId, personId) {
    return await dbContext.Houses.findByIdAndUpdate(
      { _id: houseId },
      { $pull: { people: { _id: personId } } },
      { new: true }
    );
  }
  async delete(id) {
    return await dbContext.Houses.findByIdAndDelete(id);
  }
  async create(body) {
    return await dbContext.Houses.create(body);
  }
  async getAll() {
    return await dbContext.Houses.find({});
  }
}

export const houseService = new HouseService();
