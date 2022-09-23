import styled from "styled-components";

export const DashContainer = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const DashContent = styled.div`
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

export const DashButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;

  button {
    width: 12.75rem;
    height: 3.75rem;

    border-radius: 8px;
    border: none;
    background-color: ${(props) => props.theme["blue-500"]};

    color: ${(props) => props.theme["white"]};
    font-size: 1.125rem;
    font-weight: bold;
  }
`;
export const DashTitleContainer = styled.div`
  margin-top: 2rem;

  justify-content: center;
  text-align: center;
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
      #0031b0 40.94%,
      #25b5e9 58.61%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    font-size: 1.125rem;

    font-weight: 800;
    color: ${(props) => props.theme["sub-title"]};
  }
`;

export const DashList = styled.section`
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

export const DashboardContent = styled.div`
  display: grid;
  flex-direction: column;
  grid-template-columns: 70% 30%;

  margin-top: 50px;
`;

export const DashLeftBoard = styled.div``;

export const DashRightBoard = styled.div``;

export const FirstBlock = styled.div`
  background: rgba(255, 255, 255, 0.62);
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 9px;
  height: 707px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  padding: 30px;
`;

export const FirtTextBlock = styled.div`
  h3 {
    font-weight: 700;
    font-size: 25px;
    line-height: 29px;
    color: ${(props) => props.theme["blue-500"]};
  }
  p {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    margin-top: 20px;
  }
`;

export const FirstSelectBlock = styled.div`
  margin-left: auto;
  select {
    border-radius: 8px;
    padding: 10px;

    margin-left: 20px;
    font-weight: bold;
    border: none;
    box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.1);
  }
`;

export const BlockText = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;
  h3 {
    color: ${(props) => props.theme["blue-500"]};
  }

  margin-bottom: 20px;
`;





export const SecondBlock = styled.div`
  margin-top: 20px;

  background: rgba(255, 255, 255, 0.62);
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 9px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  padding: 30px;

  margin-bottom: 20px;
`;

export const SecondBlockContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
`;

export const SecondBlockContent = styled.div`
  h3 {
    color: ${(props) => props.theme["blue-500"]};
  }

  margin-top: auto;
`;

export const BlockDay = styled.div<ArrowProps>`
  display: block;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  width: 108px;
  height: 100px;

  span {
    display: flex;
    position: relative;
    width: 35px;
    height: 35px;

    border-radius: 9px;
    background-color: ${(props) => props.theme["blue-200"]};

    top: -10px;
    left: 10px;

    align-items: center;
    justify-content: center;
  }

  p,
  h2 {
    margin-left: 15px;
  }

  h2 {
    margin-top: 5px;
  }

  h2 svg {
    color: ${(props) => {
      if (props.theme[ARROW[props.arrow]] == "#000") {
        return "green";
      } else {
        return "red";
      }
    }};
  }
`;

const ARROW = {
  1: "black",
  2: "white",
} as const;

interface ArrowProps {
  arrow: keyof typeof ARROW;
}

export const ThreeBlock = styled.div`
  background: rgba(255, 255, 255, 0.62);
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 9px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  padding: 30px;

  margin-left: 15px;
`;

export const TeacherClassContainer = styled.div`
  overflow-y: scroll;
  height: 800px;

  padding-right: 10px;

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
