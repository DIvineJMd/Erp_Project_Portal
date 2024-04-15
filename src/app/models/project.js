import mongoose from 'mongoose';
const { Schema } = mongoose;

// const mongoUri = "";
// if (!mongoUri) {
//   throw new Error('MongoDB URI is not defined in environment variables');
// }

// mongoose.connect(mongoUri);
// mongoose.Promise = global.Promise;
// console.log('Connecting to database model')

const TeamMemberSchema = new Schema({
  username: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  dp: { type: String, required: false},
});

const ProjectSchema = new Schema({
  project_id: { type: Number, required: true },
  project_name: { type: String, required: true },
  description: { type: String },
  progress: { type: String },
  status: { type: Boolean, default: false },

  start_date: { type: Date },
  end_date: { type: Date },
  created_by: { type: String },
  created_at: { type: Date, default: Date.now },

  owner: { type: TeamMemberSchema, required: true },
  team: [TeamMemberSchema],
});

const ProjectModel = mongoose.models.Project || mongoose.model('Project_data', ProjectSchema);
export default ProjectModel;

