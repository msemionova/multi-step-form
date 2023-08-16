import { useState } from 'react';
import styles from './PaymentType.module.scss';

export default function PaymentType() {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div className={styles['payment-type']}>
      <h4 className={isMonthly ? styles['active'] : ''}>Monthly</h4>
      <label className={styles['switch']}>
        <input
          type='checkbox'
          onChange={() => setIsMonthly(!isMonthly)} defaultChecked={!isMonthly} />
        <span className={styles['slider']}></span>
      </label>
      <h4 className={!isMonthly ? styles['active'] : ''}>Yearly</h4>
    </div>
  );
}
