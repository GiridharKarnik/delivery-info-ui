import { FC } from 'react';
import { Button } from '../Button/Button';
import { ButtonType } from '../../types.ts';
import { FreeGiftSticker } from '../FreeGiftSticker/FreeGiftSticker.tsx';
import { useDeviceType } from '../../hooks/useDeviceType.ts';

import styles from './DeliveryCard.module.scss';

interface DeliveryCardProps {
  title: string;
  message: string;
  totalPrice: string;
  freeGift: boolean;
  promoImageUrl: string;
  viewDetails: () => void;
  editDelivery: () => void;
}

export const DeliveryCard: FC<DeliveryCardProps> = ({
  title,
  message,
  totalPrice,
  freeGift,
  promoImageUrl,
  viewDetails,
  editDelivery,
}) => {
  const deviceType = useDeviceType();

  const containerStyles = `${styles.deliveryCard} ${
    deviceType === 'mobile'
      ? styles.deliveryCardMobile
      : styles.deliveryCardDesktop
  }`;

  return (
    <div className={containerStyles}>
      <div className={styles.promoImageContainer}>
        <img
          className={styles.promoImage}
          src={promoImageUrl}
          alt="Promo Image"
        />
      </div>

      <div className={styles.deliveryInfo}>
        <h2 className={styles.deliveryTitle}>{title}</h2>
        <p className={styles.deliveryMessage}>{message}</p>
        <p className={styles.totalPrice}>Total Price {totalPrice}</p>
        <div className={styles.userActions}>
          <Button onClick={viewDetails} type={ButtonType.Primary}>
            View details
          </Button>
          <Button onClick={editDelivery} type={ButtonType.Secondary}>
            Edit delivery
          </Button>
        </div>
      </div>

      {freeGift && (
        <div className={styles.promoStickerContainer}>
          <FreeGiftSticker />
        </div>
      )}
    </div>
  );
};
