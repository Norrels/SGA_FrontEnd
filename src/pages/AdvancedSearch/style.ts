import styled, { keyframes } from "styled-components";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Accordion from "@radix-ui/react-accordion";

export const HeaderContainer = styled.header`
  width: 100%;
  margin-top: 2rem;

  display: flex;
  justify-content: center;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderNavBar = styled.nav`
  width: 80%;

  display: flex;
  justify-content: space-evenly;

  a {
    color: ${(props) => props.theme["black"]};
    font-weight: bold;
    font-size: 1.25rem;
    text-decoration: none;

    &.active {
      border-bottom: 4px solid ${(props) => props.theme["blue-300"]};
      color: ${(props) => props.theme["blue-300"]};
    }
  }
`;

export const HeaderUser = styled.span`
  color: ${(props) => props.theme["black"]};
  font-weight: bold;
  font-size: 1.25rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  button {
    border: none;

    display: flex;
    align-items: center;
  }
`;

export const HeaderNavMenu = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  svg {
    cursor: pointer;
  }

  :has(a.active) {
    svg {
      color: ${(props) => props.theme["blue-300"]};
    }
  }
`;

export const HeaderNavMenuArrow = styled.span`
  width: 100%;
  margin-top: -1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${(props) => props.theme["white"]} !important;
  }
`;

export const HeaderNavMenuContent = styled(DropdownMenu.Content)`
  background: ${(props) => props.theme["white"]};
  padding: 0.2rem 0.6rem 0.6rem 0.6rem;
  border-radius: 8px;
  margin-top: 1rem;

  a {
    &.active {
      border-bottom: unset;
      color: unset;
    }
  }
`;

export const HeaderNavMenuItem = styled(DropdownMenu.Item)`
  width: 100%;

  display: flex;
  border-radius: 4px;

  cursor: pointer;
  transition: color, background-color 0.1s;

  &:hover {
    background: ${(props) => props.theme["blue-500"]};
  }

  a {
    width: 100%;
    max-width: 100%;
    padding: 4px;

    transition: color, background-color 0.1s;

    &:hover {
      color: ${(props) => props.theme["white"]};
    }
  }
`;

export const AdvancedContainer = styled.main`
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const AdvancedContent = styled.div`
  max-width: 1120px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AdvancedSearchInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 4.313rem;
  gap: 1.938rem;

  input {
    width: 70%;
    height: 3.75rem;

    padding-left: 1.813rem;

    border: none;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.1);

    color: ${(props) => props.theme["black"]};
    font-weight: 700;
    font-size: 1rem;

    &:placeholder {
      font-weight: 500;
      color: ${(props) => props.theme["sub-title"]};
    }
  }

  button {
    width: 6.25rem;
    border-radius: 8px;
    border: 2px solid ${(props) => props.theme["blue-600"]};
    font-size: 1rem;
    color: ${(props) => props.theme["blue-600"]};
    font-weight: 500;

    &:hover {
      background: ${(props) => props.theme["blue-600"]};
      color: ${(props) => props.theme["white"]};
    }
  }
`;

export const AdvancedTitleContainer = styled.section`
  margin-top: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    margin: 0.5rem;
    width: 100%;
    text-align: center;
    font-size: 2.813rem;
    font-weight: 800;
    background: linear-gradient(
      90deg,
      #0f62ab 40.94%,
      #0031b0 40.94%,
      #25b5e9 58.61%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.125rem;
    font-weight: 800;
    color: ${(props) => props.theme["sub-title"]};
  }
`;

export const AdvancedButtonContainer = styled.div`
  margin-top: 2rem;

  display: flex;
  gap: 2rem;

  button {
    width: 12.75rem;
    height: 3.75rem;

    border: none;
    border-radius: 8px;
    background-color: ${(props) => props.theme["blue-500"]};

    color: ${(props) => props.theme["white"]};
    font-size: 1.125rem;
    font-weight: bold;
  }
`;

export const AdvancedTableContent = styled.main`
  display: flex;

  gap: 2.625rem;
  height: 46.875rem;

  aside {
    width: 25%;
    border-radius: 8px;
    padding: 1.875rem 1.25rem;
    background-color: ${(props) => props.theme["white"]};
    overflow: auto;
    box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.1);

    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    ::-webkit-scrollbar-track {
      border-radius: 10px;
      background: rgba(0, 0, 0, 0.1);
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: rgba(0, 0, 0, 0.2);
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 0, 0, 0.4);
    }
    ::-webkit-scrollbar-thumb:active {
      background: rgba(0, 0, 0, 0.9);
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;
    height: 50;
    border-radius: 8px;
  }

  tbody {
    height: 10px;
    overflow: auto;
    box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.1);
  }

  thead th {
    height: 4.063rem;
    position: sticky;
    top: 0;
    color: ${(props) => props.theme["white"]};

    background: linear-gradient(180deg, #5aadd1 0%, #367fbf 100%);

    &:first-child {
      border-radius: 8px 0px 0px 0px;
    }

    &:last-child {
      border-radius: 0px 8px 0px 0px;
    }
  }

  tr {
    height: 3.438rem;

    background: ${(props) => props.theme["white"]};

    :nth-child(2n) {
      background: ${(props) => props.theme["white-200"]};
    }

    svg {
      cursor: pointer;
    }
  }

  td {
    vertical-align: middle;
    text-align: center;
    font-weight: 500;
  }
`;

export const TableContainer = styled.section`
  width: 75%;
  height: 46.875rem;
  overflow: auto;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.1);
  background: transparent;

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    position: absolute;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.1);
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.2);
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.4);
  }
  ::-webkit-scrollbar-thumb:active {
    background: rgba(0, 0, 0, 0.9);
  }
`;

export const AdvancedFilterItens = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 0.4rem;

  span {
    font-weight: 400;
    font-size: 0.938rem;
    color: ${(props) => props.theme["gray-700"]};
  }

  input[type="date"] {
    background: ${(props) => props.theme["white-500"]};
    border: none;
    height: 1.875rem;
  }
`;

const Open = keyframes` 
  from { height: 0; }
  to { height: 'var(--radix-accordion-content-height)'; }
`;

const Close = keyframes` 
  from { height: 'var(--radix-accordion-content-height)'; }
  to { height: 0; }
`;

export const AdvancedContentTitle = styled(Accordion.Header)`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme["gray-700"]};

  button {
    border: none;
    background: transparent;
    transition: transform 1s;
  }

  svg {
    transition: transform 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  button[data-state="open"] {
    svg {
      transform: rotate(180deg);
    }
  }

  p {
    font-size: 1.125rem;
  }
`;

export const AdvancedFilterContainer = styled(Accordion.Root)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AdvancedFilterContent = styled(Accordion.Content)`
  &[data-state="open"] {
    animation: ${Open} 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  &[data-state="close"] {
    animation: ${Close} 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }
`;

export const AdvancedFilterLabel = styled.span`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  margin-bottom: 1rem;
  gap: 0.3rem;
  align-items: center;
  font-weight: 700;
`;

export const AdvancedFilterTotal = styled.span`
  display: flex;
  justify-content: right;
  margin: 1rem 0rem;

  p {
    text-align: center;
    width: 72%;
  }
`;
