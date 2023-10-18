import { Link } from '@mui/material';
import { useContext, useState } from 'react';
import { AppContext } from '../../../(state)/Provider';
import styles from './page.module.scss'
import { UPDATE_STEP } from '@/app/(state)/actions';
import { getFinalPrice } from '@/app/(utils)/priceUtils';

const FormStep1 = () => {
  const {state, dispatch} = useContext(AppContext);
  const {formFields} = state
  const [planSelected] = useState( formFields.plans.filter(plan => plan.selected)[0] )
  const [finalPrice] = useState( getFinalPrice(formFields) )

  const handdleOnClickLink = () => {
    dispatch({ type: UPDATE_STEP, payload: 2 });
  }



  return (
      <section>
        <h2 className='fontSize32'>
          Finishing up
        </h2>
        <p>
          Double-check everything looks OK before confirming.
        </p>

        <div className='mt30'>
          <section className={styles.resumeBox}>
            <div className={styles.resumeBox__item}>
              <div className={styles.resumeBox__item_left}>
                <p>
                  <strong>
                    {planSelected.name}
                    ({formFields.suscriptionYearly === true ? 'Yearly' : 'Monthly'})
                  </strong>
                </p> 
                <Link onClick={handdleOnClickLink}>Change</Link>
              </div>
              <div className={styles.resumeBox__item_right}>
                <strong> {`$${planSelected.value}/mo`} </strong>
              </div>
            </div>


            {formFields.addOns.map(addOn => (
              addOn.selected && (
                <div key={addOn.id} className={styles.resumeBox__item}>
                  <div className={styles.resumeBox__item_left}>
                    <p>{addOn.name}</p> 
                  </div>
                  <div className={styles.resumeBox__item_right}>
                    {`+${addOn.value}/mo`}
                  </div>
                </div>
              )
            ))}
          </section>

          <section className={styles.resumePriceBox}>
            <div className={styles.resumePriceBox__item}>
              <div className={styles.resumePriceBox__item_left}>
                Total (per {formFields.suscriptionYearly ? 'Year' : 'Month'})
              </div>
              <div className={styles.resumePriceBox__item_right}>
                <strong> {`$${finalPrice}/ ${formFields.suscriptionYearly ? 'yr' : 'mo'} `} </strong>
              </div>
            </div>
          </section>
        </div>


      </section>
  );
}

export default FormStep1;
