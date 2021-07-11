import { FC, useReducer } from 'react';
import alertContext from './alertContext';
import alertReducer from './alertReducer';
import { IIinitalStateAlert } from './alertDtos';

const AlertState: FC = ({ children }) => {
  const initalState: IIinitalStateAlert = {
    alertMessage: null,
  };
  const [state, dispatch] = useReducer(alertReducer, initalState);

  const showAlert = (msg: string, category: string) => {
    dispatch({
      type: 'SHOW_ALERT',
      payload: { msg, category },
    });

    setTimeout(() => {
      dispatch({
        type: 'HIDDEN_ALERT',
      });
    }, 5000);
  };

  return (
    <alertContext.Provider
      value={{ alertMessage: state.alertMessage, showAlert }}
    >
      {children}
    </alertContext.Provider>
  );
};

export default AlertState;
