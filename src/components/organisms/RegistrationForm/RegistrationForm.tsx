import { useState } from 'react';
import styles from './RegistrationForm.module.scss';
import StepItem from 'src/components/molecules/StepItem/StepItem';

export default function RegistrationForm() {
  const [activeStep] = useState(0);
  const steps = [
    'Your info',
    'Select plan',
    'Add-ons',
    'Summary'
  ];

  return (
    <div className={styles['container']}>
      <div className={styles['sidebar']}>
        {
          steps.map((step, index) =>
            <StepItem
              key={Math.random()}
              number={index + 1}
              title={step}
              isActive={index === activeStep}
            />)
        }
      </div>
    </div>
  );
}
