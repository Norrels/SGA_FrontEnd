import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Widget } from "../../components/Widget";
import packageJson from "../../../package.json";
import { VersionContainer } from "../../components/VersionFooter/style";

export interface IHeaderProps {
  changeTheme: (theme: string) => void
}

export function DefaultLayout({changeTheme}: IHeaderProps) {
  return (
    <>
      <Header changeTheme={changeTheme} />
      <Widget />
      <VersionContainer>Versão {packageJson.version}</VersionContainer>
      <Outlet />
    </>
  );
}
