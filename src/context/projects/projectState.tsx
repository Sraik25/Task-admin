import { FC, useReducer } from 'react';

import projectContext from './projectContext';
import projectReducer from './projectReducer';

import { IInitialStateProject, IProject } from './dtos';
import clientAxios from '../../config/axios';

const ProjectState: FC = (props) => {
  const initialState: IInitialStateProject = {
    projects: [],
    form: false,
    error: false,
    project: null,
    message: null,
  };

  const [state, dispatch] = useReducer(projectReducer, initialState);

  const showForm = () => {
    dispatch({
      type: 'FORM_PROJECT',
    });
  };

  const getProjects = async () => {
    try {
      const {
        data: { projects },
      } = await clientAxios.get('/api/proyectos');

      dispatch({
        type: 'GET_PROJECT',
        payload: projects,
      });
    } catch ({ response: { data } }) {
      const alertMessage = {
        msg: data,
        category: 'alerta-error',
      };

      dispatch({
        type: 'PROJECT_ERROR',
        payload: alertMessage,
      });
    }
  };

  const addProject = async (project: IProject) => {
    try {
      const { data } = await clientAxios.post('/api/proyectos', project);

      dispatch({
        type: 'ADD_PROJECT',
        payload: data,
      });
    } catch ({ response: { data } }) {
      const alertMessage = {
        msg: data,
        category: 'alerta-error',
      };

      dispatch({
        type: 'PROJECT_ERROR',
        payload: alertMessage,
      });
    }
  };

  const showError = () => {
    dispatch({
      type: 'VALIDATION_FORM',
    });
  };

  const getActualProject = (project: IProject) => {
    dispatch({
      type: 'ACTUAL_PROJECT',
      payload: project,
    });
  };

  const removeProject = async (projectId: string | undefined) => {
    try {
      await clientAxios.delete(`/api/proyectos/${1}`);
      dispatch({
        type: 'REMOVE_PROJECT',
        payload: projectId,
      });
    } catch ({ response: { data } }) {
      const alertMessage = {
        msg: data,
        category: 'alerta-error',
      };

      dispatch({
        type: 'PROJECT_ERROR',
        payload: alertMessage,
      });
    }
  };

  return (
    <projectContext.Provider
      value={{
        error: state.error,
        projects: state.projects,
        form: state.form,
        project: state.project,
        message: state.message,
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
