import React, { FC, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import projectContext from './projectContext';
import projectReducer from './projectReducer';

import { IInitialStateProject, IProject } from './dtos';
import {
  FORM_PROJECT,
  GET_PROJECT,
  ADD_PROJECT,
  VALIDATION_FORM,
  ACTUAL_PROJECT,
  REMOVE_PROJECT,
} from '../../types';

const ProjectState: FC = (props) => {
  const projects: IProject[] = [
    { id: 1, nameProject: 'Tienda Virtual' },
    { id: 2, nameProject: 'Intranet' },
    { id: 3, nameProject: 'Diseño de Sitio web' },
  ];

  const initialState: IInitialStateProject = {
    projects: [],
    form: false,
    error: false,
    project: null,
  };

  const [state, dispatch] = useReducer(projectReducer, initialState);

  const showForm = () => {
    dispatch({
      type: FORM_PROJECT,
    });
  };

  const getProjects = () => {
    dispatch({
      type: GET_PROJECT,
      payload: projects,
    });
  };

  const addProject = (project: IProject) => {
    project.id = uuidv4();

    console.log(project);
    dispatch({
      type: ADD_PROJECT,
      payload: project,
    });
  };

  const showError = () => {
    dispatch({
      type: VALIDATION_FORM,
    });
  };

  const getActualProject = (project: IProject) => {
    dispatch({
      type: ACTUAL_PROJECT,
      payload: project,
    });
  };

  const removeProject = (projectId: string | number | undefined) => {
    dispatch({
      type: REMOVE_PROJECT,
      payload: projectId,
    });
  };

  return (
    <projectContext.Provider
      value={{
        error: state.error,
        projects: state.projects,
        form: state.form,
        project: state.project,
        showForm,
        getProjects,
        addProject,
        showError,
        getActualProject,
        removeProject,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
