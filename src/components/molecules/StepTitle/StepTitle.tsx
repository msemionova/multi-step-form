import styles from './StepTitle.module.scss';
import { StepTitleProps } from './StepTitle.types';
import { CircleNumber } from 'src/components/atoms';

export default function StepTitle({ number, title, isActive = false }: StepTitleProps) {
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
