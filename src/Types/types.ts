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
