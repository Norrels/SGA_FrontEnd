import * as ContextMenu from "@radix-ui/react-context-menu";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { AulaProps } from "../Calenders/TeacherCalender";

import { EditAllClassModal } from "../EditAllClassModal";
import { EditClassModal, EditClassModalProps } from "../EditClassModal";
import { AulaType } from "../ModalCreateNewClass";
import {
  RightClickContainer,
  RightClickItem,
  RightClickSeperator,
} from "./style";

interface RightClickProps {
  aulas: AulaProps
  handleEditClass: (data: EditClassModalProps) => void
}

export function RightClick({aulas, handleEditClass} : RightClickProps) {
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
        <EditClassModal aulas={aulas} closeModal={closeModal} EditClass={handleEditClass}/>
      </Dialog.Root>

      <Dialog.Root open={openClasses} onOpenChange={setOpenClasses}>
        <EditAllClassModal aulas={aulas} closeModal={closeModal}/>
      </Dialog.Root>
    </>

  );
}
