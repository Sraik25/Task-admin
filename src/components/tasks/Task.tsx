import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import { ITask } from '../../context/Tasks/dtos';
import taskContext from '../../context/Tasks/taskContext';

type Props = {
  task: ITask;
};

const Task = ({ task }: Props) => {
  const { project } = useContext(projectContext);
  const { removeTaks, getTasks, updateTask, getActualTask } =
    useContext(taskContext);

  const deleteTask = () => {
    removeTaks(task._id, project?._id);
    getTasks(project?._id);
  };

  const changeState = (task: ITask) => {
    if (task.stateTask) {
      task.stateTask = false;
    } else {
      task.stateTask = true;
    }

    updateTask(task);
  };

  return (
    <li className="tarea sombra">
      <p>{task.nameTask}</p>
      <div className="estado">
        {task.stateTask ? (
          <button
            onClick={() => changeState(task)}
            type="button"
            className="completo"
          >
            Completo
          </button>
        ) : (
          <button
            onClick={() => changeState(task)}
            type="button"
            className="incompleto"
          >
            Incompleto
          </button>
        )}
      </div>

      <div className="acciones">
        <button
          onClick={() => getActualTask(task)}
          type="button"
          className="btn btn-primario"
        >
          Editar
        </button>
        <button
          onClick={deleteTask}
          type="button"
          className="btn btn-secundario"
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Task;
