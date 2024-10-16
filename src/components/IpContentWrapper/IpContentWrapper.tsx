import styled from "styled-components";

export const IpContentWrapper = styled.div<{ isVisible: boolean }>((props) => ({
  direction: "ltr",
  width: "806px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  backgroundColor: props.theme.colors.ipBackground,
  padding: "16px",
  marginTop: "32px",
  borderRadius: "12px",
  opacity: 0,
  transform: "translateY(20px)",
  transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
  transitionDelay: "0.7s",

  ...(props.isVisible && {
    opacity: 1,
    transform: "translateY(0)",
  }),
}));
