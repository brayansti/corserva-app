import {UPDATE_STEP, UPDATE_FORM} from './actions'


const reducer = (state, action) => {
  const {payload} = action
  switch (action.type) {
    case UPDATE_STEP:
      return {
        ...state,
        currentStep: payload,
      };
    case UPDATE_FORM:
      return {
        ...state,
        formFields: {
          ...state.formFields,
          [payload.fieldName]: payload.value,
        },
      };
    default:
      return state;
  }
};

export default reducer;