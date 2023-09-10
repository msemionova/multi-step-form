import { useState } from 'react';
import activeStepContext from 'src/context/activeStepContext';
import styles from './RegistrationForm.module.scss';
import { Sidebar, StepContent } from 'src/components/molecules';
import formData from 'src/data/formData';

export default function RegistrationForm() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <activeStepContext.Provider value={{ activeStep, setActiveStep }}>
      <div className={styles.container}>
        <Sidebar formData={formData} />
        <StepContent stepData={formData[activeStep]} />
      </div>
    </activeStepContext.Provider>
  );
}
