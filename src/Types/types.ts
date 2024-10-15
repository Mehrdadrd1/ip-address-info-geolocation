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
