/* eslint-disable import/no-anonymous-default-export */

import { IAlertMessage, IIinitalStateAlert } from './alertDtos';

type ACTIONTYPE =
  | { type: 'SHOW_ALERT'; payload: IAlertMessage }
  | { type: 'HIDDEN_ALERT' };

export default (
  state: IIinitalStateAlert,
  action: ACTIONTYPE
): IIinitalStateAlert => {
  switch (action.type) {
    case 'SHOW_ALERT':
      return {
        ...state,
        alertMessage: action.payload,
      };

    case 'HIDDEN_ALERT':
      return {
        ...state,
        alertMessage: null,
      };
    default:
      return state;
  }
};
