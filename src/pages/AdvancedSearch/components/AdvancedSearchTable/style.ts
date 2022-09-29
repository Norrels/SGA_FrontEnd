import styled from "styled-components";

export const TableContaine = styled.section`
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