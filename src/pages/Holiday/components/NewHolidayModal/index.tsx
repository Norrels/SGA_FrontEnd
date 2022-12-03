import * as Dialog from "@radix-ui/react-dialog";
import { format } from "date-fns";
import { X } from "phosphor-react";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
  nome: z.string(),
  tipo: z.string(),
  data: z.date(),
});

interface holidayProps {
  closeModal(): void;
}

export type HolidayType = z.infer<typeof holidayInput>;

export function NewHolidayModal({ closeModal }: holidayProps) {
  const { register, handleSubmit, reset } = useForm<HolidayType>();

  function handleCreateHoliday(data: HolidayType) {
    handleCreateHolidayAPI(data);
    closeModal();
    reset();
  }

  async function handleCreateHolidayAPI(data: HolidayType) {
    console.log(
      "dataFinal:" + data.data,
      "nome:" + "tipoDeDia:" + data.tipo
    );

    const res = await API.post("dnl", data);

    if (res.status == 200) {
      
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
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
                />
                {/* {errors.nome && <p>{errors.nome.message}</p>} */}
              </InputContent>
              <InputContent>
                <label>Tipo</label>
                <select
                  placeholder="Selecione o tipo do dia"
                  {...register("tipo")}
                  defaultValue=""
                >
                  <option value="" disabled>Selecione o tipo do dia</option>
                  <option value="FERIADO">Feriado</option>
                  <option value="EMENDA">Emenda</option>
                  <option value="RECORRENTE">Recorrente</option>
                </select>
                {/* {errors.tipoAmbiente && <p>* Selecione um valor</p>} */}
              </InputContent>
              <InputContent>
                <label>Data</label>
                <input
                  type="date"
                  placeholder="dd/MM/yyyy"
                  {...register("data")}
                />
                {/* {errors.data && <p>{errors.data.message}</p>} */}
              </InputContent>
              <FinalButton>
                <button>Criar</button>
              </FinalButton>
            </InputContainer>
          </InputScroll>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
