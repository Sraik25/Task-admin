/* eslint-disable import/no-anonymous-default-export */
import { IInitialStateTask, ITask } from './dtos';

type ACTIONTYPE =
  | { type: 'TASKS_PROJECT'; payload: ITask[] }
  | { type: 'ADD_TASK'; payload: ITask }
  | { type: 'VALIDATION_FORMTASK' }
  | { type: 'REMOVE_TASK'; payload: number | string | undefined }
  | { type: 'STATE_TASK'; payload: ITask }
  | { type: 'ACTUAL_TASK'; payload: ITask }
  | { type: 'UPDATE_TASK'; payload: ITask }
  | { type: 'CLEAN_TASK' };

export default (state: IInitialStateTask, action: ACTIONTYPE) => {
  switch (action.type) {
    case 'TASKS_PROJECT':
      return {
        ...state,
        tasksProject: action.payload,
      };

    case 'ADD_TASK':
      return {
        ...state,
        tasksProject: [action.payload, ...state.tasksProject],
        error: false,
      };

    case 'VALIDATION_FORMTASK':
      return {
        ...state,
        error: true,
      };

    case 'REMOVE_TASK':
      return {
        ...state,
        tasksProject: state.tasksProject.filter(
          (task) => task._id !== action.payload
        ),
      };

    case 'UPDATE_TASK':
    case 'STATE_TASK':
      return {
        ...state,
        tasksProject: state.tasksProject.map((task) =>
          task._id === action.payload._id ? action.payload : task
        ),
      };

    case 'ACTUAL_TASK':
      return {
        ...state,
        task: action.payload,
      };

    case 'CLEAN_TASK':
      return {
        ...state,
        task: null,
      };

    default:
      return state;
  }
};
