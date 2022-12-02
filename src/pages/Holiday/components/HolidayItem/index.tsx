import * as AlertDialog from "@radix-ui/react-alert-dialog";
import * as Dialog from "@radix-ui/react-dialog";
import { CalendarX, DotsThree, Trash } from "phosphor-react";
import React, { useState } from "react";
import { z } from "zod";
import { DeleteAlertCall } from "../../../../components/DeleteAlertCall";
import { API } from "../../../../lib/axios";
import { PlaceInfoType } from "../../../Places/components/PlacesItem/style";
import { HolidayProps } from "../../Index";
import { EditHolidayModal } from "../EditHolidayModal";
import {
  HolidayInfoType,
  HolidayItemButton,
  HolidayItemButtonContainer,
  HolidayItemContainer,
  HolidayItemIcon,
  HolidayItemInfoContainer,
  HolidayItemInfoContent,
  ItemInfoContentHeader,
} from "./style";

interface HolidayItem {
  holiday: HolidayProps;
}

export const holidayInput = z.object({
  id: z.string(),
  nome: z.string(),
  tipo: z.string(),
  data: z.string(),
  type: z.string(),
  date: z.string(),
});

export type HolidayType = z.infer<typeof holidayInput>;

export function HolidayItem({ holiday }: HolidayItem) {
  const [open, setOpen] = useState(false);

  function closeModal() {
    setOpen(false);
  }

  async function handleDeleteHoliday() {
    const resp = await API.delete(`dnl/${holiday.id}`);

    if (resp.status == 200) {
      window.location.reload();
    }

    if(holiday.tipo == "FERIADO" || holiday.tipo == "EMENDA") {
      const resp = await API.delete(`dnl/${holiday.id}`);

      if(resp.status  == 200) {
        location.reload();
      }
    }  else {
      const resp = await API.delete(`feriados/${holiday.id}`);

      if(resp.status  == 200) {
        location.reload();
      }
    }
  }

  return (
    <HolidayItemContainer>
      <HolidayItemInfoContainer>
        <HolidayItemIcon>
          <CalendarX size={32} />
        </HolidayItemIcon>
        <HolidayItemInfoContent>
          <ItemInfoContentHeader>
            <h3>{holiday.nome}</h3>
            <PlaceInfoType>{holiday.tipo.toUpperCase() == "NATIONAL" ? "FERIADO" : holiday.tipo.toUpperCase()}</PlaceInfoType>
          </ItemInfoContentHeader>

          <p>
            Data: <span>{holiday.data.match("-") ? holiday.data.split("-")[2] + "/" + holiday.data.split("-")[1] + "/" + holiday.data.split("-")[0] : holiday.data}</span>
          </p>
        </HolidayItemInfoContent>
      </HolidayItemInfoContainer>

      <HolidayItemButtonContainer>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger style={{ border: "none" }} asChild>
            <HolidayItemButton buttonColor="edit">
              <DotsThree color="#fff" size={32} />
            </HolidayItemButton>
          </Dialog.Trigger>
          <EditHolidayModal
            closeModal={closeModal}
            key={holiday.id}
            holiday={holiday}
          />
        </Dialog.Root>

        <AlertDialog.Root>
          <AlertDialog.Trigger asChild>
            <HolidayItemButton buttonColor="delete">
              <Trash color="#fff" size={26} />
            </HolidayItemButton>
          </AlertDialog.Trigger>
          <DeleteAlertCall deleteById={handleDeleteHoliday} />
        </AlertDialog.Root>
      </HolidayItemButtonContainer>
    </HolidayItemContainer>
  );
}
