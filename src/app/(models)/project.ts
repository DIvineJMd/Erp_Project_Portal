import mongoose, { Schema } from "mongoose" ;
const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  throw new Error('MongoDB URI is not defined in environment variables');
}
mongoose.connect(mongoUri)
mongoose.Promise = global.Promise

const TeamMemberSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  
});

const ProjectSchema: Schema = new Schema({
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


const ProjectModel = mongoose.models.Project || mongoose.model('Project', ProjectSchema);

export default ProjectModel;
