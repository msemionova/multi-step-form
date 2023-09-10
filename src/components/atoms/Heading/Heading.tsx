import styles from './Heading.module.scss';
import { HeadingProps } from './Heading.types';

export default function Heading({ title, subtitle, type }: HeadingProps) {
  const headingClass = type ? `heading--${type}` : '';
  const classes = [styles.heading, styles[headingClass]].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
