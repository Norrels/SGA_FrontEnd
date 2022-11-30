import * as Dialog from "@radix-ui/react-dialog";
import { ArrowLeft, X } from "phosphor-react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { AulaType } from "../..";
/* import { API } from "../lib/axios";
import { AulaProps } from "../../Home/components/Calenders/TeacherCalender"; */
import {
  Content,
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

/* export const aulaInput = z.object({
  periodo: z.string(),
  dataInicio: z.date(),
  professor: z.object({
    id: z.number(),
  }),
  ambiente: z.object({
    id: z.number(),
  }),
});

export type AulaType = z.infer<typeof aulaInput>; */

//Propriedades da Modal
interface ViewClassModalProps {
  classItem: AulaType;
  closeModal(): void;
}

export function ViewClassModal({ classItem, closeModal }: ViewClassModalProps) {
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
                <InputContent disabled={"disabled"}>
                  <label>Curso</label>
                  <select>
                    <option>{classItem.curso.nome}</option>
                  </select>
                </InputContent>
                <InputContent disabled={"disabled"}>
                  <label>Unidade curricular</label>
                  <select>
                    <option>{classItem.unidadeCurricular.nome}</option>
                  </select>
                </InputContent>
                <InputContent disabled={"disabled"}>
                  <label>Código da turma</label>
                  <input
                    type="text"
                    readOnly
                    defaultValue={classItem.codTurma}
                  />
                </InputContent>
                <InputContent disabled={"disabled"}>
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
                    <input type="text" defaultValue={classItem.data} />
                  </InputIndividual>
                </InputContent>
                <InputContent disabled={"disabled"}>
                  <InputIndividual>
                    <label>Professor</label>
                    <select placeholder="Selecione um professor...">
                      <option>{classItem.professor.nome}</option>
                    </select>
                  </InputIndividual>
                  <InputIndividual>
                    <label>Hora(s) por dia</label>
                    <input
                      type="number"
                      placeholder="Digite as horas..."
                      readOnly
                      defaultValue={classItem.cargaDiaria}
                    />
                  </InputIndividual>
                </InputContent>
                <InputContent disabled={"disabled"}>
                  <label>Ambiente</label>
                  <select placeholder="Selecione um ambiente...">
                    <option>{classItem.ambiente.nome}</option>
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
