import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { format } from "date-fns";
import { NotePencil, X } from "phosphor-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { number, z } from "zod";
import { Notification } from "../../../../components/Notification";
import { API } from "../../../../lib/axios";
import {
  Buttons,
  Content,
  FinalButton,
  HeaderButtons,
  InputContainer,
  InputContent,
  InputIndividual,
  ModalHeader,
  Overlay,
} from "./style";

interface AbsenceProps {
  id: string;
  dataInicio: string;
  dataFinal: string;
}
interface EditAbsenceModalProps {
  closeModal: () => void;
  absence: AbsenceProps;
}

const absenceInput = z.object({
  id: z.string(),
  dataInicio: z.string(),
  dataFinal: z.string(),
});

type AbsenceType = z.infer<typeof absenceInput>;

export function EditAbsenceTeacherModal({
  absence,
  closeModal,
}: EditAbsenceModalProps) {
  const { register, handleSubmit, reset } = useForm<AbsenceType>({
    resolver: zodResolver(absenceInput),
  });
  const [editable, setEditable] = useState(false);

  const [open, setOpen] = useState(false);
  const [notification, setNotification] = useState(false);

  function openNotificantionMethod() {
    setOpen(false);
  }

  async function handleAbsence(data: AbsenceProps) {
   
    data.dataInicio = format(
      new Date(data.dataInicio + "T00:00:00"),
      "dd/MM/yyyy"
    );
    data.dataFinal = format(
      new Date(data.dataFinal + "T00:00:00"),
      "dd/MM/yyyy"
    );
    const res = await API.put(`ausencia/${data.id}`, data);
    if (res.status == 200) {
      onCloseEditAbsenseModal();
      setNotification(true);
    } else {
      setNotification(false);
    }
    setOpen(true);
  }

  function onCloseEditAbsenseModal() {
    closeModal();
    setEditable(false);
    reset();
  }

  return (
    <>
      <Dialog.Portal>
        <Overlay />
        <Content onCloseAutoFocus={() => onCloseEditAbsenseModal()}>
          <ModalHeader>
            <Dialog.Title>
              {!editable ? "Férias" : "Editar férias"}
            </Dialog.Title>
            <HeaderButtons>
              {!editable && (
                <button onClick={() => setEditable(true)}>
                  <NotePencil size={50} weight="light" />
                </button>
              )}
              <Dialog.Close>
                <X
                  onClick={() => setEditable(false)}
                  size={50}
                  weight="light"
                />
              </Dialog.Close>
            </HeaderButtons>
          </ModalHeader>
          <form onSubmit={handleSubmit(handleAbsence)}>
            <input type="hidden" {...register("id")} value={absence.id} />
            <InputContainer>
              <InputContent>
                <InputIndividual>
                  <label>Data de início</label>
                  <input
                    type="date"
                    placeholder="dd/MM/yyyy"
                    {...register("dataInicio")}
                    defaultValue={`${absence.dataInicio.slice(
                      6,
                      10
                    )}-${absence.dataInicio.slice(
                      3,
                      5
                    )}-${absence.dataInicio.slice(0, 2)}`}
                    readOnly={!editable}
                    required
                  />
                </InputIndividual>
                <InputIndividual>
                  <label>Data de fim</label>
                  <input
                    type="date"
                    placeholder="dd/MM/yyyy"
                    {...register("dataFinal")}
                    defaultValue={`${absence.dataFinal.slice(
                      6,
                      10
                    )}-${absence.dataFinal.slice(
                      3,
                      5
                    )}-${absence.dataFinal.slice(0, 2)}`}
                    readOnly={!editable}
                    required
                  />
                </InputIndividual>
              </InputContent>
            </InputContainer>
            {editable && (
              <FinalButton>
                <button type="submit">Salvar</button>
              </FinalButton>
            )}
          </form>
        </Content>
      </Dialog.Portal>
      <Notification
        tipe={notification ? "Sucesso" : "Erro"}
        description={notification ? "Editado com sucesso." : "Falha ao editar."}
        title="Férias"
        openNotification={open}
        openNotificationMethod={openNotificantionMethod}
      />
    </>
  );
}
