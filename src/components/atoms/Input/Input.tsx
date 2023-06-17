import styles from './Input.module.scss';
import { InputProps } from './Input.types';

const Input = ({
  id,
  label,
  type = 'text',
  placeholder = '',
  pattern,
  minlength,
  maxlength,
  name = id,
  title = '',
  value,
  required
}: InputProps) => {
  const labelElement = label &&
    <label htmlFor={name} className={styles['label']}>{label}</label>;

  return (
    <div className={styles['input-field']}>
      {labelElement}
      <input
        className={styles['input']}
        id={id}
        type={type}
        placeholder={placeholder}
        pattern={pattern}
        minLength={minlength}
        maxLength={maxlength}
        name={name}
        title={title}
        value={value}
        required={required}
      />
    </div>
  );
};

export default Input;
