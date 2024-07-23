import { DeliveryCard } from './components/DeliveryCard/DeliveryCard.tsx';
import styles from './App.module.scss';
import { useState } from 'react';
import { fetchNextDeliveryInfo } from './data/fetchNextDeliveryInfo.ts';
import { NextDeliveryComms } from './types.ts';

function App() {
  const [userId, setUserId] = useState<string>('');
  const [deliveryInfo, setDeliveryInfo] = useState<NextDeliveryComms | null>(
    null
  );

  const fetchDeliveryInfo = async (userId: string) => {
    if (userId.trim() === '') {
      return;
    }

    try {
      const deliveryInfo = await fetchNextDeliveryInfo(userId);
      setDeliveryInfo(deliveryInfo);
    } catch (error) {
      console.error('Error fetching delivery info:', error);
    }
  };

  return (
    <div className={styles.appContainer}>
      <input
        type="text"
        placeholder="Enter user id"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        onBlur={() => {
          fetchDeliveryInfo(userId);
        }}
      />

      {!deliveryInfo ? (
        <p>No delivery information</p>
      ) : (
        <DeliveryCard
          title={deliveryInfo.title}
          message={deliveryInfo.message}
          totalPrice={deliveryInfo.totalPrice}
          freeGift={deliveryInfo.freeGift}
          promoImageUrl="/img.png"
          viewDetails={() => {}}
          editDelivery={() => {}}
        />
      )}
    </div>
  );
}

export default App;
