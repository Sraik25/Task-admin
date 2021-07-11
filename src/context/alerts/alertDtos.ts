export interface IAlertContext {
  alertMessage: IAlertMessage | null;
  showAlert: (msg: string, category: string) => void;
}

export interface IAlertMessage {
  msg: string;
  category: string;
}

export interface IIinitalStateAlert {
  alertMessage: IAlertMessage | null;
}
