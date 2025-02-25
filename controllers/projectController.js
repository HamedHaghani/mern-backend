const Project = require("../models/Project");

// @desc   Get all projects
// @route  GET /api/projects
// @access Public
const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find(); 
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc   Add a new project
// @route  POST /api/projects
// @access Public
const addProject = async (req, res) => {
  const { title, description, technologies, githubLink, liveDemo } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: "Title and description are required" });
  }

  try {
    const newProject = new Project({
      title,
      description,
      technologies,
      githubLink,
      liveDemo,
    });

    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getAllProjects, addProject };
