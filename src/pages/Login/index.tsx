import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import Mockup from "../../assets/Mockup.svg"
import { LoginHeaderContainer, LoginHeaderContent, HeaderNavBar, LoginFormContainer, LoginFormContent } from "./style";

export function Login() {
  return (
    <>
      <LoginHeaderContainer>
        <LoginHeaderContent>
          <img src={Logo} alt="" />
          <HeaderNavBar>
            <NavLink to="/">Início</NavLink>
            <NavLink to="/sobre">Sobre</NavLink>
          </HeaderNavBar>
        </LoginHeaderContent>
      </LoginHeaderContainer>

      <LoginFormContainer>
        <LoginFormContent>
          <form action="">
            <h1>Gerencie e controle os <br /> espaços da escola</h1>

            <input type="text" name="" id="" placeholder="Insira seu NIF" />
            <input type="password" placeholder="Digite sua senha" />
            <sup>O login só ira se realizado novamente em 7 dias <br/> após o login, ou ao seu deslogar</sup>

            <button>Entrar</button>
          </form>

          <img src={Mockup} alt="" />
        </LoginFormContent>
      </LoginFormContainer>
    </>
  )
}