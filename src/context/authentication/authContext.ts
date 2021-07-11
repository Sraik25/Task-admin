import { createContext } from 'react';
import { IAuthContext } from './authdtos';

const authContext = createContext<IAuthContext>({} as IAuthContext);

export default authContext;
