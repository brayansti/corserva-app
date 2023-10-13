'use client';

import { useState, useContext } from 'react';
import styles from './page.module.scss'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import Sidebar from './components/molecules/Sidebar/Sidebar';
// import { useRouter } from 'next/navigation'
// import Link from 'next/link'
import { AppContext } from './(state)/Provider';

const stepsList = [
  {
    isActive: true,
    stepNumber: 1,
    stepDesc: 'YOUR INFO',
  },
  {
    isActive: false,
    stepNumber: 2,
    stepDesc: 'SELECT PLAN',
  },
  {
    isActive: false,
    stepNumber: 3,
    stepDesc: 'ADD-ONS',
  },
  {
    isActive: false,
    stepNumber: 4,
    stepDesc: 'SUMMARY',
  },
]


export default function Main({ children }) {;
  // const router = useRouter()

  const [state, setState] = useContext(AppContext)
  const [steps, setSteps] = useState(stepsList);

  function handleNextClick() {
    const activeStepIndex = steps.findIndex(steps => steps.isActive)
    const nextStepIndex = (activeStepIndex + 1)
    if(nextStepIndex === stepsList.length) {
      alert('Last Step')
    } else {
      const nextStepsList = steps.map((step , i) => {
        return {
          ...step,
          isActive: nextStepIndex === i
        }
      })
      setSteps(nextStepsList)
      // router.push(`/${nextStepsList[nextStepIndex].stepNumber}`)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // const {name, email} = e.target

    // console.log(name.value, name.name)
    // console.log(email.value, email.name)
  }

  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <Grid container>
          <Grid item xs={12} md={4}>
            <Sidebar steps={steps}></Sidebar>
          </Grid>
          <Grid item xs={12} md={8}>
            <form onSubmit={handleSubmit}>
              {children}
              <Button type="submit" variant="contained" color="primary">
                SEND
              </Button>
            </form>
            <Button
              onClick={handleNextClick}
              variant="contained">NEXT STEP
            </Button>
            {state.name}
          </Grid>
        </Grid>
      </section>
    </main>
  )
}
