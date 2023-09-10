import { useContext } from 'react';
import activeStepContext from 'src/context/activeStepContext';
import styles from './Sidebar.module.scss';
import { SidebarProps } from './Sidebar.types';
import { StepTitle } from 'src/components/molecules';

export default function Sidebar({ formData }: SidebarProps) {
  const { activeStep } = useContext(activeStepContext);

  return (
    <div className={styles.sidebar}>
      {
        formData.map((step, index) =>
          <StepTitle
            key={`step_${Math.random()}`}
            number={index + 1}
            title={step.name}
            isActive={index === activeStep}
          />)
      }
    </div>
  );
}
