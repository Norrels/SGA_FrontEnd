import styled from "styled-components";

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
    background: linear-gradient(92.38deg, #0e328f 18.43%, #367fbf 81.48%);
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

export const LoginButonContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  button {
    margin-top: 2.75rem;
    height: 4.25rem;
    width: 16.5rem;

    background: linear-gradient(90.12deg, #2E64F0 -8.29%, rgba(45, 51, 102, 0.49) 118.16%);
    border: none;
    border-radius: 8px;

    font-weight: 700;
    font-size: 1.563rem;
    color: ${(props) => props.theme["white"]};
  }
`;

export const LoginLittleDivider = styled.span`
  width: 5.813rem;
  height: 5px;
  margin-bottom: 1.563rem;

  border-radius: 8px;

  display: block;
  background: linear-gradient(90.12deg, #302E88 -8.29%, #7F97BA 118.16%);
`;
