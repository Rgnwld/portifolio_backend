import express from 'express';

class ProjectRouter {
  constructor(projectController) {
    this.projectController = projectController;
  }

  getRouter() {
    const router = express.Router();
    router.route('/:id').get(this.projectController.getProjects);
    router.route('/').get(this.projectController.getProjects);
    router.route('/').post(this.projectController.createProject);
    return router;
  }
}

export default ProjectRouter;