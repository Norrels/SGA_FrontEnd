import * as Dialog from "@radix-ui/react-dialog";
import { CalendarX, DotsThree, Trash } from "phosphor-react";
import React from "react";
import { EditHolidayModal } from "../EditHolidayModal";
import {
  HolidayDescription,
  HolidayInfoType,
  HolidayItemButton,
  HolidayItemButtonContainer,
  HolidayItemContainer,
  HolidayItemIcon,
  HolidayItemInfoContent,
} from "./style";

interface Holiday {
  id: number;
  dataInicio: string;
  dataFinal: string;
  nome: string;
  tipoDeDia: string;
}

export function HolidayItem({
  id,
  dataFinal,
  dataInicio,
  nome,
  tipoDeDia,
}: Holiday) {
  return (
    <HolidayItemContainer>
      <HolidayItemInfoContent>
        <HolidayItemIcon>
          <CalendarX size={30} />
        </HolidayItemIcon>

        <HolidayDescription>
          <HolidayItemInfoContent>
            <h3>{nome}</h3>
            <HolidayInfoType>
              <p>{tipoDeDia}</p>
            </HolidayInfoType>
          </HolidayItemInfoContent>
          <HolidayItemInfoContent>
            <p>
              Data: <span>{dataInicio}</span>
            </p>
          </HolidayItemInfoContent>
        </HolidayDescription>
      </HolidayItemInfoContent>

      <HolidayItemButtonContainer>
        <Dialog.Root>
          <Dialog.Trigger style={{ border: "none" }}>
            <HolidayItemButton buttonColor="edit">
              <DotsThree color="#000" size={25} />
            </HolidayItemButton>
          </Dialog.Trigger>
          <EditHolidayModal
            key={id}
            id={id}
            dataFinal={dataFinal}
            dataInicio={dataInicio}
            nome={nome}
            tipoDeDia={tipoDeDia}
          />
        </Dialog.Root>

        <HolidayItemButton buttonColor="delete">
          <Trash color="#fff" size={25} />
        </HolidayItemButton>
      </HolidayItemButtonContainer>
    </HolidayItemContainer>
  );
}
