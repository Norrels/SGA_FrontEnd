import * as ContextMenu from "@radix-ui/react-context-menu";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { EditAllClassModal } from "../EditAllClassModal";
import { EditClassModal } from "../EditClassModal";
import {
  RightClickContainer,
  RightClickItem,
  RightClickSeperator,
} from "./style";

export function RightClick() {
  const [open, setOpen] = useState(false);

  function close() {
    setTimeout(() => {
      setOpen(true);
    }, 5)
  }

  return (
    <>
      <ContextMenu.Portal>
        <RightClickContainer>
          <RightClickItem onClick={close}>
          Editar aula
          </RightClickItem>
          <RightClickSeperator />
          <RightClickItem onClick={close}>
           Editar aulas
          </RightClickItem>
        </RightClickContainer>
      </ContextMenu.Portal>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <EditClassModal />
      </Dialog.Root>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <EditAllClassModal/>
      </Dialog.Root>
    </>

  );
}
