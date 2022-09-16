import { Outlet } from "react-router-dom";
import { HeaderSup } from "../../components/HeaderSup";

export function DefaultLayoutSup() {
  return (
    <>
      <HeaderSup />
      <Outlet />
    </>
  );
}
