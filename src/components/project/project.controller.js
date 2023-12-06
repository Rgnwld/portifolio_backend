import Project from "./project.entities.js";

class ProjectController {
  constructor(projectService) {
    this.projectService = projectService;
  }

  createProject = (req, res) => {
    const project = new Project(
      req.body.name,
      req.body.description,
      req.body.tools,
      req.body.url,
      req.body.img
    );
    return res.status(201).send(this.projectService.addProject(user));
  };

  getProjects = (_, res) => res.status(200).send(this.projectService.getProjects());

  getProject = (req, res) => {
    const { id } = req.params;
    return res.status(200).send(this.projectService.getProject(id));
  };
}

export default ProjectController;
