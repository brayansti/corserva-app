   
import { createContext, useReducer } from 'react';
import initialState from './initialState';
import reducer from './reducer';

const AppContext = createContext();

const Provider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { Provider, AppContext };