import styles from './FieldGroup.module.scss';
import { FieldGroupProps } from './FieldGroup.types';
import { Input, Plan, PaymentType, Addon } from 'src/components/atoms';

export default function FieldGroup({ fieldGroupData }: FieldGroupProps) {
  let content;

  switch (fieldGroupData?.type) {
    case 'inputs': {
      content = fieldGroupData?.fields.map(input =>
        <Input
          key={`input_${Math.random()}`}
          id={input.id}
          label={input.label}
          type={input.type}
          placeholder={input.placeholder}
          pattern={input.pattern}
          required
        />
      );
      break;
    }
    case 'plans': {
      const plans = fieldGroupData?.fields.map((plan, index) =>
        <Plan
          key={`plan_${Math.random()}`}
          id={plan.id}
          priceMonthly={plan.priceMonthly}
          priceYearly={plan.priceYearly}
          currency={plan.currency}
          isChecked={index === 0}
        />
      );

      content = <>
        <div className={styles.plans}>
          {plans}
        </div>
        <PaymentType />
      </>;
      break;
    }
    case 'addons': {
      content = fieldGroupData?.fields.map((addon, index) =>
        <Addon
          key={`addon_${Math.random()}`}
          id={addon.id}
          title={addon.title}
          description={addon.description}
          priceMonthly={addon.priceMonthly}
          priceYearly={addon.priceYearly}
          currency={addon.currency}
          isChecked={index === 0}
        />
      );
      break;
    }
  }

  return (
    <fieldset className={styles['field-group']}>
      {content}
    </fieldset>
  );
}
