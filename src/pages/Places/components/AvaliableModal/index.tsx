import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import {
  AvaliableModalContainer,
  AvaliableModalContent,
  AvaliableModalDivider,
  AvaliableModalOptionsContainer,
  AvaliableModalOptionsContent,
  CloseButton,
  Content,
  Overlay,
} from "./style";
import Calendario from "../../../../assets/Calendario.svg";

export function AvaliableModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <Dialog.Title>Disponibilidade</Dialog.Title>

        <AvaliableModalContainer>
          <AvaliableModalOptionsContainer>
            <img src={Calendario} alt="" />

            <AvaliableModalContent>
              <AvaliableModalOptionsContent>
                <span>
                  <p>Ambientes</p>
                  <select name="" id="">
                    <option value="">Selecione o ambiente</option>
                  </select>
                </span>

                <span>
                  <p>Periodo</p>
                  <select name="" id="">
                    <option value="">Selecione o periodo</option>
                  </select>
                </span>
              </AvaliableModalOptionsContent>

              <AvaliableModalDivider>Selecione o intervalo de datas</AvaliableModalDivider>

              <AvaliableModalOptionsContent>
                <span>
                  <p>Data de início</p>
                  <input type="date" />
                </span>

                <span>
                  <p>Data final</p>
                  <input type="date" />
                </span>
              </AvaliableModalOptionsContent>
            </AvaliableModalContent>
          </AvaliableModalOptionsContainer>

          <sup>Verifique a disponibilidade do ambiente...</sup>
          <button type="submit">Buscar</button>
        </AvaliableModalContainer>
        <Dialog.Description />
      </Content>
    </Dialog.Portal>
  );
}