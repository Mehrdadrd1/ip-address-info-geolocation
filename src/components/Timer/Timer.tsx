import { FC, memo, useEffect, useState } from "react";
import { Link } from "../Link/Link";
import { TimerProps } from "../../Types";

const Timer: FC<TimerProps> = ({ handleTimerButton, timerInSeconds }) => {
  const [timeLeft, setTimeLeft] = useState(() => timerInSeconds);

  useEffect(() => {
    if (timeLeft === 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const remainingTimeFormat = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div>
      {timeLeft !== 0 && (
        <Link style={{ fontSize: "14px" }}>
          {remainingTimeFormat(timeLeft)}
        </Link>
      )}
      {timeLeft === 0 && <Link onClick={handleTimerButton}>ارسال مجدد</Link>}
    </div>
  );
};

export default memo(Timer);
