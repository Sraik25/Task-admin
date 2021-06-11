import React from 'react';
import taskContext from './taskContext';
import {  IInitialStateTask } from './dtos';

const TaskState = () => {
  const initialState: IInitialStateTask = {
    tasks: [],
    error: false,
    form: false,
    task: null,
  };

  return (
    <taskContext.Provider
      value={{
        initialState,
      }}
    >
      ...
    </taskContext.Provider>
  );
};

export default TaskState;
