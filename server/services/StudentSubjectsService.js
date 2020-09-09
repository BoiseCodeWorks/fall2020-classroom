import { dbContext } from "../db/DbContext";

class StudentSubjectsService {
  async findSubjects(student) {
    return await dbContext.Enrollment.find({ student }).populate("subject")
  }
  async findStudents(subject) {
    return await dbContext.Enrollment.find({ subject }).populate("student")
  }
  async create(enrollment) {
    return await dbContext.Enrollment.create(enrollment);
  }

}

export const studentSubjectsService = new StudentSubjectsService();