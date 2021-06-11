import { createContext } from 'react';
import { IProjectContext } from './dtos';

const projectContext = createContext({} as IProjectContext);

export default projectContext;
