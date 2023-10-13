import { createContext, useState } from 'react';

const AppContext = createContext();

const Provider = (props) => {
  const {children} = props
  const [formState, setFormState] = useState({
    currentStep : 0,
    formFields: {
      name: '',
      email: ''
    },
  });

  return(
    <AppContext.Provider value={[formState, setFormState]}>
      {children}
    </AppContext.Provider> 
  )
}

export {
  Provider,
  AppContext,
};