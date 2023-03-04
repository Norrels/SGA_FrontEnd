import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../public/Logo-blue.svg";
import Mockup from "../../assets/Mockup.svg";
import { useForm } from "react-hook-form";
import { AuthContext, LoginProps } from "../../contexts/AuthContext";
import * as HoverCard from "@radix-ui/react-hover-card";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import * as Dialog from "@radix-ui/react-dialog";
import {
  LoginHeaderContainer,
  LoginHeaderContent,
  HeaderNavBar,
  LoginFormContainer,
  LoginFormContent,
  LoginLittleDivider,
  LittleDividerContent,
} from "./style";
import { Notification } from "../../components/Notification";
import { FirstAcessAlert } from "./components/FirstAcessAlert";
import { ArrowClockwise } from "phosphor-react";
import { ThemeContext } from "styled-components";

export function Login() {
  document.title = "Login | SGA";

  const { login } = useContext(AuthContext)
  const { register, handleSubmit } = useForm<LoginProps>();
  const [open, setOpen] = useState(false)
  const [isSubmiting, setIsSubmiting] = useState(false)
  const themeContext = useContext(ThemeContext)

  function handleLogin(data: LoginProps) {
    login(data)
    setIsSubmiting(true)
    setTimeout(() => setOpen(true), 2000)
    setTimeout(() => setIsSubmiting(false), 2000)
  }

  function openNotificantionMethod() {
    setOpen(false)
  }

  return (
    <>
      <div style={{}}>
        <LoginHeaderContainer>
          <LoginHeaderContent>
          <img src={`/Logo-${themeContext.theme}.svg`} alt="" />
            <HeaderNavBar>
            </HeaderNavBar>
          </LoginHeaderContent>
        </LoginHeaderContainer>

        <LoginFormContainer>
          <LoginFormContent>
            <form onSubmit={handleSubmit(handleLogin)}>
              <LoginLittleDivider>
                <LittleDividerContent />
                <LittleDividerContent />
              </LoginLittleDivider>
              <h1>
                Gerencie e controle os <br /> espaços da escola
              </h1>

              <input type="text" id="" placeholder="Insira seu nif" autoComplete="username" {...register("nif")} />
              <input type="password" placeholder="Digite sua senha" autoComplete="current-password" {...register("senha")} />
              <sup>
                Após 7 dias o login deverá ser realizado novamente,<br/> ou quando for feito o logout.

              </sup>
              <AlertDialog.Root>
                <AlertDialog.Trigger asChild>
                  <p>Primeiro acesso?</p>
                </AlertDialog.Trigger>
                <FirstAcessAlert />
              </AlertDialog.Root>
              <button type="submit" disabled={isSubmiting}>
                {
                  isSubmiting ? <ArrowClockwise size={24} weight="bold"/> : "Entrar"
                }
              </button>
            </form>
            <img src={`/Mockup-${themeContext.theme}.svg`} alt="" />
          </LoginFormContent>
        </LoginFormContainer>
      </div>
      <Notification tipe="Erro" description="Usuário ou senha incorretos" title="Ocorreu um erro" openNotification={open} openNotificationMethod={openNotificantionMethod} />
    </>
  );
}
