import ProjectController from './project.controller.js';
import ProjectService from './project.service.js';
import ProjectRouter from './project.router.js';

const projectService = new ProjectService();
const projectController = new ProjectController(projectService);
const projectRouter = new ProjectRouter(projectController);

export default {
  service: projectService,
  controller: projectController,
  router: projectRouter.getRouter(),
};