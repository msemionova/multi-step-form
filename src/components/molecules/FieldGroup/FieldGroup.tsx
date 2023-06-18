import styles from './FieldGroup.module.scss';
import { FieldGroupProps } from './FieldGroup.types';
import { Input, Plan, PaymentType } from 'src/components/atoms';

export default function FieldGroup({ fieldGroupData }: FieldGroupProps) {
  let html, plans;

  switch (fieldGroupData?.type) {
    case 'inputs': {
      html = fieldGroupData?.fields.map(input =>
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
      plans = fieldGroupData?.fields.map((plan, index) =>
        <Plan
          key={`plan_${Math.random()}`}
          id={plan.id}
          priceMonthly={plan.priceMonthly}
          priceYearly={plan.priceYearly}
          currency={plan.currency}
          isChecked={index === 0}
        />
      );

      html = <>
        <fieldset className={styles['plans']}>
          {plans}
        </fieldset>
        <PaymentType />
      </>;
      break;
    }
    case 'addons': {
      html = <div>Addons</div>;
      break;
    }
  }

  return (
    <div className={styles['field-group']}>
      {html}
    </div>
  );
}
