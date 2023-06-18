import { useContext } from 'react';
import styles from './StepContent.module.scss';
import { StepContentProps } from './StepContent.types';
import { Heading, Button } from 'src/components/atoms';
import { FieldGroup } from 'src/components/molecules';
import activeStepContext from 'src/context/activeStepContext';

export default function StepContent({ stepData }: StepContentProps) {
  const { activeStep, setActiveStep } = useContext(activeStepContext);

  const backButton = stepData.buttons?.backBtnText &&
    <Button
      id='back-button'
      type='transparent'
      onClick={() => setActiveStep(activeStep - 1)}
    >
      {stepData.buttons?.backBtnText}
    </Button>;

  return (
    <div className={styles.content}>
      <Heading
        key={Math.random()}
        title={stepData.title}
        subtitle={stepData.subtitle}
      />
      {
        stepData.fieldGroups?.map(fieldGroup =>
          <FieldGroup
            key={`fieldgroup_${Math.random()}`}
            fieldGroupData={fieldGroup}
          />
        )
      }
      <div className={styles.buttons}>
        {backButton || <div></div>}
        <Button
          id='next-button'
          type='primary'
          onClick={() => setActiveStep(activeStep + 1)}
        >
          {stepData.buttons?.nextBtnText}
        </Button>
      </div>
    </div>
  );
}
