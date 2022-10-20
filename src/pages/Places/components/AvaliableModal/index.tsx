import * as Dialog from "@radix-ui/react-dialog";
import {
  Check,
  Confetti,
  DotsThree,
  DotsThreeOutline,
  X,
} from "phosphor-react";
import {
  AvailableContainer,
  CheckboxIndicator,
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
  TableHeader,
  TableHeaderContent,
  TableRow,
  TableScroll,
} from "./style";
import DisponibilidadePerson from "../../../../assets/DisponibilidadePerson.svg";
import { useState } from "react";

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
            <Dialog.Close>
              <X onClick={() => setSearched(true)} size={50} weight="light" />
            </Dialog.Close>
          </HeaderButtons>
        </ModalHeader>
        {/* <form onSubmit={handleSubmit()}> */}
        <ContentScroll>
          <ContentContainer>
            <Main>
              <img src={DisponibilidadePerson} />
              <InputContainer>
                <InputContent>
                  <InputIndividual>
                    <label>Ambiente</label>
                    <select
                      placeholder="Selecione o ambiente"
                      /* {...register("tipoAmbiente")} */
                    >
                      <option selected disabled>
                        Selecione o ambiente
                      </option>
                    </select>
                  </InputIndividual>
                  <InputIndividual>
                    <label>Periodo</label>
                    <select
                      placeholder="Selecione o periodo"
                      /* {...register("tipoAmbiente")} */
                    >
                      <option selected disabled>
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
                  <CheckIndividual>
                    <label>Dom</label>
                    <CheckboxRoot>
                      <CheckboxIndicator>
                        <Check size={40} />
                      </CheckboxIndicator>
                    </CheckboxRoot>
                  </CheckIndividual>
                  <CheckIndividual>
                    <label>Seg</label>
                    <CheckboxRoot>
                      <CheckboxIndicator>
                        <Check size={40} />
                      </CheckboxIndicator>
                    </CheckboxRoot>
                  </CheckIndividual>
                  <CheckIndividual>
                    <label>Ter</label>
                    <CheckboxRoot>
                      <CheckboxIndicator>
                        <Check size={40} />
                      </CheckboxIndicator>
                    </CheckboxRoot>
                  </CheckIndividual>
                  <CheckIndividual>
                    <label>Qua</label>
                    <CheckboxRoot>
                      <CheckboxIndicator>
                        <Check size={40} />
                      </CheckboxIndicator>
                    </CheckboxRoot>
                  </CheckIndividual>
                  <CheckIndividual>
                    <label>Qui</label>
                    <CheckboxRoot>
                      <CheckboxIndicator>
                        <Check size={40} />
                      </CheckboxIndicator>
                    </CheckboxRoot>
                  </CheckIndividual>
                  <CheckIndividual>
                    <label>Sex</label>
                    <CheckboxRoot>
                      <CheckboxIndicator>
                        <Check size={40} />
                      </CheckboxIndicator>
                    </CheckboxRoot>
                  </CheckIndividual>
                  <CheckIndividual>
                    <label>Sab</label>
                    <CheckboxRoot>
                      <CheckboxIndicator>
                        <Check size={40} />
                      </CheckboxIndicator>
                    </CheckboxRoot>
                  </CheckIndividual>
                </ChecksContent>
              </InputContainer>
              {/* <FinalButton>
                <button>Buscar</button>
              </FinalButton> */}
            </Main>
            {aulas.length !== 0 ? (
              <InfoBusca>
                <p>
                  {searched
                    ? `{aula.nome} possui {aulas.length} aulas durante o intervalo de datas e os dias da semana selecionados...`
                    : "Verifique a disponibilidade do ambiente..."}
                </p>
              </InfoBusca>
            ) : (
              <></>
            )}

            {searched && aulas.length !== 0 ? (
              <TableContainer>
                <TableHeader>
                  <TableHeaderContent>
                    <p>Curso</p>
                    <p>Professor</p>
                    <p>Periodo</p>
                    <p>Data</p>
                    <p>Ver mais</p>
                  </TableHeaderContent>
                </TableHeader>
                <TableScroll>
                  <TableRow>
                    <p>Curso</p>
                    <p>Professor</p>
                    <p>Periodo</p>
                    <p>Data</p>
                    <button>
                      <DotsThreeOutline size={32} />
                    </button>
                  </TableRow>
                  <TableRow>
                    <p>Curso</p>
                    <p>Professor</p>
                    <p>Periodo</p>
                    <p>Data</p>
                    <button>
                      <DotsThreeOutline size={32} />
                    </button>
                  </TableRow>
                  <TableRow>
                    <p>Curso</p>
                    <p>Professor</p>
                    <p>Periodo</p>
                    <p>Data</p>
                    <button>
                      <DotsThreeOutline size={32} />
                    </button>
                  </TableRow>
                  <TableRow>
                    <p>Curso</p>
                    <p>Professor</p>
                    <p>Periodo</p>
                    <p>Data</p>
                    <button>
                      <DotsThreeOutline size={32} />
                    </button>
                  </TableRow>
                  <TableRow>
                    <p>Curso</p>
                    <p>Professor</p>
                    <p>Periodo</p>
                    <p>Data</p>
                    <button>
                      <DotsThreeOutline size={32} />
                    </button>
                  </TableRow>
                  <TableRow>
                    <p>Curso</p>
                    <p>Professor</p>
                    <p>Periodo</p>
                    <p>Data</p>
                    <button>
                      <DotsThreeOutline size={32} />
                    </button>
                  </TableRow>
                </TableScroll>
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
          </ContentContainer>
        </ContentScroll>
        {/* </form> */}
        <Dialog.Description />
      </Content>
    </Dialog.Portal>
  );
}
