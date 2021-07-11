import React, { useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/Tasks/taskContext';
import Task from './Task';

const ListOfTask = () => {
  const { tasksProject } = useContext(taskContext);

  const { project, removeProject } = useContext(projectContext);

  if (!project) return <h2>Seleccione un proyecto</h2>;

  return (
    <>
      <h2>Proyecto: {project.nameProject}</h2>

      <ul className="listado-tareas">
        {tasksProject?.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          <TransitionGroup>
            {tasksProject?.map((task) => (
              <CSSTransition key={task._id} timeout={200} classNames="tarea">
                <Task task={task} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </ul>

      <button
        onClick={() => removeProject(project._id)}
        type="button"
        className="btn btn-eliminar"
      >
        Eliminar Proyecto &times;
      </button>
    </>
  );
};

export default ListOfTask;
