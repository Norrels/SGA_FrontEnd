import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  } 
`;

const swipeRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px)
  }
  to {
    opacity: 1;
    transform: translateX(0)
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

export const PlacesContainer = styled.main`
  width: 100%;

  display: flex;
  justify-content: center;

  
`;

export const PlacesContent = styled.div`
  max-width: 1120px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  opacity: 0;
  animation: ${fadeIn} 1s 2.1s ease-in-out forwards;

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

    opacity: 0;
    animation: ${swipeRight} 1s 2.5s ease-in-out forwards;
  }
`;

export const PlacesTitleContainer = styled.section`
  margin-top: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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

  opacity: 0;
  animation: ${swipeRight} 1s 2.3s ease-in-out forwards;
`;

export const PlacesButtonContainer = styled.div`
  margin-top: 2rem;

  display: flex;
  gap: 2rem;

  button {
    width: 12.5rem;
    height: 3.75rem;

    border: none;
    border-radius: 8px;

    color: ${(props) => props.theme["white"]};
    font-size: 1.125rem;
    font-weight: bold;

    transition-duration: 0.3s;

    &:first-child {
      background: linear-gradient(180deg, #25b5e9 0%, #5aadd1 100%);
    }

    &:last-child {
      background: linear-gradient(180deg, #5aadd1 0%, #367fbf 100%);
    }

    &:hover {
      box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.2);
      transform: translateY(-5px);
    }
  }
`;

export const PlacesList = styled.section`
  margin-top: 2rem;
  margin-bottom: 3rem;
`;
