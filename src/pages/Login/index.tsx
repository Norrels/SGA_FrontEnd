import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import Mockup from "../../assets/Mockup.svg";
import {
  LoginHeaderContainer,
  LoginHeaderContent,
  HeaderNavBar,
  LoginFormContainer,
  LoginFormContent,
  LoginLittleDivider,
  LittleDividerContent,
} from "./style";

export function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/aulas", { replace: true });
  }

  return (
    <div style={{}}>
      <LoginHeaderContainer>
        <LoginHeaderContent>
          <img src={Logo} alt="" />
          <HeaderNavBar>
            <NavLink to="/">Login</NavLink>
            <NavLink to="/sobre">Sobre</NavLink>
          </HeaderNavBar>
        </LoginHeaderContent>
      </LoginHeaderContainer>

      <LoginFormContainer>
        <LoginFormContent>
          <form>
            <LoginLittleDivider>
              <LittleDividerContent />
              <LittleDividerContent />
            </LoginLittleDivider>
            <h1>
              Gerencie e controle os <br /> espaços da escola
            </h1>

            <input type="text" name="" id="" placeholder="Insira seu nif" />
            <input type="password" placeholder="Digite sua senha" />
            <sup>
              O login só ira se realizado novamente em 7 dias <br /> após o
              login, ou ao seu deslogar
            </sup>
            <button type="button" onClick={handleLogin}>
              Entrar
            </button>
          </form>

          <img src={Mockup} alt="" />
        </LoginFormContent>
      </LoginFormContainer>
    </div>
  );
}
