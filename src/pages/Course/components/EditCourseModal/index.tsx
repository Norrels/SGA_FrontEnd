import * as Dialog from "@radix-ui/react-dialog";
import { NotePencil, X } from "phosphor-react";
import React, { useState } from "react";
import {
  CloseButton,
  ContainerButtonCreate,
  ContainerInputStar,
  Content,
  ContentSelect,
  InputContainer,
  InputContent,
  InputContentDupo,
  InputContentScroll,
  NoteButton,
  Overlay,
} from "./style";

interface Course {
  id?: number;
  name?: string;
  tipoCurso?: string;
  cargaHoraria?: string;
  click?: boolean;
  unidadeCurricular?: UnidadeCurricular[];
}

interface UnidadeCurricular {
  UnidadeCurricular: string;
  Horas: number;
}
[];

export function EditCourseModal({
  id,
  name,
  tipoCurso,
  cargaHoraria,
  click,
  unidadeCurricular,
}: Course) {
  const [disabled, setDisabled] = useState(click);



  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
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
          <X onClick={() => setDisabled(true)} />
        </CloseButton>

        <Dialog.Title>Editar curso</Dialog.Title>

        <InputContainer>
          <InputContent>
            {disabled ? (
              <>
                <label>Nome</label>
                <input
                  type="text"
                  value={name}
                  placeholder="Digite o nome do curso"
                  disabled
                />
              </>
            ) : (
              <>
                <label>Nome</label>
                <input
                  type="text"
                  defaultValue={name}
                  placeholder="Digite o nome do curso"
                />
              </>
            )}
          </InputContent>

          <InputContent>
            {disabled ? (
              <>
                <label>Tipo</label>
                <select placeholder="Selecione o Tipo do Curso" disabled>
                  <option>
                    {tipoCurso != "" ? tipoCurso : "Selecione uma Opção"}
                  </option>
                  <option>Unidade Movel</option>
                  <option>Presencial</option>
                  <option>EAD</option>
                  <option>Entidade</option>
                  <option>Empresa</option>
                </select>
              </>
            ) : (
              <>
                <label>Tipo</label>
                <select placeholder="Selecione o Tipo de Curso">
                  <option>
                    {tipoCurso != "" ? tipoCurso : "Selecione uma Opção"}
                  </option>
                  <option>Unidade Movel</option>
                  <option>Presencial</option>
                  <option>EAD</option>
                  <option>Entidade</option>
                  <option>Empresa</option>
                </select>
              </>
            )}
            <InputContentScroll>
              {disabled ? (
                unidadeCurricular?.map((value) => (
                  <>
                    <ContainerInputStar>
                      <ContentSelect>
                        <label>Unidade Curricular</label>
                        <select disabled>
                          <option>{value.UnidadeCurricular}</option>
                        </select>
                      </ContentSelect>
                      <div>
                        <label>Horas</label>
                        <input
                          disabled
                          type="text"
                          placeholder="Digite as horas"
                          value={value.Horas}
                        />
                      </div>
                    </ContainerInputStar>
                  </>
                ))
              ) : (
                unidadeCurricular?.map((value) => (
                  <>
                    <ContainerInputStar>
                      <ContentSelect>
                        <label>Unidade Curricular</label>
                        <select>
                          <option>{value.UnidadeCurricular}</option>
                        </select>
                      </ContentSelect>
                      <div>
                        <label>Horas</label>
                        <input
                          type="text"
                          placeholder="Digite as horas"
                          defaultValue={value.Horas}
                        />
                      </div>
                    </ContainerInputStar>
                  </>
                ))
              )}
            </InputContentScroll>
          </InputContent>
        </InputContainer>
        <ContainerButtonCreate>
          <button>Editar</button>
        </ContainerButtonCreate>
      </Content>
    </Dialog.Portal>
  );
}
