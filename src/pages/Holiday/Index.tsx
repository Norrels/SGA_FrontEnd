import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { API } from "../../lib/axios";
import { HolidayItem } from "./components/HolidayItem";
import { HolidayItemFeriado } from "./components/HolidayItemFeriado";
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
  data: string;
  nome: string;
  tipo: string;
}
[];

export interface HolidayProps2 {
  id: string;
  date: string;
  name: string;
  type: string;
}
[];

export function Holiday() {
  document.title = "Dias não letivos | SGA";

  const [holiday, setHoliday] = useState<HolidayProps[]>([]);
  const [holidayMatch, setHolidayMatches] = useState<HolidayProps[]>([]);
  const [open, setOpen] = useState(false);

  function closeModal() {
    setOpen(false);
  }

  useEffect(() => {
    handleGetHolidays();
  }, []);

  useEffect(() => {
    console.log(holiday);
  }, [holiday]);

  async function handleGetHolidays() {
    const resp = await API.get("/dnl");

    if (resp.status == 200) {
      setHolidayMatches(resp.data);
      setHoliday(resp.data);
    }

    const resp2 = await API.get("/feriados");

    if (resp2.status == 200) {
      let ___: HolidayProps[] = [];

      resp2.data.map((v: any) => {
        ___.push({ id: v.id, nome: v.name, data: v.date, tipo: v.type });
      });

      ___.map((v) => {
        setHolidayMatches((state) => [...state, v]);
        setHoliday((state) => [...state, v]);
      });
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
          holiday.data.match(regex) ||
          holiday.tipo.match(regex)
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
              <NewHolidayModal closeModal={closeModal} />
            </Dialog.Root>
          </HolidayButtonContainer>
        </HolidayTitleContainer>
        <input
          type="text"
          onChange={(v) => searchHoliday(v.target.value)}
          placeholder="Busque um ou vários dias não letivos..."
        />

        <HolidayList>
          {holidayMatch.map((data) => (
            <HolidayItem holiday={data} />
          ))}
        </HolidayList>
      </HolidayContent>
    </HolidayContainer>
  );
}
