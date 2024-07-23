import { useState } from 'react';
import styles from './App.module.scss';
import { DeliveryCard } from './components/DeliveryCard/DeliveryCard.tsx';

function App() {
  const [userId, setUserId] = useState<string>('');

  const deliveryMessage = {
    title: 'Your next delivery for Maymie and Murphy',
    message:
      "Hey Tyra! In two days' time, we'll be charging you for your next order for Maymie and Murphy's fresh food.",
    totalPrice: '£71.25',
    freeGift: false,
  };

  return (
    <div className={styles.appContainer}>
      <input
        type="text"
        placeholder="Enter user id"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />

      <DeliveryCard
        title={deliveryMessage.title}
        message={deliveryMessage.message}
        totalPrice={deliveryMessage.totalPrice}
        freeGift={deliveryMessage.freeGift}
        promoImageUrl="/img.png"
      />
    </div>
  );
}

export default App;
