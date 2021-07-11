import { IAlertMessage } from "../alerts/alertDtos";

export interface IProjectContext {
  projects: IProject[];
  form: boolean;
  error: boolean;
  project: IProject | null;
  message: IAlertMessage| null;
  showForm: () => void;
  getProjects: () => void;
  addProject: (project: IProject) => void;
  showError: () => void;
  getActualProject: (project: IProject) => void;
  removeProject: (projectId: string | undefined) => void;
}

export interface IProject {
  _id?: string;
  nameProject: string;
}

export interface IInitialStateProject {
  projects: IProject[];
  form: boolean;
  error: boolean;
  project: IProject | null;
  message:IAlertMessage | null;
}
