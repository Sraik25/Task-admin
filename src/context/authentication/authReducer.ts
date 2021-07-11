/* eslint-disable import/no-anonymous-default-export */

import { IAlertMessage } from '../alerts/alertDtos';
import { IInitialStateAuth, IUser } from './authdtos';

type ACTIONTYPE =
  | { type: 'REGISTER_SUCCESS'; payload: string }
  | { type: 'REGISTER_ERROR'; payload: IAlertMessage }
  | { type: 'GET_USER'; payload: IUser }
  | { type: 'LOGIN_SUCCESS'; payload: string }
  | { type: 'LOGIN_ERROR'; payload: IAlertMessage }
  | { type: 'CLOSE_SESSION' };

export default (
  state: IInitialStateAuth,
  action: ACTIONTYPE
): IInitialStateAuth => {
  switch (action.type) {
    case 'REGISTER_SUCCESS':
    case 'LOGIN_SUCCESS':
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        authenticated: true,
        message: null,
        loading: false,
      };

    case 'REGISTER_ERROR':
    case 'LOGIN_ERROR':
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        message: action.payload,
        loading: false,
      };

    case 'GET_USER':
      return {
        ...state,
        authenticated: true,
        user: action.payload,
        loading: false,
      };

    case 'CLOSE_SESSION':
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        user: null,
        authenticated: null,
        message: null,
        loading: false,
      };

    default:
      return state;
  }
};
