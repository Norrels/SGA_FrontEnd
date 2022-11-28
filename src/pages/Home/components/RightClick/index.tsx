import * as ContextMenu from "@radix-ui/react-context-menu";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { ViewClassModal } from "../../../AdvancedSearch/components/ViewClassModal";
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
  aulas: AulaProps;
  handleEditClass: (data: EditClassModalProps) => void;
}

export function RightClick({ aulas, handleEditClass }: RightClickProps) {
  const [openViewClass, setOpenViewClass] = useState(false);
  const [openPostponeClasses, setOpenPostponeClasses] = useState(false);
  const [openEditClass, setOpenEditClass] = useState(false);
  const [openEditClasses, setOpenEditClasses] = useState(false);
  const [openDeleteClasses, setOpenDeleteClasses] = useState(false);

  //Precisa desse setTime para fecha porque se não ela não fecha quando a modal abrir
  function closeViewAula() {
    setTimeout(() => {
      setOpenViewClass(true);
    }, 5);
  }

  //Precisa desse setTime para fecha porque se não ela não fecha quando a modal abrir
  function closePostponeClasses() {
    setTimeout(() => {
      setOpenPostponeClasses(true);
    }, 5);
  }

  //Precisa desse setTime para fecha porque se não ela não fecha quando a modal abrir
  function closeEditClass() {
    setTimeout(() => {
      setOpenEditClass(true);
    }, 5);
  }

  //Precisa desse setTime para fecha porque se não ela não fecha quando a modal abrir
  function closeEditClasses() {
    setTimeout(() => {
      setOpenEditClasses(true);
    }, 5);
  }

  //Precisa desse setTime para fecha porque se não ela não fecha quando a modal abrir
  function closeDeleteClasses() {
    setTimeout(() => {
      setOpenDeleteClasses(true);
    }, 5);
  }

  function closeModal() {
    setOpenViewClass(false);
    setOpenPostponeClasses(false);
    setOpenEditClass(false);
    setOpenEditClasses(false);
    setOpenDeleteClasses(false);
  }

  return (
    <>
      <ContextMenu.Portal>
        <RightClickContainer>
          {/* <RightClickItem onClick={closeViewAula}>
            Detalhes da aula
          </RightClickItem>
          <RightClickSeperator />
          <RightClickItem onClick={closePostponeClasses}>
            Adiar aulas
          </RightClickItem>
          <RightClickSeperator /> */}
          <RightClickItem onClick={closeEditClass}>Editar aula</RightClickItem>
          <RightClickItem onClick={closeEditClasses}>
            Editar aula(s)
          </RightClickItem>
          {/* <RightClickSeperator />
          <RightClickItem onClick={closeDeleteClasses}>
            Apagar as aula(s)
          </RightClickItem> */}
        </RightClickContainer>
      </ContextMenu.Portal>

      {/* <Dialog.Root open={openViewClass} onOpenChange={setOpenViewClass}>
        <ViewClassModal classItem={aulas} closeModal={closeViewAula}/>
      </Dialog.Root> */}

      {/* <Dialog.Root open={openPostponeClasses} onOpenChange={setOpenPostponeClasses}>
        <PostponeClassesModal/>
      </Dialog.Root> */}

      <Dialog.Root open={openEditClass} onOpenChange={setOpenEditClass}>
        <EditClassModal
          aulas={aulas}
          closeModal={closeModal}
          EditClass={handleEditClass}
        />
      </Dialog.Root>

      <Dialog.Root open={openEditClasses} onOpenChange={setOpenEditClasses}>
        <EditAllClassModal aulas={aulas} closeModal={closeModal} />
      </Dialog.Root>

      {/* <Dialog.Root open={openDeleteClasses} onOpenChange={setOpenDeleteClasses}>
        <DeleteClassesModal/>
      </Dialog.Root> */}
    </>
  );
}
