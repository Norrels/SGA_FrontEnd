import styled from "styled-components";

export const Content = styled.div`
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 20px;

  width: 350px;
  height: 270px;
  background-color: rgb(24, 24, 27);

  padding: 10px;
`;

export const TextContent = styled.div`
  text-align: center;
  padding: 15px;

  display: flex;

  button {
    color: white;
    border: none;
    background-color: transparent;
    font-size: 16px;
  }

  p {
    margin-left: auto;
    margin-right: auto;
    font-size: 18px;
    color: white;
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
  justify-content: center;

  div {
    border-radius: 10px;

    display: flex;
    align-items: center;
    flex-direction: column;

    justify-content: center;
    color: white;

    background-color: rgb(39, 39, 42);
    height: 120px;
    margin: auto;
    width: 28%;
    cursor: pointer;

    :hover {
      transition: ease-in;
      border-bottom: 1px solid ${(props) => props.theme["blue-400"]};
    }
  }

  svg {
    margin-bottom: 10px;
  }
`;

export const ContentHeader = styled.div`
  padding: 15px;

  svg {
    color: white;
    margin-right: 10px;
  }

  display: flex;

  div {
    border-radius: 10px;

    display: flex;
    align-content: center;
    align-items: center;

    color: white;
    width: 33%;
    cursor: pointer;
  }

  button {
    margin-left: auto;
    color: white;
    border: none;
    background-color: transparent;
    font-size: 16px;
  }
`;

export const ContentBody = styled.div`
  padding: 10px;

  textarea {
    resize: none;

    border: 1px solid gray;
    background-color: transparent;
    color: white;
    width: 100%;
    padding: 10px;
  }
`;

export const ContentFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const ButtonLeftContainer = styled.div`
  text-align: center;
  justify-content: center;

  button {
    width: 50%;
    height: 50%;
    margin-right: 10px;
    border-radius: 5px;

    color: white;
    background-color: rgb(39, 39, 42);
    border: none;
  }
`;

export const ButtonRightContainer = styled.div`
  button {
    padding: 10px;
    width: 200px;
    border-radius: 5px;

    border: none;
    color: white;
    background-color: ${(props) => props.theme["blue-400"]};
  }
`;
