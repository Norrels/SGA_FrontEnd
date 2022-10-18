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
  const [openClasses, setOpenClasses] = useState(false);

  function close() {
    setTimeout(() => {
      setOpen(true);
    }, 5)
  }

  function closeAulas() {
    setTimeout(() => {
      setOpenClasses(true);
    }, 5)
  }

  function closeModal() {
    setOpen(false);
    setOpenClasses(false);
  }

  return (
    <>
      <ContextMenu.Portal>
        <RightClickContainer>
          <RightClickItem onClick={close}>
          Editar aula
          </RightClickItem>
          <RightClickSeperator />
          <RightClickItem onClick={closeAulas}>
           Editar aulas
          </RightClickItem>
        </RightClickContainer>
      </ContextMenu.Portal>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <EditClassModal closeModal={closeModal} />
      </Dialog.Root>

      <Dialog.Root open={openClasses} onOpenChange={setOpenClasses}>
        <EditAllClassModal closeModal={closeModal}/>
      </Dialog.Root>
    </>

  );
}
