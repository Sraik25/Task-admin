import React from 'react';

type Props = {
  task: TypeTask;
};

type TypeTask = {
  id?: number;
  nameTask: string;
  stateTask: boolean;
};

const Task = ({ task }: Props) => {
  return (
    <li className="tarea sombra">
      <p>{task.nameTask}</p>
      <div className="estado">
        {task.stateTask ? (
          <button type="button" className="completo">
            Completo
          </button>
        ) : (
          <button type="button" className="incompleto">
            Incompleto
          </button>
        )}
      </div>

      <div className="acciones">
        <button type="button" className="btn btn-primario">
          Editar
        </button>
        <button type="button" className="btn btn-secundario">
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Task;
