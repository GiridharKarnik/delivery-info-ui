import { FC, ReactNode } from 'react';
import styles from './Button.module.scss';
import { ButtonType } from '../../types.ts';

interface ButtonProps {
  onClick: () => void;
  type?: ButtonType;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  onClick,
  type = ButtonType.Primary,
  children,
}) => {
  const buttonStyles = `${styles.button} ${type === ButtonType.Primary ? styles.primaryButton : styles.secondaryButton}`;

  return (
    <button className={buttonStyles} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
};
