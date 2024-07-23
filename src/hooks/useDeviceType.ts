import { useEffect, useState } from 'react';
import { DeviceType } from '../types.ts';

const MOBILE_WIDTH = 550;

export const useDeviceType = (): DeviceType => {
  const [deviceType, setDeviceType] = useState<DeviceType>(() => {
    return window.innerWidth <= MOBILE_WIDTH
      ? DeviceType.Mobile
      : DeviceType.Desktop;
  });

  useEffect(() => {
    const handleResize = () => {
      const deviceType =
        window.innerWidth <= MOBILE_WIDTH
          ? DeviceType.Mobile
          : DeviceType.Desktop;

      setDeviceType(deviceType);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return deviceType;
};
