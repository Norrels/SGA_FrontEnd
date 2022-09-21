import { CalendarX, DotsThree, Trash } from "phosphor-react";
import React from "react";
import {
  HolidayDescription,
  HolidayInfoType,
  HolidayItemButton,
  HolidayItemButtonContainer,
  HolidayItemContainer,
  HolidayItemIcon,
  HolidayItemInfoContent,
} from "./style";

export function HolidayItem() {
  return (
    <HolidayItemContainer>
      <HolidayItemInfoContent>
        <HolidayItemIcon>
          <CalendarX size={30} />
        </HolidayItemIcon>

        <HolidayDescription>
          <HolidayItemInfoContent>
            <h3>Independência do Brasi</h3>
            <HolidayInfoType>
              <p>Feriado</p>
            </HolidayInfoType>
          </HolidayItemInfoContent>
          <HolidayItemInfoContent>
            <p>
              Data: <span>07/09/2022</span>
            </p>
          </HolidayItemInfoContent>
        </HolidayDescription>
      </HolidayItemInfoContent>

      <HolidayItemButtonContainer>
        <HolidayItemButton buttonColor="edit">
          <DotsThree color="#000" size={25} />
        </HolidayItemButton>

        <HolidayItemButton buttonColor="delete">
          <Trash color="#fff" size={25} />
        </HolidayItemButton>
      </HolidayItemButtonContainer>
    </HolidayItemContainer>
  );
}
