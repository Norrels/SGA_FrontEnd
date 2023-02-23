import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Widget } from "../../components/Widget";
import packageJson from "../../../package.json";
import { VersionContainer } from "../../components/VersionFooter/style";

console.log(packageJson.version)
export function DefaultLayout() {
  return (
    <>
      <Header />
      <Widget />
      <VersionContainer>Versão {packageJson.version}</VersionContainer>
      <Outlet />
    </>
  );
}
