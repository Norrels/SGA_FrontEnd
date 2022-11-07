import * as Dialog from "@radix-ui/react-dialog";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { CaretDown, CaretUp, User } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { API } from "../../lib/axios";
import { HolidayItem } from "./components/HolidayItem";
import { NewHolidayModal } from "./components/NewHolidayModal";
import Logo from "../../assets/Logo.svg";
import {
  HeaderContainer,
  HeaderContent,
  HeaderNavBar,
  HeaderNavMenu,
  HeaderNavMenuArrow,
  HeaderNavMenuContent,
  HeaderNavMenuItem,
  HeaderUser,
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
            placeholder="Buscar um dia não letivo"
          />

          <HolidayList>
            {holidayMatch.map((data) => (
              <HolidayItem key={data.id} holiday={data} />
            ))}
          </HolidayList>
        </HolidayContent>
      </HolidayContainer>
    
  );
}
