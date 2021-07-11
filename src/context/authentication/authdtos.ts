import { INewUser } from '../../components/auth/NewAccount';
import { IAlertMessage } from '../alerts/alertDtos';

export interface IAuthContext {
  token: string | null;
  authenticated: boolean | null;
  user: IUser | null;
  message: IAlertMessage | null;
  loading: boolean;
  registerUser: (user: INewUser) => Promise<void>;
  logIn: (datos: any) => Promise<void>;
  userAuthenticated: () => Promise<void>;
  closeSession: () => void;
}

export interface IInitialStateAuth {
  token: string | null;
  authenticated: boolean | null;
  user: IUser | null;
  message: IAlertMessage | null;
  loading: boolean;
}

export interface IUser {
  nameUser: string;
  email: string;
  _id: string;
}
