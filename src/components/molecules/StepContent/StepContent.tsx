import { useContext } from 'react';
import activeStepContext from 'src/context/activeStepContext';
import styles from './StepContent.module.scss';
import { StepContentProps } from './StepContent.types';
import Heading from 'src/components/atoms/Heading/Heading';

export default function StepContent({ data }: StepContentProps) {
  const { activeStep } = useContext(activeStepContext);
  const currentStepData = data[activeStep];

  return (
    <div className={styles.content}>
      <Heading
        key={Math.random()}
        title={currentStepData.title as string}
        subtitle={currentStepData.subtitle as string}
      />
    </div>
  );
}
