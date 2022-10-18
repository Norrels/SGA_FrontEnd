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
}
[];

export function Holiday() {
  const [holiday, setHoliday] = useState<HolidayProps[]>([]);
  const [holidayMatch, setHolidayMatches] = useState<HolidayProps[]>([]);

  const [open, setOpen] = useState(false);

  function closeModal() {
    setOpen(false);
  }

  useEffect(() => {
    handleGetHolidays();
  }, []);

  async function handleGetHolidays() {
    const resp = await API.get("/dnl");

    if (resp.status == 200) {
      setHolidayMatches(resp.data);
      setHoliday(resp.data);
    }
  }

  const searchHoliday = (text: String) => {
    if (!text) {
      setHolidayMatches(holiday);
    } else {
      let matches = holiday.filter((holiday) => {
        const regex = new RegExp(`${text}`, "gi");
        return (
          holiday.nome.match(regex) ||
          holiday.dataInicio.match(regex) ||
          holiday.dataFinal.match(regex) ||
          holiday.tipoDeDia.match(regex)
        );
      });
      setHolidayMatches(matches);
    }
  };

  return (
    <HolidayContainer>
      <HolidayContent>
        <HolidayTitleContainer>
          <h1>Dias não letivos</h1>
          <p>Selecione um dia não letivo ou crie um novo!</p>
          <HolidayButtonContainer>
            <Dialog.Root open={open} onOpenChange={setOpen}>
              <Dialog.Trigger asChild>
                <button>Novo dia</button>
              </Dialog.Trigger>
              <NewHolidayModal closeModal={closeModal}/>
            </Dialog.Root>
          </HolidayButtonContainer>
        </HolidayTitleContainer>
        <input type="text" onChange={(v) => searchHoliday(v.target.value)} placeholder="Buscar um dia não letivo" />

        <HolidayList>
          {holidayMatch.map((data) => (
            <HolidayItem key={data.id} holiday={data} />
          ))}
        </HolidayList>
      </HolidayContent>
    </HolidayContainer>
  );
}
