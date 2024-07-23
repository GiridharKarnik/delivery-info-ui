export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
}

export enum DeviceType {
  Mobile = 'mobile',
  Desktop = 'desktop',
}

export interface NextDeliveryComms {
  title: string;
  message: string;
  totalPrice: string;
  freeGift: boolean;
}
