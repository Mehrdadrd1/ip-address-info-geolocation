import styled from "styled-components";
import { ButtonProps } from "../../Types";

export const Button = styled.button<ButtonProps>((props) => ({
  borderRadius: "8px",
  backgroundImage: props.disabled ? "none" : props.theme.colors.gradientColor,
  border: "none",
  width: "100%",
  paddingBlock: "12px",
  fontFamily: props.theme.fonts.main,
  color: props.disabled
    ? props.theme.colors.text.disabled
    : props.theme.colors.text.secondary,
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "24px",
  "&:hover": {
    boxShadow: props.disabled
      ? `0px 0px 2px 1px ${props.theme.colors.divider}`
      : "0px 0px 2px 1px #002166",
    cursor: props.isSubmitting ? undefined : "pointer",
  },
  "&:active": {
    transform:
      props.disabled || props.isSubmitting ? "scale(1)" : "scale(0.99)",
    backgroundImage: props.disabled || props.isSubmitting ? undefined : "none",
    backgroundColor:
      props.disabled || props.isSubmitting ? undefined : "#0C317C",
  },
}));
