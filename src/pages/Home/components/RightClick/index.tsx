import * as ContextMenu from "@radix-ui/react-context-menu";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { AulaProps } from "../Calenders";
import { EditAllClassModal } from "../EditAllClassModal";
import { EditClassModal } from "../EditClassModal";
import { AulaType } from "../ModalCreateNewClass";
import {
  RightClickContainer,
  RightClickItem,
  RightClickSeperator,
} from "./style";

interface RightClickProps {
  aulas: AulaProps
}

export function RightClick({aulas} : RightClickProps) {
  const [open, setOpen] = useState(false);
  const [openClasses, setOpenClasses] = useState(false);

  //Precisa desse setTime para fecha porque se não ela não fecha quando a modal abrir
  function close() {
    setTimeout(() => {
      setOpen(true);
    }, 5)
  }

  //Precisa desse setTime para fecha porque se não ela não fecha quando a modal abrir
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
        <EditClassModal aulas={aulas} closeModal={closeModal} />
      </Dialog.Root>

      <Dialog.Root open={openClasses} onOpenChange={setOpenClasses}>
        <EditAllClassModal closeModal={closeModal}/>
      </Dialog.Root>
    </>

  );
}
