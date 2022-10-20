import * as Dialog from "@radix-ui/react-dialog";
import { Check, X } from "phosphor-react";
import {
  Content,
  ContentContainer,
  ContentScroll,
  FinalButton,
  HeaderButtons,
  InputContainer,
  InputContent,
  InputIndividual,
  InputSeparator,
  ModalHeader,
  Overlay,
} from "./style";
import DisponibilidadePerson from "../../../../assets/DisponibilidadePerson.svg";

export function AvaliableModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <ModalHeader>
          <Dialog.Title>Disponibilidade de ambiente</Dialog.Title>
          <HeaderButtons>
            <Dialog.Close>
              <X size={50} weight="light" />
            </Dialog.Close>
          </HeaderButtons>
        </ModalHeader>
        <form /* onSubmit={handleSubmit(handleCreateNewPlace)} */>
          <ContentScroll>
            <ContentContainer>
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
              </InputContainer>

              <FinalButton>
                <button>Buscar</button>
              </FinalButton>
            </ContentContainer>
          </ContentScroll>
        </form>
        <Dialog.Description />
      </Content>
    </Dialog.Portal>
  );
}
