import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import Task from './Task';

interface ITask {
  id?: number;
  nameTask: string;
  stateTask: boolean;
}

const ListOfTask = () => {
  const tasks: ITask[] = [
    { id: 1, nameTask: 'Elegir plataforma', stateTask: true },
    { id: 2, nameTask: 'Elegir colores', stateTask: false },
    { id: 3, nameTask: 'Elegir plataforma de Pago', stateTask: true },
  ];

  const projectsContext = useContext(projectContext);

  const { project, removeProject } = projectsContext;

  if (!project) return <h2>Seleccione un proyecto</h2>;

  return (
    <>
      <h2>Proyecto: {project.nameProject}</h2>

      <ul className="listado-tareas">
        {tasks.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tasks.map((task) => <Task key={task.id} task={task} />)
        )}
      </ul>

      <button
        onClick={() => removeProject(project.id)}
        type="button"
        className="btn btn-eliminar"
      >
        Eliminar Proyecto &times;
      </button>
    </>
  );
};

export default ListOfTask;
