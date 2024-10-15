import styled from "styled-components";

export const Button = styled.button((props) => ({
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
    cursor: "pointer",
  },
  "&:active": {
    transform: props.disabled ? undefined : "scale(0.99)",
    backgroundImage: "none",
    backgroundColor: props.disabled ? undefined : "#0C317C",
  },
}));
