import React, { useContext } from 'react';
import { IProject } from '../../context/projects/dtos';
import projectContext from '../../context/projects/projectContext';

type Props = {
  project: IProject;
};

const Project = ({ project }: Props) => {
  const projectsContext = useContext(projectContext);

  const { getActualProject } = projectsContext;

  return (
    <li>
      <button
        onClick={() => getActualProject(project)}
        type="button"
        className="btn btn-blank"
      >
        {project.nameProject}
      </button>
    </li>
  );
};

export default Project;
