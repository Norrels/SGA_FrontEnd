import * as Menubar from "@radix-ui/react-menubar";
import { CircleWavyCheck } from "phosphor-react";
import { UpdateMenuContent } from "./style";

export function UpdateMenu() {


  return (
    <Menubar.Portal>
      <UpdateMenuContent align="center">
        <CircleWavyCheck size={50} weight={"thin"}/>
        <p>Uhuu! Sua aplicação está atualizada</p>
        <a href="">Leia as novidades</a>
      </UpdateMenuContent>
    </Menubar.Portal>
  );
}
