import * as Popover from "@radix-ui/react-popover";
import { ChatTeardropDots } from "phosphor-react";
import { useState } from "react";
import { WidgetForm } from "./components/WidgetForm";
import { ButtonContainer } from "./style";

export function Widget() {
  const [open, setOpen] = useState(false);
  function closeModal() {
    setOpen(false);
  }

  return (
    <ButtonContainer>
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger>
          <ChatTeardropDots />
        </Popover.Trigger>
        <WidgetForm closeModal={closeModal}  />
      </Popover.Root>
    </ButtonContainer>
  );
}
