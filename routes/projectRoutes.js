const express = require("express");
const { getAllProjects, addProject } = require("../controllers/projectController");

const router = express.Router();

router.get("/", getAllProjects);  
router.post("/", addProject);    

module.exports = router;
