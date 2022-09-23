import * as Dialog from "@radix-ui/react-dialog";
import React from "react";
import { HolidayItem } from "./components/HolidayItem";
import { NewHolidayModal } from "./components/NewHolidayModal";
import {
  HolidayButtonContainer,
  HolidayContainer,
  HolidayContent,
  HolidayList,
  HolidayTitleContainer,
} from "./style";

export function Holiday() {
  const holidays = [
    {
      id: 2,
      dataInicio: "2022-10-10",
      dataFinal: "",
      nome: "Dia das Crianças",
      tipoDeDia: "FERIADO",
    },
  ];

  return (
    <HolidayContainer>
      <HolidayContent>
        <HolidayTitleContainer>
          <h1>Dias não letivos</h1>
          <p>Selecione um dia não letivo ou crie um novo!</p>
          <HolidayButtonContainer>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button>Novo dia</button>
              </Dialog.Trigger>
              <NewHolidayModal />
            </Dialog.Root>
          </HolidayButtonContainer>
        </HolidayTitleContainer>
        <input type="text" placeholder="Buscar um dia não letivo" />

        <HolidayList>
          {holidays.map((v) => (
            <HolidayItem
              key={v.id}
              id={v.id}
              dataFinal={v.dataFinal}
              dataInicio={v.dataInicio}
              nome={v.nome}
              tipoDeDia={v.tipoDeDia}
            />
          ))}
        </HolidayList>
      </HolidayContent>
    </HolidayContainer>
  );
}
