import { useContext } from 'react';
import { Button } from 'src/components/atoms';
import styles from './Summary.module.scss';
import activeStepContext from 'src/context/activeStepContext';

export default function Summary() {
  const { setActiveStep } = useContext(activeStepContext);

  const dummyData = {
    subscriptionType: 'monthly',
    selectedPlan: 'arcade',
    planPrice: 9,
    selectedAddons: [
      {
        title: 'Online service',
        price: 1
      },
      {
        title: 'Larger storage',
        price: 2
      }
    ]
  };

  const priceEnding = dummyData.subscriptionType === 'monthly' ? 'mo' : 'yr';
  const formatPrice = (price: number) => `$${price}/${priceEnding}`;

  const addonsList = dummyData.selectedAddons.map(addon => {
    return <li key={`summary_item_${Math.random()}`}>
      <p>{addon.title}</p>
      <span>{formatPrice(addon.price)}</span>
    </li>;
  });

  const totalPrice = dummyData.selectedAddons.reduce((sum, item) => {
    return sum + item.price;
  }, dummyData.planPrice);

  return (
    <div className={styles.summary}>
      <div className={styles.container}>
        <div className={styles.head}>
          <div>
            <h3>{`${dummyData.selectedPlan} (${dummyData.subscriptionType})`}</h3>
            <Button
              type='transparent'
              onClick={() => setActiveStep(1)}
            >Change</Button>
          </div>
          <span>{formatPrice(dummyData.planPrice)}</span>
        </div>
        <ul className={styles.list}>
          {addonsList}
        </ul>
      </div>
      <div className={styles.total}>
        <p>Total (per {dummyData.subscriptionType === 'monthly' ? 'month' : 'year'})</p>
        <span>{formatPrice(totalPrice)}</span>
      </div>
    </div>
  );
}
