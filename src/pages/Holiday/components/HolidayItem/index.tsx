import * as Dialog from "@radix-ui/react-dialog";
import { CalendarX, DotsThree, Trash } from "phosphor-react";
import React, { useState } from "react";
import { z } from "zod";
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
});

export type HolidayType = z.infer<typeof holidayInput>;

export function HolidayItem({ holiday }: HolidayItem) {
  const [open, setOpen] = useState(false);

  function closeModal() {
    setOpen(false);
  }

  async function handleDeleteHoliday(data: HolidayType) {
    const resp = await API.delete(`dnl/${data.id}`);

    if (resp.status == 200) {
      console.log("deletou !");
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
            <PlaceInfoType>{holiday.tipo}</PlaceInfoType>
          </ItemInfoContentHeader>

          <p>
            Data: <span>{holiday.data}</span>
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

        <HolidayItemButton buttonColor="delete">
          <Trash
            color="#fff"
            size={26}
            onClick={() => handleDeleteHoliday(holiday)}
          />
        </HolidayItemButton>
      </HolidayItemButtonContainer>
    </HolidayItemContainer>
  );
}
