import { createContext } from 'react';
import { IAlertContext } from './alertDtos';

const alertContext = createContext<IAlertContext>({} as IAlertContext);

export default alertContext;
