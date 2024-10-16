import styled from "styled-components";

export const Input = styled.input((props) => ({
  fontFamily: props.theme.fonts.main,
  fontSize: "18px",
  padding: "10px",
  border: `1px solid ${props.theme.colors.border}`,
  borderRadius: "8px",
  width: "100%",
  minHeight: "42px",
  textAlign: "center",
  "&::placeholder": {
    fontFamily: props.theme.fonts.main,
    color: props.theme.colors.text.disable,
    fontSize: "14px",
    fontWeight: "400",
  },
  "&:hover": {
    borderColor: "#1043A6",
  },
  "&:focus": {
    outline: "none", // Removes the default focus outline
    border: `1px solid #1043A6`, // Uses the theme's border color on focus
  },
}));
