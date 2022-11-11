import * as HoverCard from "@radix-ui/react-hover-card";
import styled from "styled-components";

export const HoverCardContainer = styled(HoverCard.Content)`
  background: ${(props) => props.theme["white"]};
  padding: 1.5rem 2.5rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  margin-top: 1rem;
  z-index: 2;

  h4 {
    width: 100%;

    text-align: center;
    font-size: 1.25rem;
    color: ${(props) => props.theme["sub-title"]};
    font-weight: 800;
  }

  p {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    font-weight: 600;
    font-size: 1.125rem;
    color: ${(props) => props.theme["gray-700"]};
  }

`;

export const CaretUpContainer = styled.span`

    position: absolute;
    top: -1rem;
    width: 100%;  
    left: 0rem;
    display: flex;
    justify-content:center;

  
`

const PERIOD = {
    morning: "blue-400",
    afternoon: "blue-500",
    night: "blue-600",
  } as const;
  
  interface subtitleProps {
    period: keyof typeof PERIOD;
  }
  

export const HoverCardSubtitleColor = styled.span<subtitleProps>`
  height: 1.2rem;
  width: 1.25rem;
  display: block;
  background: ${(props) =>  props.theme[PERIOD[props.period]]};
`;
