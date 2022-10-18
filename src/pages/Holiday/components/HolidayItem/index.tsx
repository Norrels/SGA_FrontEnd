import * as Dialog from "@radix-ui/react-dialog";
import { CalendarX, DotsThree, Trash } from "phosphor-react";
import React, { useState } from "react";
import { z } from "zod";
import { API } from "../../../../lib/axios";
import { HolidayProps } from "../../Index";
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

interface HolidayItem {
  holiday: HolidayProps;
}

export const holidayInput = z.object({
  id: z.string(),
  nome: z.string(),
  tipoDeDia: z.string(),
});

export type HolidayType = z.infer<typeof holidayInput>;

export function HolidayItem({ holiday }: HolidayItem) {
  const [open, setOpen] = useState(false);

  function closeModal() {
    setOpen(false);
  }

  async function handleDeleteHoliday(data: HolidayType){
    const resp = await API.delete(`dnl/${data.id}`);

    if(resp.status == 200) {
      console.log("deletou !");
    }
  }

  return (
    <HolidayItemContainer>
      <HolidayItemInfoContent>
        <HolidayItemIcon>
          <CalendarX size={30} />
        </HolidayItemIcon>

        <HolidayDescription>
          <HolidayItemInfoContent>
            <h3>{holiday.nome}</h3>
            <HolidayInfoType>
              <p>{holiday.tipoDeDia}</p>
            </HolidayInfoType>
          </HolidayItemInfoContent>
          <HolidayItemInfoContent>
            <p>
              Data: <span>{holiday.dataInicio}</span>
            </p>
          </HolidayItemInfoContent>
        </HolidayDescription>
      </HolidayItemInfoContent>

      <HolidayItemButtonContainer>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger style={{ border: "none" }} asChild>
            <HolidayItemButton buttonColor="edit">
              <DotsThree color="#000" size={25} />
            </HolidayItemButton >
          </Dialog.Trigger>
          <EditHolidayModal
          closeModal={closeModal}
            key={holiday.id}
            holiday={holiday}
          />
        </Dialog.Root>

        <HolidayItemButton onClick={() => handleDeleteHoliday(holiday)} buttonColor="delete">
          <Trash color="#fff" size={25} />
        </HolidayItemButton>
      </HolidayItemButtonContainer>
    </HolidayItemContainer>
  );
}
