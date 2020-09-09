import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const Assignment = new Schema(
  {
    requirements: [{ type: String, required: true }],
    description: { type: String },
    value: { type: Number },
    subject: { type: ObjectId, ref: "Subject", required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Assignment;
