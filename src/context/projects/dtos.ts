export interface IProjectContext {
  projects: IProject[];
  form: boolean;
  error: boolean;
  project: IProject | null;
  showForm: () => void;
  getProjects: () => void;
  addProject: (project: IProject) => void;
  showError: () => void;
  getActualProject: (project: IProject) => void;
  removeProject: (projectId: string | number | undefined) => void;
}

export interface IProject {
  id?: number | string;
  nameProject: string;
}

export interface IInitialStateProject {
  projects: IProject[];
  form: boolean;
  error: boolean;
  project: IProject | null;
}