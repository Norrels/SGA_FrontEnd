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
  addDays,
  eachDayOfInterval,
  format,
  nextDay,
  startOfWeek,
} from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { RightClick } from "../RightClick";
import { ChangeEvent, useState } from "react";
import { previousDay } from "date-fns/esm";


export function Calender() {
  const today = new Date();
  //Dia de referencia
  const [referenceDay, setReferenceDay] = useState(today);

  const semana = startOfWeek(referenceDay, { weekStartsOn: 0 });

  const result = eachDayOfInterval({
    start: semana,
    end: addDays(semana, 6),
  });



  function handleNextWeekDay() {
    const nextWeek = startOfWeek(nextDay(semana, 0));
    setReferenceDay(nextWeek);
  }

  function handlePreviousDay() {
    const previousWeekDay = startOfWeek(previousDay(semana, 0));
    setReferenceDay(previousWeekDay);
  }

  function handleChoiceDay(event: ChangeEvent<HTMLInputElement>) {
    const dayChoiced = startOfWeek(new Date(event.target.value))
    setReferenceDay(dayChoiced)
  }

  return (
    <HomeCalenderContainer>
      <HomeCalenderHeader>
        <button onClick={handlePreviousDay}>-</button>
        <button onClick={handleNextWeekDay}>+</button>
        <input type="date" onChange={handleChoiceDay} />
        <HomeCalenderOrderBy>
          <p>Crescente</p>
        </HomeCalenderOrderBy>
        <HomeCalenderHeaderDays>
          {result.map((day) => {
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
