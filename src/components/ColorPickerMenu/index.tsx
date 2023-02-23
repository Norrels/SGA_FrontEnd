import * as Menubar from "@radix-ui/react-menubar";
import { ColorPickerMenuContent } from "./style";

export function ColorPickerMenu() {
  return (
    <Menubar.Portal>
      <ColorPickerMenuContent align="center">
        <strong>Temas</strong>
        <p>Altere a cor do sistema</p>
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </ColorPickerMenuContent>
    </Menubar.Portal>
  );
}
