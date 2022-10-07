import * as Dialog from "@radix-ui/react-dialog";
import React, { useEffect, useState } from "react";
import { API } from "../../lib/axios";
import { HolidayItem } from "./components/HolidayItem";
import { NewHolidayModal } from "./components/NewHolidayModal";
import {
  HolidayButtonContainer,
  HolidayContainer,
  HolidayContent,
  HolidayList,
  HolidayTitleContainer,
} from "./style";

export interface HolidayProps {
  id: string;
  dataInicio: string;
  dataFinal: string;
  nome: string;
  tipoDeDia: string;
}[]


export function Holiday() {
  const [holiday, setHoliday] = useState<HolidayProps[]>([]);

  useEffect(() => {
    handleGetHolidays();
  }, [])

  async function handleGetHolidays() {
    const resp = await API.get("/dnl");

    if(resp.status == 200) {
      setHoliday(resp.data);
    }
  }

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
          {holiday.map((data) => (
            <HolidayItem key={data.id} holiday={data} />
          ))}
        </HolidayList>
      </HolidayContent>
    </HolidayContainer>
  );
}
