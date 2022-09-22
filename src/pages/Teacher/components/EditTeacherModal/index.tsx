import * as Dialog from "@radix-ui/react-dialog";
import { NotePencil, Plus, X } from "phosphor-react";
import React, { useState } from "react";
import { Rating } from "./components/Rating";
import {
  CloseButton,
  ContainerButtonCreate,
  ContainerInputStar,
  ContainerNewCompt,
  Content,
  ContentSelect,
  InputContainer,
  InputContent,
  InputContentDupo,
  InputContentScroll,
  NewCompt,
  NoteButton,
  Overlay,
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

export function EditTeacherModal({
  id,
  nome,
  cargaSemanal,
  ausencia,
  url,
  listaCompetencia,
}: Teacher) {

  const [input, setInput] = useState([0]);
  const [disabled, setDisabled] = useState(true);

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
          <X onClick={() => setInput([...input, 0])} size={24} />
        </CloseButton>

        <Dialog.Title>Novo Professor</Dialog.Title>

        <InputContainer>
          {disabled ? (
            <>
              <InputContent>
                <label>Nome</label>
                <input
                  type="text"
                  value={nome}
                  placeholder="digite o nome do professor"
                  disabled
                />
              </InputContent>
              <InputContentDupo>
                <div>
                  <label>Carga horária Semanal</label>
                  <input
                    type="text"
                    value={cargaSemanal}
                    placeholder="digite as horas"
                    disabled
                  />
                </div>
                <div>
                  <label>Foto</label>
                  <input
                    disabled
                    type="file"
                    id="file"
                    accept="image/*"
                    placeholder="envie uma foto do professor"
                  />
                </div>
              </InputContentDupo>
            </>
          ) : (
            <>
              <InputContent>
                <label>Nome</label>
                <input
                  type="text"
                  defaultValue={nome}
                  placeholder="digite o nome do professor"
                />
              </InputContent>
              <InputContentDupo>
                <div>
                  <label>Carga horária Semanal</label>
                  <input
                    type="text"
                    defaultValue={cargaSemanal}
                    placeholder="digite as horas"
                  />
                </div>
                <div>
                  <label>Foto</label>
                  <input
                    defaultValue={url}
                    type="file"
                    id="file"
                    accept="image/*"
                    placeholder="envie uma foto do professor"
                  />
                </div>
              </InputContentDupo>
            </>
          )}
          <InputContentScroll>
            {disabled
              ? listaCompetencia?.map((v) => (
                  <>
                    <ContainerInputStar>
                      <ContentSelect>
                        <label>Competência</label>
                        <select disabled>
                          <option>{v.unidadeCurricular?.nome}</option>
                          <option>Java</option>
                        </select>
                      </ContentSelect>
                      <Rating
                        edit_={false}
                        nivelHabilidade={Number(v.nivelHabilidade)}
                      />
                    </ContainerInputStar>
                  </>
                ))
              : input?.map((v) => (
                  <>
                    <ContainerInputStar>
                      <ContentSelect>
                        <label>{v}</label>
                        <select>
                          <option></option>
                          <option>Java</option>
                        </select>
                      </ContentSelect>
                      {/* <Rating
                        edit_={true}
                        nivelHabilidade={Number(v.nivelHabilidade)}
                      /> */}
                    </ContainerInputStar>
                  </>
                ))}
          </InputContentScroll>
          {disabled ? (
            <></>
          ) : (
            <ContainerNewCompt
              onClick={(e) => {
                setInput([...input, 1]);
              }}
            >
              <NewCompt>
                <div>
                  <Plus size={32} />
                  <br />
                  <span>Adicionar Competência</span>
                </div>
              </NewCompt>
            </ContainerNewCompt>
          )}
        </InputContainer>
        <ContainerButtonCreate>
          <button>Criar</button>
        </ContainerButtonCreate>
      </Content>
    </Dialog.Portal>
  );
}
