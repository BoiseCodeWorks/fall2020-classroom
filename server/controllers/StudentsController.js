import { studentsService } from "../services/StudentsService";
import { studentSubjectsService } from "../services/StudentSubjectsService";
import BaseController from "../utils/BaseController";


export class StudentsController extends BaseController {
  constructor() {
    super("api/students")
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/subjects", this.getSubjectsByStudentId)
      .post("", this.create)
      .post("/:studentId/subjects/:subjectId", this.enroll)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }

  async getAll(req, res, next) {
    try {
      let data = await studentsService.find(req.query)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async getById(req, res, next) {
    try {
      let data = await studentsService.findById(req.params.id)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async getSubjectsByStudentId(req, res, next) {
    try {
      let data = await studentSubjectsService.findSubjects(req.params.id)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      let data = await studentsService.create(req.body)
      res.status(201).send(data)
    } catch (error) {
      next(error)
    }
  }
  async enroll(req, res, next) {
    try {
      let enrollment = { student: req.params.studentId, subject: req.params.subjectId }
      let data = await studentSubjectsService.create(enrollment)
      res.status(201).send(data)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      let data = await studentsService.edit(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      await studentsService.delete(req.params.id)
      res.send("delorted")
    } catch (error) {
      next(error)
    }
  }




}