import styles from './Step.module.scss'
import propTypes from 'prop-types';
import { useRouter } from 'next/navigation'

const Step = (props) => {
  const {isActive, stepNumber, stepDesc} = props

  const router = useRouter()

  const handleOnClick = () => {
    router.push(`/${stepNumber}`)
  }
  
  return (
    // <section className={styles.main} onClick={handleOnClick}>
    <section className={`${styles.main} ${isActive ? styles.isActive : null}`} onClick={handleOnClick}>
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

Step.propTypes = {
  isActive: propTypes.bool,
  stepNumber: propTypes.number,
  stepDesc: propTypes.string,
}


export default Step;