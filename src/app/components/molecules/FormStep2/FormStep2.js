import { styled } from '@mui/material/styles';
import { FormControl, FormControlLabel, Radio, RadioGroup, Stack, Typography, Switch } from '@mui/material';
import { useContext, useState } from 'react';
import { AppContext } from '../../../(state)/Provider';
import styles from './page.module.scss'
import { UPDATE_FORM } from '@/app/(state)/actions';

const FormStep2 = () => {
  const {state, dispatch} = useContext(AppContext);
  const {formFields} = state
  
  const [planSelected, setPlanSelected] = useState(formFields.plan);

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: '#022959',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: '#022959',
      boxSizing: 'border-box',
    },
  }));

  const handleRadioChange = (e) => {
    const selectedIndex = formFields.plans.findIndex( plan => plan.id === e.target.value)
    setPlanSelected(selectedIndex)
    const newState = formFields.plans.map(plan => {
      return {
        ...plan,
        selected: false
      }
    })
    newState[selectedIndex].selected = e.target.checked

    dispatch({
      type: UPDATE_FORM,
      payload: {
        fieldName: 'plans',
        value: newState
      }
    });
  }
  
  const handleSwitchChange = (e) => {
    dispatch({
      type: UPDATE_FORM,
      payload: {
        fieldName: 'suscriptionYearly',
        value: e.target.checked
      }
    });
  }

  return (
      <section>
        <h2 className='fontSize32'>
        Select your plan
        </h2>
        <p>
        You have the option of monthly or yearly billing.
        </p>

        <div className='mt30'>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={formFields.plan}
              onChange={handleRadioChange}
              className={styles.stepRadioGroup}
            >

              {formFields.plans.map((plan , index) => (
                <FormControlLabel
                  key={plan.id}
                  className={`${styles.step} ${styles[`step__step${index+1}`]} ${plan.selected ? styles.active : ''}`}
                  value={plan.id}
                  control={<Radio classes={{ root: styles.customRadio }} />}
                  label={plan.name}
                  />
              ))}
            </RadioGroup>

            <div className={styles.suscriptionBox}>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center">
                <Typography>Monthly</Typography>
                <AntSwitch onChange={handleSwitchChange} checked={formFields.suscriptionYearly} inputProps={{ 'aria-label': 'ant design' }} />
                <Typography>Yearly</Typography>
              </Stack>
            </div>

          </FormControl>
        </div>


      </section>
  );
}

export default FormStep2;
