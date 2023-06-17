import styles from './StepContent.module.scss';
import { StepContentProps } from './StepContent.types';
import { Heading } from 'src/components/atoms';
import { FieldGroup } from 'src/components/molecules';

export default function StepContent({ stepData }: StepContentProps) {
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
    </div>
  );
}
