import * as Menubar from "@radix-ui/react-menubar";
import { CaretUp, CircleWavyCheck, CircleWavyWarning } from "phosphor-react";
import { UpdateMenuContent } from "./style";
import packageJson from "../../../../package.json";
import { useVersion } from "../../../hooks/UseVersion";

export function UpdateMenu() {
  const version = useVersion();

  return (
    <Menubar.Portal>
      <UpdateMenuContent align="center">
        {packageJson.version === version ? (
          <>
            <CircleWavyCheck color="#0031B0" size={50} weight={"thin"} />
            <strong>Uhuu! Sua aplicação está atualizada</strong>
            <a target="_blank" href="https://github.com/Norrels/SGA_FrontEnd/blob/master/patch-notes.md">Leia as novidades</a>
          </>
        ) : (
          <>
            <CircleWavyWarning color="#C80D0D" size={50} weight={"thin"} />
            <strong>Há uma nova versão da aplicação</strong>
            <p>de um git pull no servidor</p>
          </>
        )}
      </UpdateMenuContent>
    </Menubar.Portal>
  );
}
