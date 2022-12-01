import * as Dialog from "@radix-ui/react-dialog";
import { format } from "date-fns";
import { NotePencil, X } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
}

export const holidayInput = z.object({
  id: z.number(),
  nome: z.string(),
  tipo: z.date(),
  data: z.date(),
});

export type HolidayType = z.infer<typeof holidayInput>;

export function EditHolidayModal({ holiday, closeModal }: EditAdminModalProps) {
  const [editable, setEditable] = useState(false);

  // const [datat, setDatat] = useState(format(new Date(holiday.dataInicio), "dd-MM-yyyy"))

  const { handleSubmit, register, reset } = useForm<HolidayType>();

  function handleUpdateHoliday(data: HolidayType) {
    handleUpdateHolidayAPI(data);
    reset();
    closeModal();
  }

  async function handleUpdateHolidayAPI(data: HolidayType) {

    console.log(data)

    /* const resp = await API.put(`dnl/${holiday.id}`, {
      id: holiday.id,
      nome: data.nome,
      data: format(new Date(data.data), "dd/MM/yyyy"),
      tipo: data.tipo,
    }); */
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content onCloseAutoFocus={() => setEditable(false)}>
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
              <InputContent disabled={"on"}>
                <label>Nome</label>
                <input
                  type="text"
                  placeholder="Digite o nome do dia"
                  defaultValue={holiday.nome}
                  {...register("nome")}
                  readOnly={!editable}
                />
                {/* {errors.nome && <p>{errors.nome.message}</p>} */}
              </InputContent>
              <InputContent disabled={editable ? "on" : "disabled"}>
                <label>Tipo</label>
                <select
                  placeholder="Selecione o tipo do dia"
                  {...register("tipo")}
                  defaultValue={holiday.tipo}
                >
                  <option value="" disabled>
                    Selecione o tipo do dia
                  </option>
                  <option value="FERIADO">Feriado</option>
                  <option value="EMENDA">Emenda</option>
                </select>
                {/* {errors.tipoAmbiente && <p>* Selecione um valor</p>} */}
              </InputContent>
              <InputContent disabled={"on"}>
                <label>Data</label>
                <input
                  type="date"
                  placeholder="dd/MM/yyyy"
                  defaultValue={holiday.data}
                  {...register("data")}
                  readOnly={!editable}
                />
                {/* {errors.data && <p>{errors.data.message}</p>} */}
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
      {/* <Dialog.Portal>
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
    </Dialog.Portal> */}
    </Dialog.Portal>
  );
}
