/* eslint-disable import/no-anonymous-default-export */

import { IInitialStateProject, IProject } from './dtos';

type ACTIONTYPE =
  | { type: 'FORM_PROJECT' }
  | { type: 'GET_PROJECT'; payload: IProject[] }
  | { type: 'ADD_PROJECT'; payload: IProject }
  | { type: 'VALIDATION_FORM' }
  | { type: 'ACTUAL_PROJECT'; payload: IProject }
  | { type: 'REMOVE_PROJECT'; payload: string | number | undefined };

export default (state: IInitialStateProject, action: ACTIONTYPE) => {
  switch (action.type) {
    case 'FORM_PROJECT':
      return {
        ...state,
        form: !state.form,
      };

    case 'GET_PROJECT':
      return {
        ...state,
        projects: action.payload,
      };

    case 'ADD_PROJECT':
      return {
        ...state,
        projects: [...state.projects, action.payload],
        form: !state.form,
        error: false,
      };

    case 'VALIDATION_FORM':
      return {
        ...state,
        error: true,
      };

    case 'ACTUAL_PROJECT':
      return {
        ...state,
        project: action.payload,
      };

    case 'REMOVE_PROJECT':
      return {
        ...state,
        projects: state.projects.filter(
          (project: IProject) => project.id !== action.payload
        ),
        project: null,
      };

    default:
      return state;
  }
};
