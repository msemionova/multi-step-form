import styles from './Addon.module.scss';
import { AddonProps } from './Addon.types';

const Addon = ({
  id,
  title,
  description,
  priceMonthly,
  priceYearly,
  type = 'monthly',
  currency = '$',
  isChecked = false
}: AddonProps) => {
  const price: string =
    type === 'monthly' ? `${String(priceMonthly)}/mo` : `${String(priceYearly)}/yr`;

  return (
    <div>
      <input type='checkbox' name='addons' id={id} value={id} defaultChecked={isChecked} />
      <label className={styles.addon} htmlFor={id}>
        <div>
          <h3>{title}</h3>
          <span className={styles.description}>{description}</span>
        </div>
        <span className={styles.price}>{`+${currency}${price}`}</span>
      </label>
    </div>
  );
};

export default Addon;
