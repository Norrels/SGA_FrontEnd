import * as AlertDialog from "@radix-ui/react-alert-dialog";
import * as ContextMenu from "@radix-ui/react-context-menu";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { DeleteAlertClasses } from "../../../../components/DeleteAlertClasses";
import { Notification } from "../../../../components/Notification";
import { API } from "../../../../lib/axios";
import { ViewClassModal } from "../../../AdvancedSearch/components/ViewClassModal";
import { AulaProps } from "../Calenders/TeacherCalender";


import { EditAllClassModal, EditAllClassModalProps } from "../EditAllClassModal";
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
  handleEditAllClasses: (data: EditAllClassModalProps) => void;
  deleteClasses: (id: number | undefined) => void;
}

export function RightClick({ aulas, handleEditClass, handleEditAllClasses, deleteClasses }: RightClickProps) {
  const [openViewClass, setOpenViewClass] = useState(false);
  const [openPostponeClasses, setOpenPostponeClasses] = useState(false);
  const [openEditClass, setOpenEditClass] = useState(false);
  const [openEditClasses, setOpenEditClasses] = useState(false);
  const [openDeleteClasses, setOpenDeleteClasses] = useState(false);

  //Variavel para usado para exibir a notificaçãp
  const [open, setOpen] = useState(false);

  // Váriavel para controlar oque vai ser exibido na notificação
  const [notificationStataus, setNotificationStataus] = useState(false);

  //Precisa desse setTime para fecha porque se não ela não fecha quando a modal abrir
  function closeViewAula() {
    setTimeout(() => {
      setOpenViewClass(true);
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

  async function handleDeleteClassesByPartitioKey() {
    deleteClasses(aulas.partitionKey)
    setOpen(true);
  }

  function openNotificantionMethod() {
    setOpen(false);
  }

  return (
    <>
      <ContextMenu.Portal>
        <RightClickContainer>
          <RightClickItem onClick={closeViewAula}>
            Detalhes da aula
          </RightClickItem>
          <RightClickSeperator />
          <RightClickItem onClick={closeEditClass}>Editar aula</RightClickItem>
          <RightClickItem onClick={closeEditClasses}>
            Editar aula(s)
          </RightClickItem>
          <RightClickSeperator />
          <RightClickItem onClick={closeDeleteClasses}>
            Apagar as aula(s)
          </RightClickItem>
        </RightClickContainer>
      </ContextMenu.Portal>

      <Dialog.Root open={openViewClass} onOpenChange={setOpenViewClass}>
        <ViewClassModal classItem={aulas} closeModal={closeViewAula}/>
      </Dialog.Root>

      <Dialog.Root open={openEditClass} onOpenChange={setOpenEditClass}>
        <EditClassModal
          aulas={aulas}
          closeModal={closeModal}
          EditClass={handleEditClass}
        />
      </Dialog.Root>

      <Dialog.Root open={openEditClasses} onOpenChange={setOpenEditClasses}>
        <EditAllClassModal aulas={aulas} closeModal={closeModal} handleEditAllClasses={handleEditAllClasses}  />
      </Dialog.Root>

      <AlertDialog.Root open={openDeleteClasses} onOpenChange={setOpenDeleteClasses}>
        <DeleteAlertClasses deleteByPartitionKey={handleDeleteClassesByPartitioKey}/>
      </AlertDialog.Root>
    </>
  );
}
