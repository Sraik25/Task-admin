import { FC, useReducer } from 'react';
import { INewUser } from '../../components/auth/NewAccount';
import clientAxios from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';
import authContext from './authContext';
import { IInitialStateAuth } from './authdtos';
import authReducer from './authReducer';

const AuthState: FC = ({ children }) => {
  const initialState: IInitialStateAuth = {
    token: localStorage.getItem('token'),
    authenticated: null,
    user: null,
    message: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const registerUser = async (user: INewUser) => {

    try {
      const {
        data: { token },
      } = await clientAxios.post('/api/usuarios', user);

      dispatch({
        type: 'REGISTER_SUCCESS',
        payload: token,
      });

      userAuthenticated();
    } catch ({
      response: {
        data: { msg },
      },
    }) {

      const alertMessage = {
        msg,
        category: 'alerta-error',
      };
      dispatch({
        type: 'REGISTER_ERROR',
        payload: alertMessage,
      });
    }
  };

  const userAuthenticated = async () => {
    const token = localStorage.getItem('token');

    if (token) {
      tokenAuth(token);
    }

    try {
      const {
        data: { user },
      } = await clientAxios.get('/api/auth');
      dispatch({
        type: 'GET_USER',
        payload: user,
      });
    } catch ({
      response: {
        data: { msg },
      },
    }) {
      dispatch({
        type: 'LOGIN_ERROR',
        payload: msg,
      });
    }
  };

  const logIn = async (datos: any) => {
    try {
      const {
        data: { token },
      } = await clientAxios.post('/api/auth', datos);

      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: token,
      });

      userAuthenticated();
    } catch ({
      response: {
        data: { msg },
      },
    }) {
      const alertMessage = {
        msg,
        category: 'alerta-error',
      };
      dispatch({
        type: 'LOGIN_ERROR',
        payload: alertMessage,
      });
    }
  };

  const closeSession = () => {
    dispatch({
      type: 'CLOSE_SESSION',
    });
  };

  return (
    <authContext.Provider
      value={{
        token: state.token,
        authenticated: state.authenticated,
        user: state.user,
        message: state.message,
        loading: state.loading,
        registerUser,
        logIn,
        userAuthenticated,
        closeSession,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthState;
