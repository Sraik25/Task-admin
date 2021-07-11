import { useContext, useEffect } from 'react';
import authContext from '../../context/authentication/authContext';

const Bar = () => {
  const { user, userAuthenticated, closeSession } = useContext(authContext);

  useEffect(() => {
    userAuthenticated();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="app-header">
      {user && (
        <p className="nombre-usuario">
          Hola <span>{user.nameUser}</span>
        </p>
      )}
      {/* <p className="nombre-usuario">
        Hola <span>Olek</span>
      </p> */}
      <nav className="nav-principal">
        <button
          className="btn btn-blank cerrar-sesion"
          onClick={() => closeSession()}
        >
          Cerrar Sesión
        </button>
      </nav>
    </header>
  );
};

export default Bar;
