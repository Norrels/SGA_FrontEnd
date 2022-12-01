//Tentar criar um context para esses dois

import { ArrowLeft, ArrowRight, Calendar, Check, Info } from "phosphor-react";
import * as HoverCard from "@radix-ui/react-hover-card";
import {
  HomeCalenderBox,
  HomeCheckBox,
  HomeCheckBoxIndicator,
  HomeDownContentSearchInput,
  HomeDownFilterContentSearchInput,
  HomeSearchInputContainer,
  HomeSelectAndLegenda,
  HomeSelectFilterOptionSearch,
  HomeSelectOptionSearch,
  HomeTextContentSearchInput,
  HomeUpContentSearchInput,
  InputCheckbox,
} from "./style";
import { SubtitlteHover } from "../SubtitleHover";
import { ChangeEvent } from "react";
import { endOfWeek, format, startOfWeek } from "date-fns";
import { ptBR } from "date-fns/locale";
import { endOfDay } from "date-fns/esm";

interface SearchInputProps {
  previousDayWeek: () => void;
  nextDayWeek: () => void;
  choiceDayWeek: (data: Date) => void;
  referenceDay: Date;
  choiceTypeOfViewCalender: (type: string) => void;
}

export function HomeSearchInput({
  previousDayWeek,
  nextDayWeek,
  choiceDayWeek,
  referenceDay,
  choiceTypeOfViewCalender,
}: SearchInputProps) {
  const firstWeekDay = startOfWeek(referenceDay);
  const lastWeekDay = endOfWeek(referenceDay);

  function handlePreviousDay() {
    previousDayWeek();
  }

  function handleNextWeekDay() {
    nextDayWeek();
  }

  function handleChangeCalenderView(event: ChangeEvent<HTMLSelectElement>) {
    choiceTypeOfViewCalender(event.target.value);
  }

  function handleChoiceDay(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value == "") {
      return undefined;
    }
    console.log(event.target.value);
    const dayChoiced = startOfWeek(new Date(event.target.value));
    choiceDayWeek(dayChoiced);
  }

  /* function teste(event: ChangeEvent<HTMLSelectElement>) {
    if (event.target.value == "MANHA") {
      console.log("passou ak");
    }
  }

  function handleClickInTypeDay(value: any) {
    handleCreateArrayDayType(value);
  } */

  return (
    <HomeSearchInputContainer>
      <HomeDownContentSearchInput>
        {/* <input
          type="text"
          placeholder="Busque uma ou várias aulas dessa semana..."
        /> */}
      </HomeDownContentSearchInput>

      <HomeDownFilterContentSearchInput>
        <HomeUpContentSearchInput>
          <button onClick={handlePreviousDay}>
            <ArrowLeft size={30} />
          </button>

          <HomeTextContentSearchInput>
            {format(referenceDay, "LLLL", {
              locale: ptBR,
            })}{" "}
            {format(firstWeekDay, "d", {
              locale: ptBR,
            })}{" "}
            -{" "}
            {format(lastWeekDay, "LLLL", {
              locale: ptBR,
            })}{" "}
            {format(lastWeekDay, "d", {
              locale: ptBR,
            })}
          </HomeTextContentSearchInput>
          <button onClick={handleNextWeekDay}>
            <ArrowRight size={30} />
          </button>

          <HomeCalenderBox>
            <Calendar size={32} />
            <input type="date" onChange={handleChoiceDay} />
          </HomeCalenderBox>
        </HomeUpContentSearchInput>
        <HomeSelectAndLegenda>
          <HomeSelectOptionSearch>
            <select onChange={handleChangeCalenderView}>
              <option>Salas</option>
              <option>Professores</option>
            </select>
          </HomeSelectOptionSearch>
          <HoverCard.Root openDelay={2}>
            <HoverCard.Trigger asChild>
              <Info size={30} opacity={0.5} />
            </HoverCard.Trigger>
            <SubtitlteHover />
          </HoverCard.Root>
        </HomeSelectAndLegenda>

        <HomeSelectFilterOptionSearch>
          {/* <InputCheckbox colorsColor={1}>
            <HomeCheckBox
              value=""
              onChange={(checked) =>
                handleClickInTypeDay(checked.currentTarget.value)
              }
            >
              <HomeCheckBoxIndicator >
                <Check size={30} weight="bold" />
              </HomeCheckBoxIndicator>
            </HomeCheckBox>
            <span>Todos</span>
          </InputCheckbox>
          <InputCheckbox colorsColor={2}>
            <HomeCheckBox onCheckedChange={() =>
                handleClickInTypeDay("MANHA")
              }>
              <HomeCheckBoxIndicator>
                <Check size={30} weight="bold" />
              </HomeCheckBoxIndicator>
            </HomeCheckBox>
            <span>Manhã</span>
          </InputCheckbox>
          <InputCheckbox colorsColor={3}>
            <HomeCheckBox onCheckedChange={() =>
                handleClickInTypeDay("TARDE")
              }>
              <HomeCheckBoxIndicator>
                <Check size={30} weight="bold" />
              </HomeCheckBoxIndicator>
            </HomeCheckBox>
            <span>Tarde</span>
          </InputCheckbox>
          <InputCheckbox colorsColor={4}>
            <HomeCheckBox onCheckedChange={() =>
                handleClickInTypeDay("NOITE")
              }>
              <HomeCheckBoxIndicator>
                <Check size={30} weight="bold" />
              </HomeCheckBoxIndicator>
            </HomeCheckBox>
            <span>Noite</span>
          </InputCheckbox> */}
        </HomeSelectFilterOptionSearch>
      </HomeDownFilterContentSearchInput>
    </HomeSearchInputContainer>
  );
}
