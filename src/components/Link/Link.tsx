import styled from "styled-components";

export const Link = styled.p((props) => ({
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "21px",
  padding: "5px",
  color: "transparent", // Text color set to transparent
  background: props.theme.colors.gradientColor, // Use gradient from theme
  backgroundClip: "text", // Clip background to text
  WebkitBackgroundClip: "text", // For webkit browsers
  WebkitTextFillColor: "transparent", // For webkit browsers to render gradient
  "&:hover": {
    cursor: "pointer",
    textDecoration: `underline #1043A6`,
  },
}));
