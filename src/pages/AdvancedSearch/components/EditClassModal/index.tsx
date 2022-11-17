import * as Dialog from "@radix-ui/react-dialog";
import { ArrowLeft, X } from "phosphor-react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { AulaTypeSuper } from "../..";
import { API } from "../../../../lib/axios";
import {
  Content,
  FinalButton,
  HeaderButtons,
  InputContainer,
  InputContent,
  InputIndividual,
  InputMain,
  InputOverflow,
  InputScroll,
  ModalHeader,
  Overlay,
} from "./style";

export const aulaInput = z.object({
  periodo: z.string(),
  dataInicio: z.date(),
  professor: z.object({
    id: z.number(),
  }),
  ambiente: z.object({
    id: z.number(),
  }),
});

export type AulaType = z.infer<typeof aulaInput>;

//Propriedades da Modal
interface EditClassModalProps {
  classItem: AulaTypeSuper;
  closeModal(): void;
}

export function EditClassModal({ classItem, closeModal }: EditClassModalProps) {
  

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <ModalHeader>
          <Dialog.Title>Aula</Dialog.Title>
          <HeaderButtons>
            <Dialog.Close onClick={() => {}}>
              <X size={50} weight="light" />
            </Dialog.Close>
          </HeaderButtons>
        </ModalHeader>
          <InputMain>
            <InputOverflow>
              <InputScroll>
                <InputContainer>
                  <InputContent>
                    <label>Curso</label>
                    <select>
                      <option>{classItem.curso.nome}</option>
                    </select>
                  </InputContent>
                  <InputContent>
                    <label
                    
                    >
                      Unidade curricular
                    </label>
                    <select>
                      <option>{classItem.unidadeCurricular.nome}</option>
                    </select>
                  </InputContent>
                  <InputContent>
                    <label>Código da turma</label>
                    <input
                      type="text"
                      readOnly
                      /*  defaultValue={class.codTurma} */
                    />
                  </InputContent>
                  <InputContent style={{ flexDirection: "row" }}>
                    <InputIndividual>
                      <label>Periodo</label>
                      <select
                        placeholder="Selecione um periodo..."
                        
                        defaultValue={classItem.periodo}
                      >
                        <option value="" disabled>
                          Selecione um periodo...
                        </option>
                        <option value="MANHA">Manhã</option>
                        <option value="TARDE">Tarde</option>
                        <option value="NOITE">Noite</option>
                        <option value="INTEGRAL">Integral</option>
                      </select>
                    </InputIndividual>
                    <InputIndividual>
                      <label>Data</label>
                      <input type="date"  />
                    </InputIndividual>
                  </InputContent>
                  <InputContent style={{ flexDirection: "row" }}>
                    <InputIndividual>
                      <label>Professor</label>
                      <select
                        placeholder="Selecione um professor..."
                        defaultValue={classItem.professor.nome}
                      >
                        <option>
                        {classItem.cargaDiaria}
                        </option>
                        
                      </select>
        
                    </InputIndividual>
                    <InputIndividual>
                      <label>Hora(s) por dia</label>
                      <input
                        type="number"
                        placeholder="Digite as horas..."
                        readOnly
                        /* {...register("cargaDiaria")} */
                        defaultValue={classItem.cargaDiaria}
                      />
        
                    </InputIndividual>
                  </InputContent>
                  <InputContent>
                    <label>Ambiente</label>
                    <select
                      placeholder="Selecione um ambiente..."
                      /* {...register("ambiente.id")} */
                      defaultValue=""
                    >
                      <option>
                      {classItem.ambiente.nome}
                      </option>
                      
                    </select>
      
                  </InputContent>
                </InputContainer>
              </InputScroll>
            </InputOverflow>
          </InputMain>
      </Content>
    </Dialog.Portal>
  );
}
