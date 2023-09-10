import styles from './CircleNumber.module.scss';
import { CircleNumberProps } from './CircleNumber.types';

export default function CircleNumber({ isActive = false, children }: CircleNumberProps) {
  const classes = [styles['circle'], isActive ? styles['active'] : ''].filter(Boolean).join(' ');
  return (
    <div className={classes}>
      {children}
    </div>
  );
}
