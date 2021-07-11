import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import projectContext from '../../context/projects/projectContext';
import { ITask } from '../../context/Tasks/dtos';
import taskContext from '../../context/Tasks/taskContext';

const FormTask = () => {
  const { project } = useContext(projectContext);
  const {
    task,
    error,
    addTask,
    validationForm,
    getTasks,
    updateTask,
    cleanTask,
  } = useContext(taskContext);

  useEffect(() => {
    if (task !== null) {
      setNewTask(task);
    } else {
      setNewTask({
        nameTask: '',
        projectId: '',
        stateTask: false,
      });
    }
  }, [task]);

  const [newTask, setNewTask] = useState<ITask>({
    nameTask: '',
    projectId: '',
    stateTask: false,
  });

  const { nameTask } = newTask;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (nameTask.trim() === '') {
      validationForm();
      return;
    }

    if (task === null) {
      newTask.projectId = project?._id;
      addTask(newTask);
    } else {
      updateTask(newTask);
      cleanTask();
    }

    getTasks(project?._id);

    setNewTask({
      nameTask: '',
      projectId: '',
      stateTask: false,
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
            value={task ? 'Editar Tarea' : 'Agregar Tarea'}
          />
        </div>
      </form>
      {error ? (
        <p className="mensaje error">El nombre de la tarea es obligatorio</p>
      ) : null}
    </div>
  );
};

export default FormTask;
