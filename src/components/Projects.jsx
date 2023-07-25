import useFetchProjects from "../fetchProjects";

const Projects = () => {
  const { projects, isLoading } = useFetchProjects();

  if (isLoading) {
    return (
      <div className="projects">
        <div className="loading"></div>
      </div>
    );
  }
  return (
    <div className="projects">
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project) => {
          const { id, title, url, img } = project;
          return (
            <a
              key={id}
              href={url}
              className="project"
              target="_blank"
              rel="noreferrer"
            >
              <img src={img} alt={title} className="img" />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
