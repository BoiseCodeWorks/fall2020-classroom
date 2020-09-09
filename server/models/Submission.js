import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const Submission = new Schema(
  {
    link: { type: String, required: true },
    grade: { type: Number, required: true },
    student: { type: ObjectId, ref: "Student" },
    assignment: { type: ObjectId, ref: "Assignment" }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Submission;
