import mongoose from "mongoose";
import AssignmentSchema from "../models/Assignment";
import StudentSchema from "../models/Student";
import StudentSubjectSchema from "../models/StudentSubject";
import SubjectSchema from "../models/Subject";
import SubmissionSchema from "../models/Submission";
import TeacherSchema from "../models/Teacher";

class DbContext {
  Students = mongoose.model("Student", StudentSchema);
  Assignments = mongoose.model("Assignment", AssignmentSchema);
  Subjects = mongoose.model("Subject", SubjectSchema);
  Submissions = mongoose.model("Submission", SubmissionSchema);
  Teachers = mongoose.model("Teacher", TeacherSchema);
  Enrollment = mongoose.model("Enrollment", StudentSubjectSchema);
}

export const dbContext = new DbContext();
