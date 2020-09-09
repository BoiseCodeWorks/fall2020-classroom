import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";


class TeachersService {
  async find(query = {}) {
    return await dbContext.Teachers.find(query).populate('subject')
  }
  async findById(id) {
    let teacher = await dbContext.Teachers.findById(id).populate('subject')
    if (!teacher) {
      throw new BadRequest("invalid id")
    }
    return teacher
  }
  async create(teacher) {
    return await dbContext.Teachers.create(teacher)
  }
  async edit(update) {
    let updated = await dbContext.Teachers.findOneAndUpdate({ _id: update.id }, update, { new: true })
    if (!updated) {
      throw new BadRequest("invalid id")
    }
    return updated
  }
  async delete(id) {
    let deleted = await dbContext.Teachers.findOneAndDelete({ _id: id })
    if (!deleted) {
      throw new BadRequest("invalid id")
    }
  }

}

export const teachersService = new TeachersService();