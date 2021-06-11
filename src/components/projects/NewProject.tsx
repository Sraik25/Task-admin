import React, { useContext, useState } from 'react';
import projectContext from '../../context/projects/projectContext';

interface INewProject {
  nameProject: string;
}

const NewProject = () => {
  const projectsContext = useContext(projectContext);

  const { form, error, showForm, addProject, showError } = projectsContext;

  // local State

  const [newProject, setNewProject] = useState<INewProject>({
    nameProject: '',
  });

  const { nameProject } = newProject;

  //
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProject({
      ...newProject,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (nameProject.trim() === '') {
      showError();
      return;
    }

    addProject(newProject);

    setNewProject({
      nameProject: '',
    });
  };

  const onClickForm = () => {
    showForm();
  };

  return (
    <>
      <button
        onClick={onClickForm}
        type="button"
        className="btn btn-block btn-primario"
      >
        Nuevo Proyecto
      </button>
      {form ? (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmit}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            name="nameProject"
            value={nameProject}
            onChange={onChange}
          />

          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Proyecto"
          />
        </form>
      ) : null}
      {error ? (
        <p className="mensaje error">El nombre del proyecto es obligatorio</p>
      ) : null}
    </>
  );
};

export default NewProject;
