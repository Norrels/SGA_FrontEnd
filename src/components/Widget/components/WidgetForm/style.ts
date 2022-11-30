import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  } 
`;

export const Content = styled.div`
  width: 350px;
  padding: 30px 25px;
  margin-right: 10px;
  margin-bottom: 10px;

  border-radius: 20px;
  background: ${(props) => props.theme["white"]};
  box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.1);
  
  opacity: 0;
  animation: ${fadeIn} 0.4s ease-in-out forwards;
`;

export const TextContent = styled.div`
  margin-bottom: 1rem;

  display: flex;

  button {
    color: black;
    border: none;
    background-color: transparent;
    font-size: 16px;

    transition-duration: 0.3s;

    &:hover {
      color: ${(props) => props.theme["blue-300"]};
    }
  }

  p {
    margin-left: auto;
    margin-right: auto;

    font-size: 1.25rem;
    font-weight: 300;
    color: ${(props) => props.theme["black"]};

    text-align: center;
  }
`;

export const ContainerClose = styled.div`
  svg {
    color: white;
  }
`;

export const ContainerSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    width: 95px;
    padding: 30px 0;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    border-radius: 10px;
    color: white;
    background-color: #f6f6f6;
    cursor: pointer;

    transition-duration: 0.4s;

    &:hover {
      box-shadow: 0px 5px 0px rgba(37, 181, 233, 0.6);
      transform: translateY(-5px);
    }

    p {
      color: black;
    }
  }
`;

export const ContentHeader = styled.div`
  margin-bottom: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    color: black;
    transition-duration: 0.3s;

    &:hover {
      color: ${(props) => props.theme["blue-500"]};
      cursor: pointer;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 24px;
    }

    p {
      margin: 0 5px;

      font-size: 1.25rem;
      font-weight: 500;
      color: ${(props) => props.theme["black"]};

      text-align: center;
    }
  }

  button {
    color: white;
    border: none;
    background-color: transparent;
  }
`;

export const ContentBody = styled.div`
  textarea {
    width: 100%;
    padding: 10px;
    resize: none;

    border: 1px solid gray;
    border-radius: 5px;
    background-color: transparent;
    color: black;
  }
`;

export const ContentFooter = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonLeftContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`;

export const ButtonRightContainer = styled.div`
  button {
    width: 100%;
    padding: 13px;
    width: 300px;
    border-radius: 5px;

    border: none;
    color: white;
    background-color: ${(props) => props.theme["blue-300"]};
  }
`;
