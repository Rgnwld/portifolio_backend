import projectModule from "../components/project/project.module.js"

export default (app) =>  {
  app.use('/project', projectModule.router);
};