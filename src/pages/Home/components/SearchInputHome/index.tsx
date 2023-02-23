import { ArrowLeft, ArrowRight, Calendar, Info } from "phosphor-react";
import * as HoverCard from "@radix-ui/react-hover-card";
import {
  HomeCalenderBox,
  HomeDownContentSearchInput,
  HomeDownFilterContentSearchInput,
  HomeSearchInputContainer,
  HomeSelectAndLegenda,
  HomeSelectFilterOptionSearch,
  HomeSelectOptionSearch,
  HomeTextContentSearchInput,
  HomeUpContentSearchInput,
} from "./style";
import { SubtitlteHover } from "../SubtitleHover";
import { ChangeEvent } from "react";
import { endOfWeek, format, startOfWeek } from "date-fns";
import { ptBR } from "date-fns/locale";

export interface ISearchInputProps {
  data: {
    previousDayWeek: () => void;
    nextDayWeek: () => void;
    choiceDayWeek: (data: Date) => void;
    referenceDay: Date;
    choiceTypeOfViewCalender: (type: string) => void;
  };
}

export function HomeSearchInput({ data }: ISearchInputProps) {

  const {
    previousDayWeek,
    nextDayWeek,
    choiceDayWeek,
    referenceDay,
    choiceTypeOfViewCalender,
  } = data;

  const firstWeekDay = startOfWeek(data.referenceDay);
  const lastWeekDay = endOfWeek(data.referenceDay);

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

  return (
    <HomeSearchInputContainer>
      <HomeDownContentSearchInput>
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
              <option>Ambientes</option>
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
        </HomeSelectFilterOptionSearch>
      </HomeDownFilterContentSearchInput>
    </HomeSearchInputContainer>
  );
}
