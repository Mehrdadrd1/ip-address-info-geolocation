import styled from "styled-components";

export const Container = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "375px",
  height: "410px",
  backgroundColor: props.theme.colors.commonWhite,
  border: `1px solid ${props.theme.colors.border}`,
  borderRadius: "16px",
  paddingInline: "16px",
  paddingBlock: "42px",
}));

interface TitleProps {
  color: "primary" | "secondary" | "disable";
}

export const Title = styled.h2<TitleProps>((props) => ({
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "24px",
  padding: "4px",
  color: props.theme.colors.text[props.color],
}));

export const Title2 = styled.h3<TitleProps>((props) => ({
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "21px",
  padding: "4px",
  color: props.theme.colors.text[props.color],
}));

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
