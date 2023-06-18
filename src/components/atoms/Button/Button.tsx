import styles from './Button.module.scss';
import { ButtonProps } from './Button.types';

const Button = ({ children, onClick, id = '', type = 'primary' }: ButtonProps) => {
  const typeClass = styles[`button--${type}`];
  const classes = [styles['button'], typeClass].filter(Boolean).join(' ');
  const ariaLabel = id.replace('-', ' ');

  return (
    <>
      <button
        id={id}
        data-testid={id}
        onClick={onClick}
        aria-label={ariaLabel}
        className={classes}
      >
        <span>{children}</span>
      </button>
    </>
  );
};

export default Button;
