export const dLucasdsa = 'holi';

export interface ITask {
  id?: number;
  nameTask: string;
  stateTask: boolean;
}


export interface IInitialStateTask{
  tasks: ITask[];
  form: boolean;
  error: boolean;
  task: ITask | null;
}