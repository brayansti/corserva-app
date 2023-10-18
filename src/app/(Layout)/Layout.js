'use client';

import { useContext } from 'react';
import styles from './page.module.scss'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import Sidebar from '../components/molecules/Sidebar/Sidebar';
import { AppContext } from '../(state)/Provider';


import FormStep1 from '../components/molecules/FormStep1/FormStep1';
import FormStep2 from '../components/molecules/FormStep2/FormStep2';
import FormStep3 from '../components/molecules/FormStep3/FormStep3';
import FormStep4 from '../components/molecules/FormStep4/FormStep4';
import FormStep5 from '../components/molecules/FormStep5/FormStep5';


const stepsList = [
  {
    // isActive: true,
    stepNumber: 1,
    stepDesc: 'YOUR INFO',
  },
  {
    // isActive: false,
    stepNumber: 2,
    stepDesc: 'SELECT PLAN',
  },
  {
    // isActive: false,
    stepNumber: 3,
    stepDesc: 'ADD-ONS',
  },
  {
    // isActive: false,
    stepNumber: 4,
    stepDesc: 'SUMMARY',
  },
]


const Layout = ({ children }) => {
  const {state, dispatch} = useContext(AppContext);

  const { currentStep } = state;

  const handleNextClick = () => {
    dispatch({ type: 'UPDATE_STEP', payload: (currentStep + 1) });
  }
  
  const handlePrevClick = () => {
    dispatch({ type: 'UPDATE_STEP', payload: (currentStep - 1) });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <Grid container>
          <Grid item xs={12} md={4}>
            <Sidebar steps={stepsList}></Sidebar>
          </Grid>
          <Grid item xs={12} md={8}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <>
                {currentStep === 1 && <FormStep1></FormStep1>}
                {currentStep === 2 && <FormStep2></FormStep2>}
                {currentStep === 3 && <FormStep3></FormStep3>}
                {currentStep === 4 && <FormStep4></FormStep4>}
                {currentStep === 5 && <FormStep5></FormStep5>}
              </>
              <div className={styles.buttons}>
                <Button
                  onClick={handlePrevClick}
                  variant="contained">Go Back
                </Button>
                <Button
                  onClick={handleNextClick}
                  variant="contained">Next Step
                </Button>
              </div>
            </form>
          </Grid>
        </Grid>
      </section>
    </main>
  )
}


export default Layout