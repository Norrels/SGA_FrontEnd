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
  font-size: 1.125rem;
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

`

export const LoginFormContent = styled.div`
  max-width: 1120px;
  width: 100% ;
  
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  h1 {
    margin-bottom: 3.5rem;
  }

  img {
    height: 37.688rem;
    padding: 0px;
  }

  form {
    height: 100%;
    padding-top: 5.938rem;
    display: flex;
    flex-direction: column;
  }

  input {
    height: 3.625rem;
    width: 29.688rem;
    margin-bottom: 1.125rem ;
    padding-left: 1.25rem;

    border: none;
    border-radius: 8px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
    background: rgba(255, 255, 255, 0.7);

    display:flex;
    flex-direction: column;
  }

  button {
    margin-top: 2.75rem;
  }
`
