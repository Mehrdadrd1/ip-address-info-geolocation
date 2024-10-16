import styled from "styled-components";
import { ContainerProps } from "../../Types";

export const Container = styled.div<ContainerProps>((props) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: props.width || "100%",
  backgroundColor: props.theme.colors.commonWhite,
  border: `1px solid ${props.theme.colors.border}`,
  borderRadius: "16px",
  paddingInline: props.px || "20px",
  paddingBlock: props.py || "20px",

  transition: "max-height 0.7s ease-in-out",
  maxHeight:
    props.isExpanded && props.maxHeight
      ? `${props.height + props.maxHeight}px`
      : props.height,
  overflow: "hidden",
}));
