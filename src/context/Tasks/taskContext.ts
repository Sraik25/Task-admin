import { createContext } from 'react';
import { ITaskContext } from './dtos';

const taskContext = createContext({} as ITaskContext);

export default taskContext;
