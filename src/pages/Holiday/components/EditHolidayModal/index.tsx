import * as Dialog from "@radix-ui/react-dialog";
import { format } from "date-fns";
import { NotePencil, X } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { API } from "../../../../lib/axios";
import { HolidayProps } from "../../Index";
import {
  CloseButton,
  ContainerButtonCreate,
  Content,
  InputContainer,
  InputContent,
  InputContentDupo,
  NoteButton,
  Overlay,
} from "./style";

interface EditAdminModalProps {
  holiday: HolidayProps;
  closeModal: () => void
}

export const holidayInput = z.object({
  id: z.number(),
  nome: z.string(),
  tipoDeDia: z.date(),
  diaInicio: z.date(),
  diaFinal: z.string()
});

export type HolidayType = z.infer<typeof holidayInput>;

export function EditHolidayModal({ holiday, closeModal }: EditAdminModalProps) {
  const [disabled, setDisabled] = useState(true);

  // const [datat, setDatat] = useState(format(new Date(holiday.dataInicio), "dd-MM-yyyy"))

  const { handleSubmit, register, reset } = useForm<HolidayType>();

  function handleUpdateAdmin(data: HolidayType) {
    handleUpdateAdminAPI(data);
    reset();
    closeModal();
  }

  async function handleUpdateAdminAPI(data: HolidayType) {
    console.log(data);

    const resp = await API.put(`dnl/${holiday.id}`, {
      id: holiday.id,
      nome: data.nome,
      dataInicio: format(new Date(data.diaInicio), "dd/MM/yyyy"),
      dataFinal: format(new Date(data.diaInicio), "dd/MM/yyyy"),
      tipoDeDia: data.tipoDeDia
    });

    console.log(resp);
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <form onSubmit={handleSubmit(handleUpdateAdmin)}>
          {disabled ? (
            <>
              <NoteButton>
                <NotePencil onClick={() => setDisabled(false)} size={32} />
              </NoteButton>
            </>
          ) : (
            <></>
          )}
          <CloseButton>
            <X size={24} onClick={() => setDisabled(true)} />
          </CloseButton>

          <Dialog.Title>Editar Dia</Dialog.Title>

          <InputContainer>
            {disabled ? (
              <>
                <InputContent>
                  <label>Nome</label>
                  <input
                    type="text"
                    value={holiday.nome}
                    placeholder="digite o nome do dia"
                    disabled
                  />
                </InputContent>
                <InputContent>
                  <label>Tipo</label>
                  <select disabled>
                    <option>Feriado</option>
                    <option>Imenda</option>
                  </select>
                </InputContent>
                <InputContent>
                  <label>Data</label>
                  <input
                    type="date"
                    placeholder="digite a data"
                    disabled
                  />
                </InputContent>
              </>
            ) : (
              <>
                <InputContent>
                  <label>Nome</label>
                  <input
                    type="text"
                    {...register("nome")}
                    defaultValue={holiday.nome}
                    placeholder="digite o nome do dia"
                  />
                </InputContent>
                <InputContent>
                  <label>Tipo</label>
                  <select {...register("tipoDeDia")}>
                    <option value="FERIADO">Feriado</option>
                    <option value="EMENDA">Emenda</option>
                  </select>
                </InputContent>
                <InputContent>
                  <label>Data</label>
                  <input
                    {...register("diaInicio")}
                    type="date"
                    placeholder="digite a data"
                  />
                </InputContent>
              </>
            )}
          </InputContainer>
          <ContainerButtonCreate>
            <button>Editar</button>
          </ContainerButtonCreate>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
