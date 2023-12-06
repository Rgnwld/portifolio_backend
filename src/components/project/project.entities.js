class Project {
  constructor(name, description, tools, url, img) {
    this.name = name
    this.description = description;
    this.tools = tools;
    this.url = url;
    this.img = img;
  }

  toJSON() {
    return {
      name: this.name,
      description: this.description,
      tools: this.tools,
      url: this.url,
      img: this.img
    };
  }
}

export default Project;
