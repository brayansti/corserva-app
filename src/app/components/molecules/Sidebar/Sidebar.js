import styles from './Sidebar.module.scss'
import Image from 'next/image'

import SidebarStep from '../../atoms/Step/SidebarStep'
const imageLocation = '/assets/oval.png'

export default function Sidebar(props) {
  const {steps} = props

  return (
    <section className={styles.main}>

      <div className={styles.steps}>
        {steps.map(step => (
          <SidebarStep key={step.stepNumber} {...step}></SidebarStep>
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
