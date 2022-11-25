import styled from "styled-components";

export const ButtonContainer = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;

  z-index: 1000;

  margin-right: 25px;
  margin-bottom: 25px;

  display: flex;
  align-items: center;

  button {
    height: 50px;
    width: 50px;

    border-radius: 1e8px;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #0031b0;
    color: white;
    border: none;
    font-size: 25px;
  }
`;
