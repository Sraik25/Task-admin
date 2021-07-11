export interface ITaskContext {
  tasks: ITask[];
  tasksProject: ITask[] | null;
  error: boolean;
  task: ITask | null;
  getTasks: (projectId: string | undefined) => void;
  addTask: (task: ITask) => void;
  validationForm: () => void;
  removeTaks: (
    taskId: string | undefined,
    projectId: string | undefined
  ) => Promise<void>;
  changeStateTask: (task: ITask) => void;
  getActualTask: (task: ITask) => void;
  updateTask: (task: ITask) => void;
  cleanTask: () => void;
}

export interface ITask {
  _id?: string;
  nameTask: string;
  stateTask: boolean;
  projectId: string | undefined;
}

export interface IInitialStateTask {
  tasks: ITask[];
  form: boolean;
  error: boolean;
  task: ITask | null;
  tasksProject: ITask[];
}
