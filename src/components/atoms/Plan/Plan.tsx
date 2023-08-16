import styles from './Plan.module.scss';
import { PlanProps } from './Plan.types';

const Plan = ({
  id,
  priceMonthly,
  priceYearly,
  type = 'monthly',
  currency = '$',
  isChecked = false
}: PlanProps) => {
  const price: string =
    type === 'monthly' ? `${String(priceMonthly)}/mo` : `${String(priceYearly)}/yr`;
  const iconClasses: string = [styles.icon, styles[`icon--${id}`]].filter(Boolean).join(' ');

  return (
    <div>
      <input type='radio' name='plans' id={id} value={id} defaultChecked={isChecked} />
      <label className={styles.plan} htmlFor={id}>
        <i className={iconClasses} />
        <h3>{id}</h3>
        <span>{`${currency}${price}`}</span>
        {type === 'yearly' && <p>2 monts free</p>}
      </label>
    </div>
  );
};

export default Plan;
