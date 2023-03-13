import styled, { css, keyframes } from "styled-components";
import * as ContextMenu from "@radix-ui/react-context-menu";
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  } 
`;
export const HomeCalenderContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  opacity: 0;
  animation: ${fadeIn} 1s 0.4s ease-in-out forwards;
`;
export const HomeCalenderHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: sticky;
  padding-top: 1rem;
  padding-bottom: 1rem;
  top: 0;
  z-index: 1;
`;
export const HomeCalenderOrderBy = styled.span`
  width: 12.5rem;
  background: ${(props) => props.theme["white-400"]};
  border-radius: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    background: linear-gradient(
      180deg,
      ${(props) => props.theme["primary_300"]} 45.83%,
      ${(props) => props.theme["blue-500"]} 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-family: "Inter";
    font-weight: 700;
    font-size: 1.25rem;
  }
`;
export const HomeCalenderHeaderDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 6.6rem);
  flex-direction: row;
  gap: 1.5rem;
`;
const DAY = {
  today: "today",
  notToday: "notToday",
} as const;
interface DayProps {
  days: keyof typeof DAY;
}
export const HomeCalenderDay = styled.span<DayProps>`
  width: 7.188rem;
  height: 6rem;
  background: ${(props) => props.theme["white-400"]};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 9px;
  gap: 0.563rem;
  strong {
    background: ${(props) => {
      if (props.days == "today") {
        return `${props.theme["blue-600"]}`;
      } else if (DAY[props.days] == "notToday") {
        return `linear-gradient(180deg, ${props.theme["primary_300"]} 45.83%, ${props.theme["blue-500"]} 100%)`;
      }
    }};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 600;
    font-size: 2rem;
  }
  p {
    text-transform: capitalize;
    font-weight: 700;
    font-size: 0.75rem;
  }
`;
export const HomeCalenderContent = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const HomePlaces = styled.span`
  width: 12.5rem;
  height: 10.3rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  p {
    width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    direction: ltr;
    color: ${(props) => props.theme["blue-500"]};
    font-family: "Inter";
    font-weight: 700;
    font-size: 1.25rem;
  }
`;
export const HomeClassesContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(7, 6.6rem);
  flex-direction: row;
  gap: 1.5rem;
`;
const PERIOD = {
  MANHA: "blue-400",
  TARDE: "blue-500",
  NOITE: "blue-600",
  INTEGRAL: "blue-700",
} as const;
interface ClassProps {
  period: keyof typeof PERIOD;
}
export const HomeClasses = styled.div`
  width: 7.188rem;
  height: 10.3rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 9px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas: "manha" "tarde" "noite";
  gap: 0.5rem;
`;

export const HomeButtonClickRoot = styled(ContextMenu.Trigger)<ClassProps>`
  ${(props) =>
    props.period == "MANHA" &&
    css`
      grid-area: manha;
      div {
        border-radius: 8px 8px 0px 0px;
      }
    `}
  ${(props) =>
    props.period == "TARDE" &&
    css`
      grid-area: tarde;
      div {
        border-radius: 0px 0px 0px 0px;
      }
    `}
  ${(props) =>
    props.period == "NOITE" &&
    css`
      grid-area: noite;
      div {
        border-radius: 0px 0px 8px 8px;
      }
    `}
    ${(props) =>
    props.period == "INTEGRAL" &&
    css`
      grid-area: manha;
      div {
        height: 100px;
        border-radius: 8px 8px 0px 0px;
      }
    `}
`;

export const HomeClass = styled.div<ClassProps>`
  display: flex;
  height: 100%;
  width: 115px;
  flex-direction: column;
  justify-content: center;
  padding: 0.4rem;
  border-radius: 0;
  grid-area: tarde;
  background-color: ${(props) => props.theme[PERIOD[props.period]]};
  color: ${(props) => props.theme["white"]};
  &:not(:has(p)) {
    background: transparent;
  }
  p {
    font-size: 1rem;
    font-weight: 700;
    width: 100%;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    direction: ltr;
  }
  sup {
    width: 100%;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    direction: ltr;
  }
`;

export const HomeDivider = styled.span`
  opacity: 0.2;
  margin-top: 50px;
  background-color: ${(props) => props.theme["gray-700"]};
  display: block;
  height: 1px;
  width: 100%;
  z-index: -1;
`;
