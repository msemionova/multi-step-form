import styles from './Heading.module.scss';
import { HeadingProps } from './Heading.types';

export default function Heading({ title, subtitle }: HeadingProps) {
  return (
    <div className={styles.heading}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
