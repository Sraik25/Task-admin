import { useContext, useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import alertContext from '../../context/alerts/alertContext';
import authContext from '../../context/authentication/authContext';

export interface INewUser {
  nameUser: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

const NewAccount = ({ history }: RouteComponentProps) => {
  const { alertMessage, showAlert } = useContext(alertContext);

  const { message, authenticated, registerUser } = useContext(authContext);

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

  const [newUser, setNewUser] = useState<INewUser>({
    nameUser: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { nameUser, email, password, confirmPassword } = newUser;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (
      nameUser.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      confirmPassword?.trim() === ''
    ) {
      showAlert('Todos los campos son obligatorios', 'alerta-error');
      return;
    }

    if (password.length < 6) {
      showAlert('El password debe ser minimo de 6 caracteres', 'alerta-error');
      return;
    }

    // Validation password
    if (password.trim() !== confirmPassword?.trim()) {
      showAlert('Los password no son iguales', 'alerta-error');
      return;
    }

    // Send Action

    registerUser({ nameUser, email, password });

    // Clean fields

    setNewUser({
      nameUser: '',
      email: '',
      password: '',
      confirmPassword: '',
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
        <h1>Obtener un cuenta</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="nameUser">Nombre</label>
            <input
              type="text"
              id="nameUser"
              name="nameUser"
              placeholder="Tu nombre"
              value={nameUser}
              onChange={onChange}
            />
          </div>

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
            <label htmlFor="confirm_password">Confirmar Password</label>
            <input
              type="password"
              id="passwconfirm_passwordord"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Tu Password"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Registrarme"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewAccount;
