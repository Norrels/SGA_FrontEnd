import * as Menubar from "@radix-ui/react-menubar";
import { Check } from "phosphor-react";
import {
  CheckboxIndicator,
  ColorPickerContainer,
  ColorPickerMenuContent,
} from "./style";
import * as RadioGroup from "@radix-ui/react-radio-group";

export function ColorPickerMenu() {
  return (
    <Menubar.Portal>
      <ColorPickerMenuContent align="center">
        <strong>Temas</strong>
        <p>Altere a cor do sistema</p>
        <RadioGroup.Root asChild>
          <div>
            <ColorPickerContainer value="green" color="#1b9950">
              <CheckboxIndicator>
                <Check size={17} weight={"bold"} />
              </CheckboxIndicator>
            </ColorPickerContainer>

            <ColorPickerContainer value="lilas" color="#8037de">
              <CheckboxIndicator>
                <Check size={17} weight={"bold"} />
              </CheckboxIndicator>
            </ColorPickerContainer>

            <ColorPickerContainer value="laranja" color="#ff6200eb">
              <CheckboxIndicator>
                <Check size={17} weight={"bold"} />
              </CheckboxIndicator>
            </ColorPickerContainer>

            <ColorPickerContainer value="Vermelho" color="#e00013">
              <CheckboxIndicator>
                <Check size={17} weight={"bold"} />
              </CheckboxIndicator>
            </ColorPickerContainer>

            <ColorPickerContainer value="Azul" color="#4a87e2">
              <CheckboxIndicator>
                <Check size={17} weight={"bold"} />
              </CheckboxIndicator>
            </ColorPickerContainer>

            <ColorPickerContainer value="Roxo" color="#c900f1">
              <CheckboxIndicator>
                <Check size={17} weight={"bold"} />
              </CheckboxIndicator>
            </ColorPickerContainer>

            <ColorPickerContainer value="Rosa" color="#ea159f">
              <CheckboxIndicator>
                <Check size={17} weight={"bold"} />
              </CheckboxIndicator>
            </ColorPickerContainer>

            <ColorPickerContainer value="White" color="#dcdcdc">
              <CheckboxIndicator>
                <Check size={17} color="#000" weight={"bold"} />
              </CheckboxIndicator>
            </ColorPickerContainer>
          </div>
        </RadioGroup.Root>
      </ColorPickerMenuContent>
    </Menubar.Portal>
  );
}
