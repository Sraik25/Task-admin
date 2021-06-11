import React, { useState } from 'react';

interface INewUser {
  nameUser: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const NewAccount = () => {
  //local State

  const [newUser, setNewUser] = useState<INewUser>({
    nameUser: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { nameUser, email, password, confirmPassword } = newUser;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (
      nameUser.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      confirmPassword.trim() === ''
    ) {
      return;
    }

    // Validation password
    if (password.trim() !== confirmPassword.trim()) {
      return;
    }

    // Send Action

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
