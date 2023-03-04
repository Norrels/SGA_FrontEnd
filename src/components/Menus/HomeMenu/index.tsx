import * as Menubar from "@radix-ui/react-menubar";
import { NavLink } from "react-router-dom";
import { HeaderNavMenuItem } from "../../Header/style";
import { HeaderNavMenuContent } from "./style";

export function HomeMenu() {
  return (
    <Menubar.Portal>
      <Menubar.Content align="center">
        <HeaderNavMenuContent>
          <HeaderNavMenuItem>
            {location.pathname == "/aulas" ? (
              <NavLink to="/inicio">Inicio</NavLink>
            ) : (
              <NavLink to="/aulas">Aulas</NavLink>
            )}
          </HeaderNavMenuItem>
          <HeaderNavMenuItem>
            {location.pathname == "/dias-nao-letivos" ? (
              <NavLink to="/inicio">Inicio</NavLink>
            ) : (
              <NavLink to="/dias-nao-letivos">Dias não letivos</NavLink>
            )}
          </HeaderNavMenuItem>
        </HeaderNavMenuContent>
      </Menubar.Content>
    </Menubar.Portal>
  );
}
