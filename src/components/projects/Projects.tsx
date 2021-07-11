import React, { useContext, useEffect } from 'react';
import authContext from '../../context/authentication/authContext';
import Bar from '../layout/Bar';
import Sidebar from '../layout/Sidebar';
import FormTask from '../tasks/FormTask';
import ListOfTask from '../tasks/ListOfTask';

const Projects = () => {
  const { userAuthenticated } = useContext(authContext);

  useEffect(() => {
    userAuthenticated()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className="contenedor-app">
      <Sidebar />

      <div className="seccion-principal">
        <Bar />
        <main>
          <FormTask />
          <div className="contenedor-tareas">
            <ListOfTask />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
