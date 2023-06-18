export type PlanProps = {
  id: string,
  priceMonthly: number,
  priceYearly: number,
  type?: 'monthly' | 'yearly',
  currency?: string,
  isChecked?: boolean
}
