import { FC, useReducer } from 'react';
import taskContext from './taskContext';
import taskReducer from './taskReducer';
import { IInitialStateTask, ITask } from './dtos';
import clientAxios from '../../config/axios';

const TaskState: FC = (props) => {
  const initialState: IInitialStateTask = {
    tasks: [],
    error: false,
    form: false,
    task: null,
    tasksProject: [],
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  const getTasks = async (projectId: string | undefined) => {
    try {
      const {
        data: { tasks },
      } = await clientAxios.get(`/api/tareas`, {
        params: { projectId },
      });

      dispatch({
        type: 'TASKS_PROJECT',
        payload: tasks,
      });
    } catch ({ response }) {
      console.log(response);
    }
  };

  const addTask = async (task: ITask) => {
    try {
      const { data } = await clientAxios.post('/api/tareas', task);
      dispatch({
        type: 'ADD_TASK',
        payload: data.task,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const validationForm = () => {
    dispatch({
      type: 'VALIDATION_FORMTASK',
    });
  };

  const removeTaks = async (
    taskId: string | undefined,
    projectId: string | undefined
  ) => {
    try {
      await clientAxios.delete(`/api/tareas/${taskId}`, {
        params: { projectId },
      });
      dispatch({
        type: 'REMOVE_TASK',
        payload: taskId,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const changeStateTask = (task: ITask) => {
    console.log(task);
    dispatch({
      type: 'STATE_TASK',
      payload: task,
    });
  };

  const getActualTask = (task: ITask) => {
    dispatch({
      type: 'ACTUAL_TASK',
      payload: task,
    });
  };

  const updateTask = async (task: ITask) => {
    try {
      const result = await clientAxios.put(`/api/tareas/${task._id}`, task);

      console.log(result.data);

      dispatch({
        type: 'UPDATE_TASK',
        payload: task,
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  const cleanTask = () => {
    dispatch({
      type: 'CLEAN_TASK',
    });
  };

  return (
    <taskContext.Provider
      value={{
        tasks: state.tasks,
        tasksProject: state.tasksProject,
        error: state.error,
        task: state.task,
        getTasks,
        addTask,
        validationForm,
        removeTaks,
        changeStateTask,
        getActualTask,
        updateTask,
        cleanTask,
      }}
    >
      {props.children}
    </taskContext.Provider>
  );
};

export default TaskState;
