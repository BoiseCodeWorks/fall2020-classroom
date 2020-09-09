import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const StudentSubject = new Schema(
  {
    student: { type: ObjectId, ref: "Student" },
    subject: { type: ObjectId, ref: "Subject" }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default StudentSubject;
