import { assignmentsService } from "../services/AssignmentsService";
import { subjectsService } from "../services/SubjectsService";
import BaseController from "../utils/BaseController";


export class SubjectsController extends BaseController {
  constructor() {
    super("api/subjects")
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/assignments", this.getAssignmentsBySubId)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }

  async getAll(req, res, next) {
    try {
      let data = await subjectsService.find(req.query)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async getById(req, res, next) {
    try {
      let data = await subjectsService.findById(req.params.id)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async getAssignmentsBySubId(req, res, next) {
    try {
      let data = await assignmentsService.find({ subject: req.params.id })
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      let data = await subjectsService.create(req.body)
      res.status(201).send(data)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      let data = await subjectsService.edit(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      await subjectsService.delete(req.params.id)
      res.send("delorted")
    } catch (error) {
      next(error)
    }
  }




}