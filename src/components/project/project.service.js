class ProjectService {
  constructor() {
    this.project = [];
  }

  addProject = (user) => {
    this.users.push(user);
    return user;
  };

  getProjects = () => this.users;

  getProject = (id) => {
    const project = this.project.find((u) => u.name === name);
    return project;
  };
}

export default ProjectService;