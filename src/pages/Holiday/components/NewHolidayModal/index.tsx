import * as Dialog from "@radix-ui/react-dialog";
import { format } from "date-fns";
import { X } from "phosphor-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Notification } from "../../../../components/Notification";
import { API } from "../../../../lib/axios";
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

export const holidayInput = z.object({
  nome: z
    .string()
    .min(4, { message: "* O nome deve ser maior que 3 caracteres..." })
    .max(30, {
      message: "* O nome deve ser menor ou igual a 20 que  caracteres...",
    }),
  tipo: z.string(),
  data: z.date(),
});

interface holidayProps {
  closeModal(): void;
  newHolidayItem: () => void;
}

export type HolidayType = z.infer<typeof holidayInput>;

export function NewHolidayModal({ closeModal, newHolidayItem }: holidayProps) {
  const { register, handleSubmit, reset } = useForm<HolidayType>();
  // pegando a data de hoje e formatando pro estilo americano para validar o input date
  const hoje = new Date()
    .toLocaleDateString()
    .replace(/(\d*)\/(\d*)\/(\d*).*/, "$3-$2-$1");

  //Variavel para usado para exibir a notificaçãp
  const [open, setOpen] = useState(false);

  // Váriavel para controlar oque vai ser exibido na notificação
  const [notificationStataus, setNotificationStataus] = useState(false);

  function handleCreateHoliday(data: HolidayType) {
    handleCreateHolidayAPI(data)
      .then(() => {
        setTimeout(() => {
          newHolidayItem();
        }, 1000);
      })
      .catch(() => setNotificationStataus(true));

    setOpen(true);
    onCloseCreateHolidayModal();
  }

  function openNotificantionMethod() {
    setOpen(false);
  }

  async function handleCreateHolidayAPI(data: HolidayType) {
    await API.post("dnl", data);
  }

  function onCloseCreateHolidayModal() {
    reset();
    closeModal();
  }

  return (
    <>
      <Dialog.Portal>
        <Overlay />
        <Content onCloseAutoFocus={() => onCloseCreateHolidayModal()}>
          <ModalHeader>
            <Dialog.Title>Novo dia não letivo</Dialog.Title>
            <HeaderButtons>
              <Dialog.Close>
                <X size={50} weight="light" />
              </Dialog.Close>
            </HeaderButtons>
          </ModalHeader>
          <form onSubmit={handleSubmit(handleCreateHoliday)}>
            <InputScroll>
              <InputContainer>
                <InputContent>
                  <label>Nome</label>
                  <input
                    type="text"
                    placeholder="Digite o nome do dia"
                    {...register("nome")}
                    required
                    minLength={4}
                    maxLength={30}
                  />
                </InputContent>
                <InputContent>
                  <label>Tipo</label>
                  <select
                    placeholder="Selecione o tipo do dia"
                    {...register("tipo")}
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Selecione o tipo do dia
                    </option>
                    <option value="FERIADO">Feriado</option>
                    <option value="EMENDA">Emenda</option>
                    <option value="RECORRENTE">Recorrente</option>
                  </select>
                </InputContent>
                <InputContent>
                  <label>Data</label>
                  <input
                    type="date"
                    placeholder="dd/MM/yyyy"
                    {...register("data")}
                    required
                    min={hoje}
                  />
                </InputContent>
                <FinalButton>
                  <button>Criar</button>
                </FinalButton>
              </InputContainer>
            </InputScroll>
          </form>
        </Content>
      </Dialog.Portal>
      <Notification
        tipe={notificationStataus ? "Erro" : "Sucesso"}
        description={
          notificationStataus ? "Falha ao criar." : "Criado com sucesso."
        }
        title="Dia não letivo"
        openNotification={open}
        openNotificationMethod={openNotificantionMethod}
      />
    </>
  );
}
