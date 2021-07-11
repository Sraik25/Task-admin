import React, { useContext } from 'react';
import { IProject } from '../../context/projects/dtos';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/Tasks/taskContext';

type Props = {
  project: IProject;
};

const Project = ({ project }: Props) => {
  const { getActualProject } = useContext(projectContext);
  const { getTasks } = useContext(taskContext);

  const selectProject = (project: IProject) => {
    getActualProject(project);
    getTasks(project._id);
  };

  return (
    <li>
      <button
        onClick={() => selectProject(project)}
        type="button"
        className="btn btn-blank"
      >
        {project.nameProject}
      </button>
    </li>
  );
};

export default Project;
