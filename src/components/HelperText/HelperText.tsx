import styled from "styled-components";

export const HelperText = styled.p((props) => ({
  color: props.theme.colors.error,
  padding: "5px",
  fontSize: "12px",
  fontWeight: "300",
  lineHeight: "18px",
}));
