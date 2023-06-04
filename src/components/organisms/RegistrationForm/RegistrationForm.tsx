import styles from './RegistrationForm.module.scss';

import CircleNumber from '../../atoms/CircleNumber/CircleNumber';

export default function RegistrationForm() {
  return (
    <div className={styles['container']}>
      <div className={styles['sidebar']}>
        <CircleNumber isActive={true}>1</CircleNumber>
        <CircleNumber>2</CircleNumber>
      </div>
    </div>
  );
}
