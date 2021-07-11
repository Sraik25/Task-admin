import clientAxios from './axios';

const tokenAuth = (token: string) => {
  if (token) {
    clientAxios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete clientAxios.defaults.headers.common['x-auth-token'];
  }
};

export default tokenAuth;
