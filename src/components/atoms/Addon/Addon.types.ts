export type AddonProps = {
  id: string,
  title: string,
  description: string,
  priceMonthly: number,
  priceYearly: number,
  type?: 'monthly' | 'yearly',
  currency?: string,
  isChecked?: boolean
}
