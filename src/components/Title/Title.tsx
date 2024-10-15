import styled from "styled-components";
import { TitleProps } from "../../Types";

export const Title = styled.h2<TitleProps>((props) => ({
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "24px",
  padding: "4px",
  color: props.theme.colors.text[props.color],
}));
