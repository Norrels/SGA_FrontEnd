import * as Dialog from "@radix-ui/react-dialog";
import { NotePencil, X } from "phosphor-react";
import React, { useContext, useState } from "react";
import { ObjectsContext } from "../../../../contexts/ObjectsContext";
import {
  CheckContent,
  CheckIndividual,
  Content,
  FinalButton,
  HeaderButtons,
  InputContainer,
  InputContent,
  InputIndividual,
  InputScroll,
  ModalHeader,
  Overlay,
} from "./style";

export function NewVacation() {
  /* const { teachers } = useContext(ObjectsContext); */
  const teachers = [
    {
      id: "1",
      nome: "André",
      nif: "4342215",
      cargaSemanal: "40",
    },
    {
      id: "2",
      nome: "Antonio",
      nif: "4342215",
      cargaSemanal: "40",
    },
    {
      id: "3",
      nome: "Beatriz",
      nif: "4342215",
      cargaSemanal: "40",
    },
    {
      id: "4",
      nome: "Bruna",
      nif: "4342215",
      cargaSemanal: "40",
    },
    {
      id: "5",
      nome: "Bruno",
      nif: "4342215",
      cargaSemanal: "40",
    },
    {
      id: "1",
      nome: "André",
      nif: "4342215",
      cargaSemanal: "40",
    },
    {
      id: "2",
      nome: "Antonio",
      nif: "4342215",
      cargaSemanal: "40",
    },
    {
      id: "3",
      nome: "Beatriz",
      nif: "4342215",
      cargaSemanal: "40",
    },
    {
      id: "4",
      nome: "Bruna",
      nif: "4342215",
      cargaSemanal: "40",
    },
    {
      id: "5",
      nome: "Bruno",
      nif: "4342215",
      cargaSemanal: "40",
    },
    {
      id: "1",
      nome: "André",
      nif: "4342215",
      cargaSemanal: "40",
    },
    {
      id: "2",
      nome: "Antonio",
      nif: "4342215",
      cargaSemanal: "40",
    },
    {
      id: "3",
      nome: "Beatriz",
      nif: "4342215",
      cargaSemanal: "40",
    },
    {
      id: "4",
      nome: "Bruna",
      nif: "4342215",
      cargaSemanal: "40",
    },
    {
      id: "5",
      nome: "Bruno",
      nif: "4342215",
      cargaSemanal: "40",
    },
    {
      id: "1",
      nome: "André",
      nif: "4342215",
      cargaSemanal: "40",
    },
    {
      id: "2",
      nome: "Antonio",
      nif: "4342215",
      cargaSemanal: "40",
    },
    {
      id: "3",
      nome: "Beatriz",
      nif: "4342215",
      cargaSemanal: "40",
    },
    {
      id: "4",
      nome: "Bruna",
      nif: "4342215",
      cargaSemanal: "40",
    },
    {
      id: "5",
      nome: "Bruno",
      nif: "4342215",
      cargaSemanal: "40",
    },
    {
      id: "1",
      nome: "André",
      nif: "4342215",
      cargaSemanal: "40",
    },
    {
      id: "2",
      nome: "Antonio",
      nif: "4342215",
      cargaSemanal: "40",
    },
    {
      id: "3",
      nome: "Beatriz",
      nif: "4342215",
      cargaSemanal: "40",
    },
    {
      id: "4",
      nome: "Bruna",
      nif: "4342215",
      cargaSemanal: "40",
    },
    {
      id: "5",
      nome: "Bruno",
      nif: "4342215",
      cargaSemanal: "40",
    },
  ];

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <ModalHeader>
          <Dialog.Title>Férias</Dialog.Title>
          <HeaderButtons>
            <Dialog.Close>
              <X size={50} weight="light" />
            </Dialog.Close>
          </HeaderButtons>
        </ModalHeader>
        <form>
          <InputScroll>
            <InputContainer>
              <InputContent>
                <InputIndividual>
                  <label>Data de início</label>
                  <input type="date" placeholder="dd/MM/yyyy" />
                </InputIndividual>
                <InputIndividual>
                  <label>Data de fim</label>
                  <input type="date" placeholder="dd/MM/yyyy" />
                </InputIndividual>
              </InputContent>
              <InputContent>
                <h1>Professores</h1>
                <hr />
                <CheckContent>
                  {teachers.map((teacher) => {
                    return (
                      <CheckIndividual>
                        <input type="checkbox" value={teacher.id} />
                        <p>{teacher.nome}</p>
                      </CheckIndividual>
                    );
                  })}
                </CheckContent>
              </InputContent>
            </InputContainer>
            <FinalButton>
              <button>Criar</button>
            </FinalButton>
          </InputScroll>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
