import styled from "styled-components";

export const InClassContainer = styled.section`
  height: 55.375rem;
  padding: 2.375rem 1.2rem 2.375rem 2.375rem;

  background: ${(props) => props.theme["white-200"]};
  box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  gap: 2rem;
  flex-direction: column;

  h3 {
    color: ${(props) => props.theme["blue-300"]};
    font-size: 1.563rem;
    font-weight: 700;
  }
`;

export const InclassTeacherCards = styled.div`
  overflow: auto;
  padding-right: 0.9rem;

  display: flex;
  flex-direction: column;
  gap: 2.563rem;

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
`;
