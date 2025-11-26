import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    // OPTIONAL FIELDS (now not required)
    techStack: {
      type: String,
      required: false,
    },
    githubURL: {
      type: String,
      required: false,
    },
    imageURL: {
      type: String,
      required: false,
    },

    // User who created the project
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);
export default Project;