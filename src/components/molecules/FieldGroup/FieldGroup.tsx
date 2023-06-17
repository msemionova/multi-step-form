import styles from './FieldGroup.module.scss';
import { FieldGroupProps } from './FieldGroup.types';
import { Input } from 'src/components/atoms';

export default function FieldGroup({ fieldGroupData }: FieldGroupProps) {
  let html;

  switch (fieldGroupData?.type) {
    case 'inputs': {
      html = fieldGroupData?.fields.map(field =>
        <Input
          key={`input_${Math.random()}`}
          id={field.id}
          label={field.label}
          type={field.type}
          placeholder={field.placeholder}
          pattern={field.pattern}
          required
        />
      );
      break;
    }
    case 'plans': {
      html = <div>Plans</div>;
      break;
    }
    case 'addons': {
      html = <div>Addons</div>;
      break;
    }
  }

  return (
    <div className={styles['field-group']}>
      {html}
    </div>
  );
}
