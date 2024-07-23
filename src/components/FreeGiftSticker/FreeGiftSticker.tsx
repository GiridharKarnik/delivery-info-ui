import { FC } from 'react';
import styles from './FreeGiftSticker.module.scss';

export const FreeGiftSticker: FC = () => {
  return (
    <div className={styles.freeGiftSticker}>
      <span className={styles.freeGiftText}>Free gift</span>
    </div>
  );
};
