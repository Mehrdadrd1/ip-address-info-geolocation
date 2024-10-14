import styled from "styled-components";

export const Button = styled.button((props) => ({
  borderRadius: "8px",
  backgroundImage: props.theme.colors.gradientColor,
  border: "none",
  width: "100%",
  paddingBlock: "12px",
  fontFamily: props.theme.fonts.main,
  color: props.theme.colors.text.secondary,
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "24px",
}));
