import {
  HomeCalenderContainer,
  HomeCalenderContent,
  HomeCalenderDay,
  HomeCalenderHeader,
  HomeCalenderHeaderDays,
  HomeCalenderOrderBy,
  HomeClass,
  HomeClasses,
  HomeClassesContainer,
  HomeDivider,
  HomePlaces,
} from "./style";
import * as ContextMenu from "@radix-ui/react-context-menu";

import {
  format,
} from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { RightClick } from "../RightClick";
import { useState } from "react";


interface CalenderProps {
 days: Date[];
 today: Date;
}


export function Calender({days, today} : CalenderProps) {

  const [open, setOpen] = useState(false);

  return (
    <HomeCalenderContainer>
      <HomeCalenderHeader>
        <HomeCalenderOrderBy>
          <p>Crescente</p>
        </HomeCalenderOrderBy>
        <HomeCalenderHeaderDays>
          {days.map((day) => {
            return (
              <HomeCalenderDay
                key={day.getDay()}
                days={format(day, "d' 'L") === format(today, "d' 'L") ? "today" : "notToday"}
              >
                <strong>{parseInt(format(day, "d"))}</strong>
                <p>
                  {format(day, "eee", {
                    locale: ptBR,
                  })}
                </p>
              </HomeCalenderDay>
            );
          })}
        </HomeCalenderHeaderDays>
      </HomeCalenderHeader>

      <HomeCalenderContent>
        <HomePlaces>
          <p>Lab - 10</p>
        </HomePlaces>
        <HomeClassesContainer>
          <HomeClasses>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="morning">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
          </HomeClasses>
          <HomeClasses>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="morning">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
          </HomeClasses>
          <HomeClasses>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="morning">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
          </HomeClasses>
          <HomeClasses>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="morning">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
          </HomeClasses>
          <HomeClasses>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="morning">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
          </HomeClasses>
          <HomeClasses>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="morning">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
          </HomeClasses>
          <HomeClasses>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="morning">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
          </HomeClasses>
         
        </HomeClassesContainer>
      </HomeCalenderContent>
      <HomeDivider />
      <HomeCalenderContent>
        <HomePlaces>
          <p>Lab - 10</p>
        </HomePlaces>
        <HomeClassesContainer>
          <HomeClasses>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="morning">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
          </HomeClasses>
          <HomeClasses>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="morning">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
          </HomeClasses>
          <HomeClasses>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="morning">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
          </HomeClasses>
          <HomeClasses>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="morning">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
          </HomeClasses>
          <HomeClasses>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="morning">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
          </HomeClasses>
          <HomeClasses>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="morning">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
          </HomeClasses>
          <HomeClasses>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="morning">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="afternoon">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="night">
                  <p>Caio</p>
                  <sup>Photoshop</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>
          </HomeClasses>
         
        </HomeClassesContainer>
      </HomeCalenderContent>
      
    </HomeCalenderContainer>
  );
}
