import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  } 
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  } 
`;

const spin = keyframes`
 from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
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

const runRightFirst = keyframes`
  100% {
     transform: translateX(-5%)
  }
`;

const runRightLast = keyframes`
  100% {
     transform: translateX(120%)
  }
`;

export const LoginHeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  animation: ${fadeIn} 1.5s ease-in-out forwards;
`;

export const LoginHeaderContent = styled.div`
  max-width: 1120px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderNavBar = styled.nav`
  width: 90%;
  display: flex;
  justify-content: flex-end;
  gap: 5.188rem;

  a {
    color: ${(props) => props.theme["black"]};
    font-weight: bold;
    font-size: 1.25rem;
    text-decoration: none;

    &.active {
      border-bottom: 4px solid ${(props) => props.theme["primary_300"]};
      color: ${(props) => props.theme["primary_300"]};
    }
  }
`;

export const LoginFormContainer = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const hoverButton = keyframes`
  0% {
    background-position: 0 50%;
  }
  100% {
    background-position: 100% 50%;
  } 
`;

export const LoginFormContent = styled.div`
  max-width: 1120px;
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  h1 {
    margin-bottom: 3.5rem;
    font-weight: 800;
    font-size: 2.5rem;
    background: linear-gradient(
      90deg,
      #0f62ab -1.73%,
      ${(props) => props.theme["blue-800"]} -1.72%,
      ${(props) => props.theme["primary_300"]} 90.1%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${swipeRight} 1.5s ease-in-out forwards;
  }

  img {
    margin-left: 40px;
    margin-top: -70px;
    animation: ${fadeIn} 1.5s 1.2s ease-in-out forwards;
    opacity: 0;
  }

  form {
    height: 100%;
    padding-top: 4.375rem;
    display: flex;
    flex-direction: column;

    sup {
      font-weight: 700;
      font-size: 0.938rem;

      color: ${(props) => props.theme["gray-700"]};
      animation: ${swipeRight} 1.5s 0.6s ease-in-out forwards;
      opacity: 0;
    }

    p {
      margin-top: 1rem;
      opacity: 0;
      font-weight: 700;
      font-size: 0.938rem;

      color: ${(props) => props.theme["blue-400"]};
      animation: ${swipeRight} 1.5s 0.6s ease-in-out forwards;
      width: fit-content;
      cursor: pointer;
    }

    // botão entrar
    button {
      width: 16.5rem;
      margin: 2.75rem auto 0 auto;
      padding: 1.25rem;

      display: flex;
      align-items: center;
      justify-content: center;

      position: relative;

      overflow: hidden;

      border: none;
      border-radius: 8px;

      font-weight: 700;
      font-size: 1.25rem;
      color: ${(props) => props.theme["white"]};

      background: linear-gradient(
        90deg,
        #0f62ab -6.06%,
        ${(props) => props.theme["blue-800"]} -6.05%,
        ${(props) => props.theme["primary_300"]} 113.64%
      );
      background-size: 200% 200%;
      transition-duration: 1s;
      opacity: 0;
      animation: ${swipeRight} 1s 2.1s ease-in-out forwards;

      &:hover {
        background-position: 100% 50%;
      }

      svg {
        animation: ${spin} 1s linear infinite;
      }
    }
  }

  // inputs
  input {
    height: 3.625rem;
    width: 29.688rem;
    margin-bottom: 1.125rem;
    padding-left: 1.25rem;

    border: none;
    border-radius: 8px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
    background: rgba(255, 255, 255, 0.7);

    font-size: 1rem;
    font-weight: 600;
    color: ${(props) => props.theme["black"]};

    display: flex;
    flex-direction: column;
    animation: ${swipeRight} 1.5s 0.6s ease-in-out forwards;
    opacity: 0;

    // Quando o input estiver focado
    &:focus {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.07);
      background: rgba(255, 255, 255, 0.45);
    }

    // Alterar o placeholder do input
    &::-webkit-input-placeholder {
      /* color: ${(props) => props.theme["gray-500"]}; */
    }
  }
`;

export const LoginLittleDivider = styled.div`
  width: 100%;
  height: 10px;
  margin-bottom: 1.563rem;

  border-radius: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`;

export const LittleDividerContent = styled.div`
  height: 100%;
  margin: 0 10px;

  background: linear-gradient(
    90deg,
    #0f62ab -1.73%,
    ${(props) => props.theme["blue-800"]} -1.72%,
    ${(props) => props.theme["primary_300"]} 90.1%
  );
  border-radius: 10px;

  &:first-child {
    width: 25%;
    transform: translateX(-110%);
    animation: ${runRightFirst} 1.2s 2s ease-out forwards;
  }

  &:last-child {
    width: 75%;
    transform: translateX(-150%);
    animation: ${runRightLast} 2s cubic-bezier(0.98, 0, 0.03, 1) forwards;
  }
`;
