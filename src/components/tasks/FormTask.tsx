import React, { useContext, useState } from 'react';
import projectContext from '../../context/projects/projectContext';

interface ITask {
  nameTask: string;
}

const FormTask = () => {
  const projectsContext = useContext(projectContext);

  const { project } = projectsContext;

  const [newTask, setNewTask] = useState<ITask>({
    nameTask: '',
  });

  const { nameTask } = newTask;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (nameTask.trim() === '') {
      return;
    }

    setNewTask({
      nameTask: '',
    });
  };

  if (!project) return null;

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea..."
            name="nameTask"
            value={nameTask}
            onChange={onChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value="Agregar Tarea"
          />
        </div>
      </form>
    </div>
  );
};

export default FormTask;
