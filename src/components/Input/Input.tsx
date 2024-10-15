import styled from "styled-components";

export const Input = styled.input((props) => ({
  padding: "10px",
  border: `1px solid ${props.theme.colors.border}`,
  borderRadius: "8px",
  width: "100%",
  minHeight: "42px",

  "&::placeholder": {
    float: "right",
    fontFamily: props.theme.fonts.main,
    color: props.theme.colors.text.disable,
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "21px",
  },
  "&:hover": {
    borderColor: props.theme.colors.gradientColor,
  },
}));
