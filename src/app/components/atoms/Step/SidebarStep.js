import { useContext } from 'react';
import { AppContext } from '@/app/(state)/Provider';

import styles from './Step.module.scss'
import propTypes from 'prop-types';


const SidebarStep = (props) => {
  const { stepNumber, stepDesc} = props
  const {state, dispatch} = useContext(AppContext);
  const {currentStep} = state

  const handleOnClick = () => {
    dispatch({ type: 'UPDATE_STEP', payload: stepNumber });
  }
  
  return (
    // <section className={styles.main} onClick={handleOnClick}>
    <section className={`${styles.main} ${(currentStep === stepNumber) ? styles.isActive : null}`} onClick={handleOnClick}>
      <div className={styles.stepNumber}>
        {stepNumber}
      </div>
      <div className={styles.stepData}>
        <p className={styles.stepData__stepNumber}>STEP {stepNumber}</p>
        <p className={styles.stepData__stepDesc}>{stepDesc}</p>
      </div>
    </section>
  );
}

SidebarStep.propTypes = {
  stepNumber: propTypes.number,
  stepDesc: propTypes.string,
}


export default SidebarStep;