export type ButtonProps = {
  children: React.ReactNode,
  onClick: React.MouseEventHandler<HTMLElement>,
  id?: string,
  type?: 'primary' | 'transparent'
}
