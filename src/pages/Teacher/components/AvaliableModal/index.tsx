import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCounterClockwise, Check, Confetti, DotsThreeOutline, MagnifyingGlass, X } from "phosphor-react";
import {
  AvailableContainer,
  ButtonIndividual,
  CheckboxRoot,
  CheckIndividual,
  ChecksContent,
  Content,
  ContentContainer,
  ContentScroll,
  FinalButton,
  HeaderButtons,
  InfoBusca,
  InputContainer,
  InputContent,
  InputIndividual,
  InputSeparator,
  Main,
  ModalHeader,
  Overlay,
  TableContainer,
  TableRow,
} from "./style";

import DisponibilidadePerson from "../../../../assets/DisponibilidadePerson.svg";
import { useState } from "react";
import { CheckboxIndicator } from "@radix-ui/react-checkbox";

export function AvaliableModal() {
  const [searched, setSearched] = useState(false);
  const aulas = [{}];

  return (
    <Dialog.Portal>
      <Overlay />
      <Content onCloseAutoFocus={() => setSearched(false)}>
        <ModalHeader>
          <Dialog.Title>Disponibilidade</Dialog.Title>
          <HeaderButtons>
            <ButtonIndividual title="Busque o professor disponível">
              <MagnifyingGlass size={40} weight="light" />
              <p>Buscar</p>
            </ButtonIndividual>
            <ButtonIndividual title="Limpe os campos do formulário">
              <ArrowCounterClockwise size={40} weight="light" />
              <p>Limpar</p>
            </ButtonIndividual>
            <Dialog.Close title="Feche a modal">
              <X onClick={() => setSearched(true)} size={50} weight="light" />
            </Dialog.Close>
          </HeaderButtons>
        </ModalHeader>
        {/* <form onSubmit={handleSubmit()}> */}
        <ContentScroll>
          <div id="up" style={{ display: "none" }}></div>
          <ContentContainer>
            <Main>
              <img src={DisponibilidadePerson} />
              <InputContainer>
                <InputContent>
                  <InputIndividual>
                    <label>Professor</label>
                    <select
                      placeholder="Selecione o professor"
                      defaultValue="default"
                      /* {...register("professor")} */
                    >
                      <option value="default" disabled>
                        Selecione o professor
                      </option>
                    </select>
                  </InputIndividual>
                  <InputIndividual>
                    <label>Periodo</label>
                    <select
                      placeholder="Selecione o periodo"
                      defaultValue="default"
                      /* {...register("periodo")} */
                    >
                      <option value="default" disabled>
                        Selecione o periodo
                      </option>
                      <option value="MANHA">Manhã</option>
                      <option value="TARDE">Tarde</option>
                      <option value="NOITE">Noite</option>
                      <option value="INTEGRAL">Integral</option>
                    </select>
                  </InputIndividual>
                </InputContent>
                <InputSeparator>
                  <hr />
                  <p>Selecione o intervalo de datas e os dias da semana</p>
                  <hr />
                </InputSeparator>
                <InputContent>
                  <InputIndividual>
                    <label>Data de Inicio</label>
                    <input type="date" placeholder="dd/MM/yyyy" />
                  </InputIndividual>
                  <InputIndividual>
                    <label>Data Final</label>
                    <input type="date" placeholder="dd/MM/yyyy" />
                  </InputIndividual>
                </InputContent>
                <ChecksContent>
                  <CheckIndividual title="Domingo">
                    <label>Dom</label>
                    <CheckboxRoot>
                      <CheckboxIndicator>
                        <Check size={40} weight="bold" color="#fff" />
                      </CheckboxIndicator>
                    </CheckboxRoot>
                  </CheckIndividual>
                  <CheckIndividual title="Segunda-feira">
                    <label>Seg</label>
                    <CheckboxRoot>
                      <CheckboxIndicator>
                        <Check size={40} weight="bold" color="#fff" />
                      </CheckboxIndicator>
                    </CheckboxRoot>
                  </CheckIndividual>
                  <CheckIndividual title="Terça-feira">
                    <label>Ter</label>
                    <CheckboxRoot>
                      <CheckboxIndicator>
                        <Check size={40} weight="bold" color="#fff" />
                      </CheckboxIndicator>
                    </CheckboxRoot>
                  </CheckIndividual>
                  <CheckIndividual title="Quarta-feira">
                    <label>Qua</label>
                    <CheckboxRoot>
                      <CheckboxIndicator>
                        <Check size={40} weight="bold" color="#fff" />
                      </CheckboxIndicator>
                    </CheckboxRoot>
                  </CheckIndividual>
                  <CheckIndividual title="Quinta-feira">
                    <label>Qui</label>
                    <CheckboxRoot>
                      <CheckboxIndicator>
                        <Check size={40} weight="bold" color="#fff" />
                      </CheckboxIndicator>
                    </CheckboxRoot>
                  </CheckIndividual>
                  <CheckIndividual title="Sexta-feira">
                    <label>Sex</label>
                    <CheckboxRoot>
                      <CheckboxIndicator>
                        <Check size={40} weight="bold" color="#fff" />
                      </CheckboxIndicator>
                    </CheckboxRoot>
                  </CheckIndividual>
                  <CheckIndividual title="Sábado">
                    <label>Sab</label>
                    <CheckboxRoot>
                      <CheckboxIndicator>
                        <Check size={40} weight="bold" color="#fff" />
                      </CheckboxIndicator>
                    </CheckboxRoot>
                  </CheckIndividual>
                </ChecksContent>
              </InputContainer>
            </Main>
            {aulas.length !== 0 ? (
              <InfoBusca>
                <p>
                  {searched
                    ? `{professor.nome} possui {aulas.length} aulas durante o intervalo de datas e os dias da semana selecionados...`
                    : "Verifique a disponibilidade do professor..."}
                </p>
              </InfoBusca>
            ) : (
              <></>
            )}

            {searched && aulas.length !== 0 ? (
              <TableContainer>
                <TableRow>
                  <p>Curso</p>
                  <p>Ambiente</p>
                  <p>Periodo</p>
                  <p>Data</p>
                  <p>Ver mais</p>
                </TableRow>
                <TableRow>
                  <p>Curso</p>
                  <p>Ambiente</p>
                  <p>Periodo</p>
                  <p>Data</p>
                  <button>
                    <DotsThreeOutline size={32} />
                  </button>
                </TableRow>
                <TableRow>
                  <p>Curso</p>
                  <p>Ambiente</p>
                  <p>Periodo</p>
                  <p>Data</p>
                  <button>
                    <DotsThreeOutline size={32} />
                  </button>
                </TableRow>
                <TableRow>
                  <p>Curso</p>
                  <p>Ambiente</p>
                  <p>Periodo</p>
                  <p>Data</p>
                  <button>
                    <DotsThreeOutline size={32} />
                  </button>
                </TableRow>
                <TableRow>
                  <p>Curso</p>
                  <p>Ambiente</p>
                  <p>Periodo</p>
                  <p>Data</p>
                  <button>
                    <DotsThreeOutline size={32} />
                  </button>
                </TableRow>
                <TableRow>
                  <p>Curso</p>
                  <p>Ambiente</p>
                  <p>Periodo</p>
                  <p>Data</p>
                  <button>
                    <DotsThreeOutline size={32} />
                  </button>
                </TableRow>
                <TableRow>
                  <p>Curso</p>
                  <p>Ambiente</p>
                  <p>Periodo</p>
                  <p>Data</p>
                  <button>
                    <DotsThreeOutline size={32} />
                  </button>
                </TableRow>
              </TableContainer>
            ) : (
              <></>
            )}
            {searched && aulas.length === 0 ? (
              <AvailableContainer>
                <Confetti size={60} weight="light" />
                <p>
                  O ambiente está disponivel no intervalo de datas e dias
                  selecionados
                </p>
                <p>Clique aqui para cadastrar sua aula!</p>
              </AvailableContainer>
            ) : (
              <></>
            )}
            <FinalButton>
              <button onClick={() => setSearched(true)}>Buscar</button>
            </FinalButton>
            <div id="down" style={{ display: "none" }}></div>
          </ContentContainer>
        </ContentScroll>
        {/* </form> */}
        <Dialog.Description />
      </Content>
    </Dialog.Portal>
  );
}
