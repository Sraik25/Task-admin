import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import alertContext from '../../context/alerts/alertContext';
import authContext from '../../context/authentication/authContext';

interface IUser {
  email: string;
  password: string;
}

const Login = ({ history }: RouteComponentProps) => {
  const { alertMessage, showAlert } = useContext(alertContext);

  const { message, authenticated, logIn } = useContext(authContext);

  useEffect(() => {
    if (authenticated) {
      history.push('/projects');
    }

    if (message) {
      showAlert(message.msg, message.category);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message, authenticated, history]);

  //local State

  const [user, setUser] = useState<IUser>({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (email.trim() === '' || password.trim() === '') {
      showAlert('Todos los campos son obligatorios', 'alerta-error');
      return;
    }

    // Send Action
    logIn({ email, password });
    // clean fields

    setUser({
      email: '',
      password: '',
    });
  };

  return (
    <div className="form-usuario">
      {alertMessage && (
        <div className={`alerta ${alertMessage.category}`}>
          {alertMessage.msg}
        </div>
      )}
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
              value={email}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Tu Password"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar Sesión"
            />
          </div>
        </form>

        <Link to={'/new-account'} className="enlace-cuenta">
          Obtener cuenta
        </Link>
      </div>
    </div>
  );
};

export default Login;
