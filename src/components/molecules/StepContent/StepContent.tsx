import { useContext } from 'react';
import styles from './StepContent.module.scss';
import { StepContentProps } from './StepContent.types';
import { Heading, Button } from 'src/components/atoms';
import { FieldGroup, Summary } from 'src/components/molecules';
import activeStepContext from 'src/context/activeStepContext';

export default function StepContent({ stepData }: StepContentProps) {
  const { activeStep, setActiveStep } = useContext(activeStepContext);
  const isLastStep = stepData.type === 'thanks';
  const headingType = isLastStep ? 'centered' : '';

  const backButton = stepData.buttons?.backBtnText &&
    <Button
      id='back-button'
      type='transparent'
      onClick={() => setActiveStep(activeStep - 1)}
    >
      {stepData.buttons?.backBtnText}
    </Button>;

  const nextButton = !isLastStep &&
    <Button
      id='next-button'
      type='primary'
      onClick={() => setActiveStep(activeStep + 1)}
    >
      {stepData.buttons?.nextBtnText}
    </Button>;

  let content;

  switch (stepData.type) {
    case 'summary': {
      content = <Summary />;
      break;
    }
    default: {
      content = stepData.fieldGroups?.map(fieldGroup =>
        <FieldGroup
          key={`fieldgroup_${Math.random()}`}
          fieldGroupData={fieldGroup}
        />
      );
      break;
    }
  }

  const classes = [
    styles.content,
    styles[isLastStep ? 'content--centered' : '']
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {isLastStep && <i />}
      <Heading
        key={Math.random()}
        title={stepData.title}
        subtitle={stepData.subtitle}
        type={headingType}
      />
      {content}
      <div className={styles.buttons}>
        {backButton || <div></div>}
        {nextButton}
      </div>
    </div>
  );
}
