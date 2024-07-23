import { useState } from 'react';
import styles from './App.module.scss';

function App() {
  const [userId, setUserId] = useState<string>('');

  return (
    <div className={styles.appContainer}>
      <input
        type="text"
        placeholder="Enter user id"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
    </div>
  );
}

export default App;
