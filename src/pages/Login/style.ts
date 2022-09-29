import styled, { keyframes } from "styled-components";



export const LoginHeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
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
      border-bottom: 4px solid ${(props) => props.theme["blue-300"]};
      color: ${(props) => props.theme["blue-300"]};
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
      #0031b0 -1.72%,
      #25b5e9 90.1%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  img {
    margin-left: 40px;
    margin-top: -70px;
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
    }
    

    button {
      width: 16.5rem;
      margin-top: 2.75rem;
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

      background: linear-gradient(90deg ,#0F62AB -6.06%, #0031B0 -6.05%, #25B5E9 113.64%);
      background-size: 200% 200%;
      transition-duration: 1s;

      &:hover {
        background-position: 100% 50%;
      }
    }
  }

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
  }
`;

export const LoginLittleDivider = styled.span`
  width: 5.813rem;
  height: 5px;
  margin-bottom: 1.563rem;

  border-radius: 8px;

  display: block;
  background: linear-gradient(
    90deg,
    #0f62ab -1.73%,
    #0031b0 -1.72%,
    #25b5e9 90.1%
  );
`;
