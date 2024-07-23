import { NextDeliveryComms } from '../types.ts';

export const fetchNextDeliveryInfo = async (
  userId: string
): Promise<NextDeliveryComms | null> => {
  const url = `http://localhost:3000/comms/your-next-delivery/${userId}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};
