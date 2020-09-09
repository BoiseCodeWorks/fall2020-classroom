import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";


class SubjectsService {
  async find(query = {}) {
    return await dbContext.Subjects.find(query).populate("teacher")
  }
  async findById(id) {
    let subject = await dbContext.Subjects.findById(id).populate("teacher")
    if (!subject) {
      throw new BadRequest("invalid id")
    }
    return subject
  }
  async create(subject) {
    return await dbContext.Subjects.create(subject)
  }
  async edit(update) {
    let updated = await dbContext.Subjects.findOneAndUpdate({ _id: update.id }, update, { new: true })
    if (!updated) {
      throw new BadRequest("invalid id")
    }
    return updated
  }
  async delete(id) {
    let deleted = await dbContext.Subjects.findOneAndDelete({ _id: id })
    if (!deleted) {
      throw new BadRequest("invalid id")
    }
  }

}

export const subjectsService = new SubjectsService();