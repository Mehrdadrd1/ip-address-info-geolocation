import styled from "styled-components";

export const Container = styled.div<{ width: number; height: number }>(
  (props) => ({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: props.width,
    height: props.height,
    backgroundColor: props.theme.colors.commonWhite,
    border: `1px solid ${props.theme.colors.border}`,
    borderRadius: "16px",
    paddingInline: "16px",
    paddingBlock: "42px",
  })
);
