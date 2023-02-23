import styled, { keyframes } from "styled-components";
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  } 
`;
const load = keyframes`
  20% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
  80% {
    opacity: 1;
    transform: scale(1) rotate(360deg);
  }
  100% {
    transform: scale(0) rotate(360deg);
    opacity: 0;
  }
`;
export const Load = styled.div`
  width: 270px;
  height: 270px;
  margin: 240px auto 0 auto;
  position: absolute;
  z-index: 1;
  img {
    width: 100%;
  }
  opacity: 0;
  transform: scale(0.5);
  animation: ${load} 2s ease-in-out forwards;
`;
export const HomeContainer = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const HomeContent = styled.div`
  max-width: 1120px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const HomeTitleContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
  z-index: 2px;
  h1 {
    width: 100%;
    margin: 0.5rem;
    font-size: 2.813rem;
    font-weight: 800;
    background: linear-gradient(90deg, #0031b0 40.94%, #25b5e9 58.61%);
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
export const HomeButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonTitle = styled.button`
  width: 12.5rem;
  height: 3.75rem;
  margin: 0 1rem;

  border: none;
  border-radius: 8px;
  color: ${(props) => props.theme["white"]};
  font-size: 1.125rem;
  font-weight: bold;
  transition-duration: 0.3s;
  &:first-child {
    background: linear-gradient(180deg, #25b5e9 0%, #5aadd1 100%);
  }
  &:nth-child(3) {
    background: linear-gradient(180deg, #5aadd1 0%, #367fbf 100%);
  }
  &:nth-child(5) {
    background: linear-gradient(180deg, #367fbf 0%, #0031b0 100%);
  }
  &:hover {
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
`;
