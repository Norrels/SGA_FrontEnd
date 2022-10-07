import * as Dialog from "@radix-ui/react-dialog";
import { format } from "date-fns";
import { X } from "phosphor-react";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { API } from "../../../../lib/axios";
import {
  CloseButton,
  ContainerButtonCreate,
  Content,
  InputContainer,
  InputContent,
  Overlay,
} from "./style";

export const holidayInput = z.object({
  dataInicio: z.date(),
  dataFinal: z.date(),
  nome: z.string(),
  tipoDeDia: z.string(),
});

export type HolidayType = z.infer<typeof holidayInput>;

export function NewHolidayModal() {
  const { register, handleSubmit, reset } = useForm<HolidayType>();

  function handleCreateHoliday(data: HolidayType) {
    handleCreateHolidayAPI(data);
    reset;
  }

  async function handleCreateHolidayAPI(data: HolidayType) {
    console.log(
      "dataInicio:" + data.dataInicio,
      "dataFinal:" + data.dataInicio,
      "nome:" + "tipoDeDia:" + data.tipoDeDia
    );

    const res = await API.post("dnl", {
      dataInicio: format(new Date(data.dataInicio), "MM/dd/yyyy"),
      dataFinal: format(new Date(data.dataInicio), "MM/dd/yyyy"),
      nome: data.nome,
      tipoDeDia: data.tipoDeDia,
    });

    if (res.status == 200) {
      console.log("deu certo");
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <form onSubmit={handleSubmit(handleCreateHoliday)}>
          <CloseButton>
            <X />
          </CloseButton>

          <Dialog.Title>Novo dia</Dialog.Title>

          <InputContainer>
            <InputContent>
              <label>Nome</label>
              <input
                type="text"
                {...register("nome")}
                placeholder="digite o nome do dia"
              />
            </InputContent>
            <InputContent>
              <label>Tipo</label>
              <select {...register("tipoDeDia")}>
                <option>Selecione o tipo de dia</option>
                <option value="FERIADO">Feriado</option>
                <option value="EMENDA">Emenda</option>
              </select>
            </InputContent>
            <InputContent>
              <label>Data</label>
              <input
                {...register("dataInicio")}
                type="date"
                placeholder="dd/MM/yyyy"
              />
            </InputContent>
          </InputContainer>
          <ContainerButtonCreate>
            <button>Criar</button>
          </ContainerButtonCreate>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
