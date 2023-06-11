import { useContext } from 'react';
import activeStepContext from 'src/context/activeStepContext';
import styles from './Sidebar.module.scss';
import { SidebarProps } from './Sidebar.types';
import StepTitle from 'src/components/molecules/StepTitle/StepTitle';

export default function Sidebar({ data }: SidebarProps) {
  const { activeStep } = useContext(activeStepContext);

  return (
    <div className={styles.sidebar}>
      {
        data.map((step, index) =>
          <StepTitle
            key={Math.random()}
            number={index + 1}
            title={step.name as string}
            isActive={index === activeStep}
          />)
      }
    </div>
  );
}
