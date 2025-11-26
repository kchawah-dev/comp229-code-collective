import Project from "../models/project.model.js";

// ============================================
// CREATE PROJECT
// ============================================
export const createProject = async (req, res) => {
  try {
    const project = await Project.create({
      ...req.body,
      createdBy: req.user.userId, // <-- Correct field from JWT
    });

    res.status(201).json(project);
  } catch (error) {
    console.error("CREATE PROJECT ERROR:", error);
    res.status(500).json({ error: error.message });
  }
};

// ============================================
// GET ALL PROJECTS FOR LOGGED-IN USER
// ============================================
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({
      createdBy: req.user.userId, // <-- Correct field
    });

    res.json(projects);
  } catch (error) {
    console.error("GET PROJECTS ERROR:", error);
    res.status(500).json({ error: error.message });
  }
};

// ============================================
// GET SINGLE PROJECT BY ID
// ============================================
export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findOne({
      _id: req.params.id,
      createdBy: req.user.userId, // <-- Correct field
    });

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json(project);
  } catch (error) {
    console.error("GET PROJECT BY ID ERROR:", error);
    res.status(500).json({ error: error.message });
  }
};

// ============================================
// UPDATE A PROJECT
// ============================================
export const updateProject = async (req, res) => {
  try {
    const updatedProject = await Project.findOneAndUpdate(
      {
        _id: req.params.id,
        createdBy: req.user.userId, // <-- Correct field
      },
      req.body,
      { new: true }
    );

    if (!updatedProject) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json(updatedProject);
  } catch (error) {
    console.error("UPDATE PROJECT ERROR:", error);
    res.status(500).json({ error: error.message });
  }
};

// ============================================
// DELETE A PROJECT
// ============================================
export const deleteProject = async (req, res) => {
  try {
    const deletedProject = await Project.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user.userId, // <-- Correct field
    });

    if (!deletedProject) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json({ message: "Project deleted" });
  } catch (error) {
    console.error("DELETE PROJECT ERROR:", error);
    res.status(500).json({ error: error.message });
  }
};