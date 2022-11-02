import * as Popover from "@radix-ui/react-popover";
import { ChatTeardropDots } from "phosphor-react";
import { WidgetForm } from "./components/WidgetForm";
import { ButtonContainer } from "./style";

export function Widget() {
  return (
    <ButtonContainer>
      <Popover.Root>
        <Popover.Trigger>
          <ChatTeardropDots />
        </Popover.Trigger>
        <WidgetForm />
      </Popover.Root>
    </ButtonContainer>
  );
}
