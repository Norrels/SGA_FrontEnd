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

import { addDays, eachDayOfInterval, format, startOfWeek } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { RightClick } from "../RightClick";


export function Calender() {
  const today = new Date();
  const semana = startOfWeek(today, { weekStartsOn: 0 });
  const semanaMaisSete = addDays(semana, 6);

  const result = eachDayOfInterval({
    start: new Date(semana),
    end: new Date(semanaMaisSete),
  });

  return (
    <HomeCalenderContainer>
      <HomeCalenderHeader>
        <HomeCalenderOrderBy>
          <p>Crescente</p>
        </HomeCalenderOrderBy>
        <HomeCalenderHeaderDays>
          {result.map((day) => {
            return (
              <HomeCalenderDay
                key={day.getDay()}
                days={day.getDay() == today.getDay() ? "today" : "notToday"}
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
          <HomeClasses></HomeClasses>
          <HomeClasses></HomeClasses>
          <HomeClasses></HomeClasses>
          <HomeClasses></HomeClasses>
          <HomeClasses></HomeClasses>
          <HomeClasses></HomeClasses>
          <HomeClasses></HomeClasses>
        </HomeClassesContainer>
      </HomeCalenderContent>
      <HomeDivider />
      <HomeCalenderContent>
        <HomePlaces>
          <p>Lab - 10</p>
        </HomePlaces>
        <HomeClassesContainer>
          <HomeClasses>
            <HomeClass period="morning">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="afternoon">
              <p>Chile</p>
              <sup>Desenvolvim...</sup>
            </HomeClass>
            <HomeClass period="night">
              <p>Bruna</p>
              <sup>Logistica</sup>
            </HomeClass>
          </HomeClasses>
          <HomeClasses>
            <HomeClass period="morning">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="afternoon">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="night">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
          </HomeClasses>
          <HomeClasses>
            <HomeClass period="morning">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="afternoon">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="night">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
          </HomeClasses>
          <HomeClasses>
            <HomeClass period="morning">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="afternoon">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="night">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
          </HomeClasses>
          <HomeClasses>
            <HomeClass period="morning">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="afternoon">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="night">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
          </HomeClasses>
          <HomeClasses>
            <HomeClass period="morning">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="afternoon">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="night">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
          </HomeClasses>
          <HomeClasses>
            <ContextMenu.Root>
              <ContextMenu.Trigger>
                <HomeClass period="morning">
                  <p>Caio</p>
                  <sup>Photoshoaap</sup>
                </HomeClass>
              </ContextMenu.Trigger>
              <RightClick />
            </ContextMenu.Root>

            <HomeClass period="afternoon"></HomeClass>

            <HomeClass period="night"></HomeClass>
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
            <HomeClass period="morning">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="afternoon">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="night">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
          </HomeClasses>
          <HomeClasses>
            <HomeClass period="morning">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="afternoon">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="night">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
          </HomeClasses>
          <HomeClasses>
            <HomeClass period="morning">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="afternoon">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="night">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
          </HomeClasses>
          <HomeClasses>
            <HomeClass period="morning">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="afternoon">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="night">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
          </HomeClasses>
          <HomeClasses>
            <HomeClass period="morning">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="afternoon">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="night">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
          </HomeClasses>
          <HomeClasses>
            <HomeClass period="morning">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="afternoon"></HomeClass>
            <HomeClass period="night"></HomeClass>
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
            <HomeClass period="morning">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="afternoon">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="night">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
          </HomeClasses>
          <HomeClasses>
            <HomeClass period="morning">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="afternoon">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="night">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
          </HomeClasses>
          <HomeClasses>
            <HomeClass period="morning">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="afternoon">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="night">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
          </HomeClasses>
          <HomeClasses>
            <HomeClass period="morning">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="afternoon">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="night">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
          </HomeClasses>
          <HomeClasses>
            <HomeClass period="morning">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="afternoon">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="night">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
          </HomeClasses>
          <HomeClasses>
            <HomeClass period="morning">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="afternoon">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="night">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
          </HomeClasses>
          <HomeClasses>
            <HomeClass period="morning">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="afternoon"></HomeClass>
            <HomeClass period="night"></HomeClass>
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
            <HomeClass period="morning">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="afternoon">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="night">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
          </HomeClasses>
          <HomeClasses>
            <HomeClass period="morning">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="afternoon">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="night">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
          </HomeClasses>
          <HomeClasses>
            <HomeClass period="morning">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="afternoon">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="night">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
          </HomeClasses>
          <HomeClasses>
            <HomeClass period="morning">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="afternoon">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="night">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
          </HomeClasses>
          <HomeClasses>
            <HomeClass period="morning">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="afternoon">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="night">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
          </HomeClasses>
          <HomeClasses>
            <HomeClass period="morning">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="afternoon">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="night">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
          </HomeClasses>
          <HomeClasses>
            <HomeClass period="morning">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="afternoon"></HomeClass>
            <HomeClass period="night"></HomeClass>
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
            <HomeClass period="morning">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="afternoon">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="night">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
          </HomeClasses>
          <HomeClasses>
            <HomeClass period="morning">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="afternoon">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="night">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
          </HomeClasses>
          <HomeClasses>
            <HomeClass period="morning">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="afternoon">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="night">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
          </HomeClasses>
          <HomeClasses>
            <HomeClass period="morning">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="afternoon">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="night">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
          </HomeClasses>
          <HomeClasses>
            <HomeClass period="morning">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="afternoon">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="night">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
          </HomeClasses>
          <HomeClasses>
            <HomeClass period="morning">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="afternoon">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="night">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
          </HomeClasses>
          <HomeClasses>
            <HomeClass period="morning">
              <p>Caio</p>
              <sup>Photoshop</sup>
            </HomeClass>
            <HomeClass period="afternoon"></HomeClass>
            <HomeClass period="night"></HomeClass>
          </HomeClasses>
        </HomeClassesContainer>
      </HomeCalenderContent>
      <HomeDivider />

      {/* <HomeCalenderContent>
          <HomePlaces>
            <p>Lab - 10</p>
          </HomePlaces>
          <HomeClassesContainer>
            <HomeClasses>
              <HomeClass period="morning" ><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"><p>Chile</p></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"><p>Chile</p></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"><p>Chile</p></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"><p>Chile</p></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"><p>Chile</p></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
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
              <HomeClass period="morning" ><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"><p>Chile</p></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"><p>Chile</p></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"><p>Chile</p></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"><p>Chile</p></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"><p>Chile</p></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
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
              <HomeClass period="morning" ><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"><p>Chile</p></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"><p>Chile</p></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"><p>Chile</p></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"><p>Chile</p></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"><p>Chile</p></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
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
              <HomeClass period="morning" ><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"><p>Chile</p></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"><p>Chile</p></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"><p>Chile</p></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"><p>Chile</p></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"><p>Chile</p></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
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
              <HomeClass period="morning" ><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"><p>Chile</p></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"><p>Chile</p></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"><p>Chile</p></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"><p>Chile</p></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"><p>Chile</p></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
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
              <HomeClass period="morning" ><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"><p>Chile</p></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"><p>Chile</p></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"><p>Chile</p></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"><p>Chile</p></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"><p>Chile</p></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
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
              <HomeClass period="morning" >
                <p>Caio</p>
                <sup>Photoshop</sup>
              </HomeClass >
              <HomeClass period="afternoon"><p>Chile</p></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"><p>Chile</p></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"><p>Chile</p></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"><p>Chile</p></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
            <HomeClasses>
              <HomeClass period="morning"><p>Caio</p></HomeClass >
              <HomeClass period="afternoon"><p>Chile</p></HomeClass >
              <HomeClass period="night"><p>Bruna</p></HomeClass >
            </HomeClasses>
          </HomeClassesContainer>
        </HomeCalenderContent> */}
    </HomeCalenderContainer>
  );
}
