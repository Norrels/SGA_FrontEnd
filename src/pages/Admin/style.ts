import styled from "styled-components";

export const AdminContainer = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const AdminContent = styled.div`
  max-width: 1120px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  input {
    height: 3.75rem;
    margin-top: 4.313rem;
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
`;

export const LabelScroolView = styled.div`
  overflow-y: scroll;
  min-height: 200px;

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

export const LabelSelectValue = styled.div`
  height: 3.75rem;
  padding-left: 1.813rem;

  display: flex;
  align-items: center;

  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.4);
  /* box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.1); */

  z-index: 2;
  cursor: pointer;
  color: ${(props) => props.theme["black"]};
  font-weight: 700;
  font-size: 1rem;

  :hover {
    background: rgba(255, 255, 255, 0.8);
  }
`;

export const AdminButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;

  button {
    width: 12.75rem;
    height: 3.75rem;

    background: linear-gradient(180deg, #25b5e9 0%, #5aadd1 100%);
    border-radius: 8px;

    border-radius: 8px;
    border: none;
    background-color: ${(props) => props.theme["blue-500"]};

    color: ${(props) => props.theme["white"]};
    font-size: 1.125rem;
    font-weight: bold;
  }
`;
export const AdminTitleContainer = styled.div`
  margin-top: 2rem;

  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;

  h1 {
    margin: 0.5rem;

    background: linear-gradient(
      90deg,
      #0f62ab 34.97%,
      #0031b0 34.97%,
      #25b5e9 64.48%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 2.813rem;
    font-weight: 800;
    color: ${(props) => props.theme["blue-500"]};
  }

  p {
    font-size: 1.125rem;

    font-weight: 800;
    color: ${(props) => props.theme["sub-title"]};
  }
`;

export const AdminList = styled.section`
  margin-top: 2rem;
  margin-bottom: 3rem;
`;
