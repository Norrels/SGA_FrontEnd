import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  } 
`;

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

  opacity: 0;
  animation: ${fadeIn} 1s 0.2s ease-in-out forwards;
`;

export const DashTitleContainer = styled.div`
  margin-top: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;

  h1 {
    width: 100%;
    margin: 0.5rem;

    font-size: 2.813rem;
    font-weight: 800;
    background: linear-gradient(90deg, #0031b0 40.94%, ${(props) => props.theme["primary_300"]} 58.61%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    text-align: center;
  }

  p {
    width: 100%;
    font-size: 1.125rem;
    font-weight: 800;
    color: ${(props) => props.theme["sub-title"]};

    text-align: center;
  }
`;

export const DashboardContent = styled.div`
  display: grid;
  flex-direction: column;
  grid-template-columns: 70% 30%;
  gap: 1.563rem;

  margin-top: 50px;
  margin-bottom: 10px;
`;
