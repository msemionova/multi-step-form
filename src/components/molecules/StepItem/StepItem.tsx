import styles from './StepItem.module.scss';
import { StepItemProps } from './StepItem.types';

export default function StepItem({ text }: StepItemProps) {
  return (
    <div className={styles.step}>
      {text}
    </div>
  );
}
