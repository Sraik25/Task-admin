import React, { useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import alertContext from '../../context/alerts/alertContext';

import projectContext from '../../context/projects/projectContext';
import Project from './Project';

const ListOfProjects = () => {
  const { projects, message, getProjects } = useContext(projectContext);

  const { alertMessage, showAlert } = useContext(alertContext);

  useEffect(() => {
    if (message) {
      showAlert(message.msg, message.category);
    }

    getProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  if (projects.length === 0) return <p>Crea un proyecto</p>;

  return (
    <ul className="listado-proyectos">
      {alertMessage && (
        <div className={`alerta ${alertMessage.category}`}>
          {alertMessage.msg}
        </div>
      )}
      <TransitionGroup>
        {projects.map((project) => (
          <CSSTransition key={project._id} timeout={200} classNames="proyecto">
            <Project key={project._id} project={project} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListOfProjects;
