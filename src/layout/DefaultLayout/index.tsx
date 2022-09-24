import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Widget } from "../../components/Widget";

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Widget />
      <Outlet />
    </>
  );
}
