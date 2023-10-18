import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { useContext } from 'react';
import { AppContext } from '../../../(state)/Provider';
import { UPDATE_FORM } from '@/app/(state)/actions';



const FormStep1 = () => {
  const {state, dispatch} = useContext(AppContext);
  const {formFields} = state


  const handleSwitchChange = (e, addOnSelected) => {
    // console.log(e)

    const selectedIndex = formFields.addOns.findIndex( addOn => addOnSelected.id === addOn.id)
    const newState = new Object(formFields.addOns)
    newState[selectedIndex].selected = e.target.checked

    dispatch({
      type: UPDATE_FORM,
      payload: {
        fieldName: 'addOns',
        value: newState
      }
    });
  }

  return (
      <section>
        <h2 className='fontSize32'>
          Pick add-ons
        </h2>
        <p>
          Add-ons help enhance your gaming experience.
        </p>

        <div className='mt30'>
          <FormGroup>

            {formFields.addOns.map(addOn => (
              <FormControlLabel
                key={addOn.id}
                name={addOn.id}
                onChange={(e) => {handleSwitchChange(e, addOn)}}
                control={<Checkbox checked={addOn.selected} />}
                label={ <p> {`${addOn.name} + $${addOn.value}`} </p> }
              />
            ))}
          </FormGroup>
        </div>


      </section>
  );
}

export default FormStep1;
