import { TextField } from '@mui/material';
import { useContext } from 'react';
import { AppContext } from '../../../(state)/Provider';

const FormStep1 = () => {
  const {state, dispatch} = useContext(AppContext);
  const {formFields} = state

  const handleOnChange = (e, controlName) => {
    dispatch({
      type: 'UPDATE_FORM',
      payload: {
        fieldName: controlName,
        value: e.target.value
      }
    });
  }

  return (
      <section>
        <h2 className='fontSize32'>
          Personal info
        </h2>
        <p>
          Please provide your name, email address, and phone number.
        </p>

        <div className='mt30'>
          <TextField
            fullWidth 
            label='Name'
            error={!formFields.name}
            value={formFields.name}
            helperText={!formFields.name ? 'Incorrect entry.' : ''}
            variant="outlined"
            onChange={(e) => {handleOnChange(e, 'name')}}
          />
        </div>

        <div className='mt30'>
          <TextField
            fullWidth 
            label='Email'
            error={!formFields.email}
            value={formFields.email}
            helperText={!formFields.email ? 'Incorrect entry.' : ''}
            variant="outlined"
            onChange={(e) => {handleOnChange(e, 'email')}}
          />
        </div>

        <div className='mt30'>
          <TextField
            fullWidth 
            label='Phone Number'
            error={!formFields.phoneNumber}
            value={formFields.phoneNumber}
            helperText={!formFields.phoneNumber ? 'Incorrect entry.' : ''}
            variant="outlined"
            onChange={(e) => {handleOnChange(e, 'phoneNumber')}}
          />
        </div>


      </section>
  );
}

export default FormStep1;
