import styled from "styled-components";

export const ScreenshotBackground = styled.button`
  button {
    padding: 10px;
    width: 35px;
    height: 35px;
    border-radius: 5px;

    border: none;
    color: white;
    background-color: ${(props) => props.theme["gray-700"]};
  
    :hover {
        border: ${(props) => props.theme["blue-400"]} 1px solid;
    }
  }
`;
