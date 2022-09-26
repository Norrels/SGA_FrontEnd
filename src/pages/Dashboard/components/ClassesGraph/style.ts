import styled from "styled-components";

export const ClassGraphContainer = styled.section`
  margin: 1.188rem 0rem;
  padding: 1.875rem 1.875rem 2.5rem 1.875rem;

  background: ${(props) => props.theme["white-200"]};
  border-radius: 8px;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ClassGraphText = styled.article`
  width: 10.375rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    color: ${(props) => props.theme["blue-300"]};
    font-size: 1.563rem;
  }

  p {
    font-size: 1rem;
    font-weight: 600;
  }
`;

export const ClassGraphCard = styled.article`
  width: 6.75rem;
  height: 6.25rem;
  position: relative;

  background-color: ${(props) => props.theme["white"]};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  display: flex;
  padding: 1.625rem 1.125rem;
  justify-content: center;
  flex-direction: column;
  gap: 0.563rem;

  span {
    width: 2.188rem;
    height: 2.188rem;
    position: absolute;
    top: -1rem;

    background-color: ${(props) => props.theme["blue-300"]};
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    margin-top: 1rem;

    font-size: 0.9rem;
    font-weight: 700;
  }

  strong {
    font-size: 1.875rem;
  }
`;
