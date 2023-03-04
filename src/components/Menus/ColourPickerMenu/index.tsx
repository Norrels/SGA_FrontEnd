import * as Menubar from "@radix-ui/react-menubar";
import { Check } from "phosphor-react";
import {
  CheckboxIndicator,
  ColorPickerContainer,
  ColorPickerMenuContent,
} from "./style";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { IHeaderProps } from "../../../layout/DefaultLayout";

export function ColorPickerMenu({changeTheme}: IHeaderProps) {
  return (
    <Menubar.Portal>
      <ColorPickerMenuContent align="center">
        <strong>Temas</strong>
        <p>Altere a cor do sistema</p>
        <RadioGroup.Root asChild onValueChange={(e) => changeTheme(e)}>
          <div>
            {/* <ColorPickerContainer value="green" color="#1b9950">
              <CheckboxIndicator>
                <Check size={17} weight={"bold"} />
              </CheckboxIndicator>
            </ColorPickerContainer> */}

            <ColorPickerContainer value="lilas"  onClick={() => localStorage.setItem('Thema', "lilas")} color="#8037de">
              <CheckboxIndicator>
                <Check size={17} weight={"bold"} />
              </CheckboxIndicator>
            </ColorPickerContainer>

            {/* <ColorPickerContainer value="laranja" color="#ff6200eb">
              <CheckboxIndicator>
                <Check size={17} weight={"bold"} />
              </CheckboxIndicator>
            </ColorPickerContainer>

            <ColorPickerContainer value="vermelho" color="#e00013">
              <CheckboxIndicator>
                <Check size={17} weight={"bold"} />
              </CheckboxIndicator>
            </ColorPickerContainer> */}

            <ColorPickerContainer value="azul"  onClick={() => localStorage.setItem('Thema', "blue")} color="#4a87e2">
              <CheckboxIndicator>
                <Check size={17} weight={"bold"}/>
              </CheckboxIndicator>
            </ColorPickerContainer>

            {/* <ColorPickerContainer value="roxo" color="#c900f1">
              <CheckboxIndicator>
                <Check size={17} weight={"bold"} />
              </CheckboxIndicator>
            </ColorPickerContainer>

            <ColorPickerContainer value="rosa" color="#ea159f">
              <CheckboxIndicator>
                <Check size={17} weight={"bold"} />
              </CheckboxIndicator>
            </ColorPickerContainer>

            <ColorPickerContainer value="white" color="#dcdcdc">
              <CheckboxIndicator>
                <Check size={17} color="#000" weight={"bold"} />
              </CheckboxIndicator>
            </ColorPickerContainer> */}
          </div>
        </RadioGroup.Root>
      </ColorPickerMenuContent>
    </Menubar.Portal>
  );
}
