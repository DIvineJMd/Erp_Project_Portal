import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  studentId: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  address: { type: String },
  phone: { type: String },
});

const StudentModel = mongoose.models.Student || mongoose.model('Student', StudentSchema);
export default StudentModel;
