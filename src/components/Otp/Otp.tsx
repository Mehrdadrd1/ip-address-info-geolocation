import {
  FC,
  RefCallback,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { Input } from "../Input/Input";

export type OtpFieldProps = {
  config: number[];
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  inputRef?: RefCallback<HTMLInputElement>;
  disabled?: boolean;
};

const Otp: FC<OtpFieldProps> = (props) => {
  const { config, onChange, value, disabled, inputRef, onBlur } = props;
  const ref = useRef<HTMLInputElement | null>(null);

  const lengthUpTo = useCallback(
    (index: number) =>
      config.reduce((prev, curr, i) => (i <= index ? prev + curr : prev), 0),
    [config]
  );

  const parts = useMemo(() => {
    let current = value;

    const result: string[] = [];

    for (const length of config) {
      result.push(current.slice(0, length));

      current = current.slice(length);
    }

    return result;
  }, [config, value]);

  const currentIndex = useMemo(() => {
    const index = parts.findIndex((part, index) => part.length < config[index]);

    return index > -1 ? index : config.length - 1;
  }, [config, parts]);

  const handleChange = useCallback(
    (partValue: string, index: number) => {
      if (!/\D/g.test(value)) {
        onChange(
          (value.slice(0, lengthUpTo(index - 1)) + partValue).slice(
            0,
            lengthUpTo(config.length - 1)
          )
        );
      }
    },
    [config.length, lengthUpTo, onChange, value]
  );

  const handleKeyDown = useCallback(
    (key: string, index: number) => {
      if (!["Backspace", "Delete"].includes(key)) return;
      if (parts[index] !== "") return;
      if (index > 0) handleChange(parts[index - 1].slice(0, -1), index - 1);
    },
    [handleChange, parts]
  );

  useEffect(() => {
    const input = ref.current!;
    const listener = () => onBlur?.();

    inputRef?.(input);

    input.focus();
    input.addEventListener("blur", listener);

    return () => input.removeEventListener("blur", listener);
  }, [currentIndex, inputRef, onBlur]);

  return (
    <div
      dir="ltr"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "nowrap",
        width: "100%",
      }}
    >
      {config.map((_, index) => (
        <div style={{ marginInline: 10, width: "64px", height: "48px" }}>
          <Input
            key={index}
            value={parts[index]}
            autoComplete="off"
            inputMode="numeric"
            disabled={disabled || currentIndex !== index}
            ref={currentIndex === index ? ref : undefined}
            onChange={(event) => handleChange(event.target.value, index)}
            onKeyDown={(event) => handleKeyDown(event.key, index)}
            style={{
              textAlign: "center",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Otp;
