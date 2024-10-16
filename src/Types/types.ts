export interface ContainerProps {
  width: number;
  height: number;
  px: number;
  py: number;
  isExpanded?: boolean;
  maxHeight?: number;
}

export interface TitleProps {
  color: "primary" | "secondary" | "disable";
}

export interface ButtonProps {
  isSubmitting?: boolean;
}

export type AppContextProps = {
  phoneNumber: number;
  setPhoneNumber: (phoneNumber: number) => void;
};

export type TimerProps = {
  timerInSeconds: number;
  handleTimerButton: () => void;
};

export interface PhonNumberInterface {
  phoneNumber: number;
}

export interface OtpField {
  otp: string;
}

export interface IPField {
  ip: string;
}

export type IpDetail = {
  ipVersion: number;
  ipAddress: string;
  latitude: number;
  longitude: number;
  countryName: string;
  countryCode: string;
  timeZone: string;
  zipCode: string;
  cityName: string;
  regionName: string;
  isProxy: boolean;
  continent: string;
  continentCode: string;
  currency: {
    code: string;
    name: string;
  };
  language: string;
  timeZones: string[];
  tlds: string[];
};
