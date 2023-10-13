import { FormControl, TextField } from '@mui/material';
import { useContext } from 'react';
import { AppContext } from '../../../(state)/Provider';

const Step1 = () => {
  const [state, setState] = useContext(AppContext)

  const handleOnChange = (e) => {
    setState({
      ...state,
      name: e.target.value
    })
  }

  return (
      <FormControl>
        <TextField
          label="name"
          name="name"
          variant="outlined"
          onChange={(e) => {handleOnChange(e)}}
        />
      </FormControl>
  );
}

export default Step1;
