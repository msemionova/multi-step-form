import styles from './StepItem.module.scss';
import { StepItemProps } from './StepItem.types';

import CircleNumber from '../../atoms/CircleNumber/CircleNumber';

export default function StepItem({ number, title, isActive = false }: StepItemProps) {
  const label = `Step ${number}`;

  return (
    <div className={styles.step}>
      <CircleNumber isActive={isActive}>{number}</CircleNumber>
      <div>
        <span>{label}</span>
        <h2>{title}</h2>
      </div>
    </div>
  );
}
