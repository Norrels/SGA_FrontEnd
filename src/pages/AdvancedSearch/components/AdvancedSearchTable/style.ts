import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  } 
`;

export const TableContaine = styled.section`
  width: 75%;
  height: 46.875rem;
  overflow: auto;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.1);
  background: ${(props) => props.theme["white"]};

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

  table {
    width: 100%;
    border-collapse: collapse;
    height: 50;
    border-radius: 8px;
  }

  tbody {
    height: 10px;
    overflow: auto;

    opacity: 0;
    animation: ${fadeIn} 0.4s ease-in-out forwards;
  }

  thead th {
    height: 4.063rem;
    position: sticky;
    top: 0;

    color: ${(props) => props.theme["white"]};
    background: linear-gradient(180deg, #5aadd1 0%, #367fbf 100%);

    opacity: 0;
    animation: ${fadeIn} 0.4s ease-in-out forwards;

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

    button {
      outline: none;
      border: none;
      background: none;
      svg {
        transition-duration: 0.3s;
        &:hover {
          color: ${(props) => props.theme["blue-300"]};
        }
      }
    }
  }
`;

export const Nothing = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  opacity: 0;
  animation: ${fadeIn} 0.4s ease-in-out forwards;
  p {
    margin: 3rem 0;

    font-weight: 400;
    font-size: 1.15rem;
    span {
      color: #5aadd1;
    }
  }

  img {
    width: 500px;
  }
`;