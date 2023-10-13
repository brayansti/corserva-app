'use client'

import { useParams } from 'next/navigation';
import Main from '../page';
import { Provider } from '../(state)/Provider';
import Step1 from '../components/molecules/FormStep1/page';
import Step2 from '../components/molecules/FormStep2/page';

const StepPage = () => {
  const params = useParams();
  const { step } = params;


  return (
    <Provider>
      <Main>
        {step === '1' ? (
          <Step1></Step1>
          ) : step === '2' ? (
          <Step2></Step2>
        ) : step === '3' ? (
          <h1>HOLA 3</h1>
        ) : null}
      </Main>
    </Provider>
  );
}

export default StepPage;


// import { AppContext } from '../(state)/Provider';
// import Main from '../page';
// import Step1 from '../components/molecules/FormStep1/page';
// import Step2 from '../components/molecules/FormStep2/page';

// const StepPage = () => {
//   return (
//     <Main>
//       <AppContext.Consumer>
//         {({ formState, setFormState }) => (
//           <>
//             {step === '1' && <Step1 formState={formState} setFormState={setFormState} />}
//             {step === '2' && <Step2 formState={formState} setFormState={setFormState} />}
//           </>
//         )}
//       </AppContext.Consumer>
//     </Main>
//   );
// }

// export default StepPage;