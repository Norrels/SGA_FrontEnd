import * as Dialog from "@radix-ui/react-dialog";
import { DotsThree, Trash } from "phosphor-react";
import { useState } from "react";
import { DisableTeacherModal } from "../DisableTeacherModal";
import { EditTeacherModal } from "../EditTeacherModal";
import {
  TeacherItemButton,
  TeacherItemButtonContainer,
  TeacherItemContainer,
  TeacherItemInfoContainer,
  TeacherItemInfoContent,
} from "./style";

interface Teacher {
  id?: number;
  nome?: string;
  cargaSemanal?: number;
  ausencia?: string;
  url?: string;
  listaCompetencia?: listaCompetencia[];
}

interface listaCompetencia {
  id?: number;
  unidadeCurricular?: unidadeCurricular;
  nivelHabilidade?: string;
}

interface unidadeCurricular {
  id?: number;
  nome?: string;
  horas?: number;
  curso?: curso;
}

interface curso {
  id?: number;
  nome?: string;
  tipoCurso?: string;
}

export function TeacherItem({
  id,
  nome,
  cargaSemanal,
  ausencia,
  url,
  listaCompetencia,
}: Teacher) {
  var i = 0;
  function onExit() {
    console.log(i++);
  }

  return (
    <TeacherItemContainer>
      <TeacherItemInfoContainer>
        <img src={url} alt="" />

        <TeacherItemInfoContent>
          <h3>{nome}</h3>
          <p>Carga horária: {cargaSemanal}hs</p>
        </TeacherItemInfoContent>
      </TeacherItemInfoContainer>

      <TeacherItemButtonContainer>
        <Dialog.Root onOpenChange={() => onExit()}>
          <Dialog.Trigger asChild>
            <TeacherItemButton buttonColor="edit">
              <DotsThree color="#000" size={25} />
            </TeacherItemButton>
          </Dialog.Trigger>
          <EditTeacherModal
            key={id}
            listaCompetencia={listaCompetencia}
            id={id}
            nome={nome}
            cargaSemanal={cargaSemanal}
            ausencia={ausencia}
            url={url}
          />
        </Dialog.Root>

        <TeacherItemButton buttonColor="delete">
          <Dialog.Root>
            <Dialog.Trigger>
              <Trash color="#fff" size={25} />
            </Dialog.Trigger>
            <DisableTeacherModal />
          </Dialog.Root>
        </TeacherItemButton>
      </TeacherItemButtonContainer>
    </TeacherItemContainer>
  );
}
