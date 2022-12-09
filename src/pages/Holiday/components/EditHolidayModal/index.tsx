import * as Dialog from "@radix-ui/react-dialog";
import { format, getDate } from "date-fns";
import { NotePencil, X } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Notification } from "../../../../components/Notification";
import { API } from "../../../../lib/axios";
import { HolidayProps } from "../../Index";
import {
  Content,
  FinalButton,
  HeaderButtons,
  InputContainer,
  InputContent,
  InputScroll,
  ModalHeader,
  Overlay,
} from "./style";

interface EditAdminModalProps {
  holiday: HolidayProps;
  closeModal: () => void;
  holidayItem: (data: HolidayType) => void;
}

export const holidayInput = z.object({
  id: z.number(),
  nome: z
    .string()
    .min(4, { message: "* O nome deve ser maior que 3 caracteres..." })
    .max(30, {
      message: "* O nome deve ser menor ou igual a 20 que  caracteres...",
    }),
  tipo: z.string(),
  type: z.string(),
  data: z.string(),
});

export type HolidayType = z.infer<typeof holidayInput>;

export function EditHolidayModal({ holiday, closeModal, holidayItem }: EditAdminModalProps) {
  const [editable, setEditable] = useState(false);

  //Variavel para usado para exibir a notificaçãp
  const [open, setOpen] = useState(false);

  // Váriavel para controlar oque vai ser exibido na notificação
  const [notificationStataus, setNotificationStataus] = useState(false);

  const { handleSubmit, register, reset } = useForm<HolidayType>();

  function handleUpdateHoliday(data: HolidayType) {
    handleUpdateHolidayAPI(data)
      .then(() => {
        setTimeout(() => {
          holidayItem(data);
        }, 2000);
      })
      .catch((e) => {
        setNotificationStataus(true);
        console.log(e);
      });

    setOpen(true);
    onCloseCreateHolidayModal();
  }

  function openNotificantionMethod() {
    setOpen(false);
  }

  async function handleUpdateHolidayAPI(data: HolidayType) {
    if (
      data.type == "FERIADO" ||
      data.type == "EMENDA" ||
      data.type == "RECORRENTE"
    ) {
      const resp = await API.put(`dnl/${holiday.id}`, {
        id: holiday.id,
        nome: data.nome,
        data: data.data,
        tipo: data.tipo,
      });
      if(resp.status == 200) {
        holidayItem(data);
      }
    } else {
      const resp = await API.put(`feriados/${holiday.id}`, {
        id: holiday.id,
        name: data.nome,
        date: data.data,
        type: data.tipo,
      });
      if(resp.status == 200) {
        holidayItem(data);
      }
    }
  }

  function onCloseCreateHolidayModal() {
    reset();
    setEditable(false);
    closeModal();
  }

  return (
    <>
      <Dialog.Portal>
        <Overlay />
        <Content onCloseAutoFocus={() => onCloseCreateHolidayModal()}>
          <ModalHeader>
            <Dialog.Title>
              {!editable ? "Dia não letivo" : "Editar dia não letivo"}
            </Dialog.Title>
            <HeaderButtons>
              {!editable && (
                <button onClick={() => setEditable(true)}>
                  <NotePencil size={50} weight="light" />
                </button>
              )}
              <Dialog.Close>
                <X size={50} weight="light" />
              </Dialog.Close>
            </HeaderButtons>
          </ModalHeader>
          <form onSubmit={handleSubmit(handleUpdateHoliday)}>
            <InputScroll>
              <InputContainer>
                <input type="hidden" {...register("id")} value={holiday.id} />
                <input
                  type="hidden"
                  {...register("type")}
                  value={holiday.tipo}
                />
                <InputContent disabled={"on"}>
                  <label>Nome</label>
                  <input
                    type="text"
                    placeholder="Digite o nome do dia"
                    defaultValue={holiday.nome}
                    {...register("nome")}
                    readOnly={!editable}
                    required
                    minLength={4}
                    maxLength={30}
                  />
                </InputContent>
                <InputContent disabled={editable ? "on" : "disabled"}>
                  <label>Tipo</label>
                  <select
                    placeholder="Selecione o tipo do dia"
                    {...register("tipo")}
                    defaultValue={holiday.tipo}
                    required
                  >
                    <option value="FERIADO">Feriado</option>
                    <option value="EMENDA">Emenda</option>
                    <option value="RECORRENTE">Recorrente</option>
                  </select>
                </InputContent>
                <InputContent disabled={"on"}>
                  <label>Data</label>
                  <input
                    type="date"
                    placeholder="dd/MM/yyyy"
                    defaultValue={
                      holiday.data.match("/")
                        ? holiday.data.split("/")[2] +
                          "-" +
                          holiday.data.split("/")[1] +
                          "-" +
                          holiday.data.split("/")[0]
                        : holiday.data
                    }
                    {...register("data")}
                    readOnly={!editable}
                    required
                  />
                </InputContent>
                {editable && (
                  <FinalButton>
                    <button>Salvar</button>
                  </FinalButton>
                )}
              </InputContainer>
            </InputScroll>
          </form>
        </Content>
      </Dialog.Portal>
      <Notification
        tipe={notificationStataus ? "Erro" : "Sucesso"}
        description={
          notificationStataus ? "Falha ao editar." : "Editado com sucesso."
        }
        title="Dia não letivo"
        openNotification={open}
        openNotificationMethod={openNotificantionMethod}
      />
    </>
  );
}
