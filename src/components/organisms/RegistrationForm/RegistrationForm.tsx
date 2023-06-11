import { useState } from 'react';
import activeStepContext from 'src/context/activeStepContext';
import styles from './RegistrationForm.module.scss';
import Sidebar from 'src/components/molecules/Sidebar/Sidebar';
import StepContent from 'src/components/molecules/StepContent/StepContent';
import formData from 'src/formData';

export default function RegistrationForm() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <activeStepContext.Provider value={{ activeStep, setActiveStep }}>
      <div className={styles.container}>
        <Sidebar data={formData} />
        <StepContent data={formData} />
      </div>
    </activeStepContext.Provider>
  );
}
