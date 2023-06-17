export type InputProps = {
  id?: string,
  label?: string,
  type?: 'text' | 'tel' | 'password' | 'email' | 'hidden',
  placeholder?: string,
  pattern?: string,
  minlength?: number,
  maxlength?: number,
  name?: string,
  title?: string,
  value?: string,
  required?: boolean
}
