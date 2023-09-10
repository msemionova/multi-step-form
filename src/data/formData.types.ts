type InputFieldProps = {
  id: string;
  label: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'tel';
  required?: boolean;
  pattern?: string;
  minlength?: number;
  maxlength?: number;
  name?: string;
  title?: string;
  value?: string;
  error?: boolean;
  errorText?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onFocus?: () => void;
};

type PlanFieldProps = {
  id: string;
  priceMonthly: number;
  priceYearly: number;
  currency: string;
};

type AddonFieldProps = {
  id: string;
  title: string;
  description: string;
  priceMonthly: number;
  priceYearly: number;
  currency: string;
};

export type FieldGroupsProps =
  | { type: 'inputs'; fields: InputFieldProps[] }
  | { type: 'plans'; fields: PlanFieldProps[] }
  | { type: 'addons'; fields: AddonFieldProps[] };

export type FormStepProps = {
  name: string;
  title: string;
  subtitle: string;
  fieldGroups?: FieldGroupsProps[];
  buttons?: {
    backBtnText: string;
    nextBtnText: string;
  };
  type?: 'summary' | 'thanks';
};

export type FormDataProps = FormStepProps[];
