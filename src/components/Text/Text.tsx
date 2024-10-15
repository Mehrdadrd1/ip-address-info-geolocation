import styled from "styled-components";
import { TitleProps } from "../../Types";

export const Text = styled.h3<TitleProps>((props) => ({
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "21px",
  padding: "4px",
  color: props.theme.colors.text[props.color],
}));
