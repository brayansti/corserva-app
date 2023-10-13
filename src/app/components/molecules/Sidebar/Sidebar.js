import styles from './Sidebar.module.scss'
import Image from 'next/image'

import Step from '../../atoms/Step/Step'

export default function Sidebar(props) {
  const {steps} = props
  const imageLocation = '/assets/oval.png'

  return (
    <section className={styles.main}>

      <div className={styles.steps}>
        {steps.map(step => (
          <Step key={step.stepNumber} {...step}></Step>
        ))}
      </div>

      <Image
        src={imageLocation}
        fill={true}
        alt="Picture of the author"
      />
    </section>
  );
}
