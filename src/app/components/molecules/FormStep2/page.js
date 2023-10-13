import { FormControl, TextField } from '@mui/material';

function Step2() {
  return (
    <FormControl>
      <TextField
        label="email"
        name="email"
        variant="outlined"
      />
    </FormControl>
  );
}

export default Step2;