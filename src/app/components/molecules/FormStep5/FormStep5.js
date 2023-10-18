import Image from 'next/image'
import styles from './page.module.scss'
const imageLocation = '/assets/final.png'



const FormStep5 = () => {
  return (
      <section className={styles.finalBox}>
        <Image
          width={80}
          height={80}
          src={imageLocation}
          alt="Thank you"
        />
        <h2 className='fontSize32'>
          <strong>Thank you!</strong>
        </h2>
        <p>
          Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
        </p>
      </section>
  );
}

export default FormStep5;
