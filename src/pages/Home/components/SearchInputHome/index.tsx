import { ArrowLeft, ArrowRight, Calendar, Check, Info } from "phosphor-react";
import * as HoverCard from "@radix-ui/react-hover-card";
import {
  HomeCheckBox,
  HomeCheckBoxIndicator,
  HomeDownContentSearchInput,
  HomeDownFilterContentSearchInput,
  HomeSearchInputContainer,
  HomeSelectFilterOptionSearch,
  HomeSelectOptionSearch,
  HomeTextContentSearchInput,
  HomeUpContentSearchInput,
  InputCheckbox,
} from "./style";
import { SubtitlteHover } from "../SubtitleHover";

export function HomeSearchInput() {
  return (
    <HomeSearchInputContainer>
        <HomeUpContentSearchInput>
          <ArrowLeft size={32} />
          <HomeTextContentSearchInput>
            Agosto 01 - Setembro 02
          </HomeTextContentSearchInput>
          <ArrowRight size={32} />
          <Calendar size={32} />
        </HomeUpContentSearchInput>

        <HomeDownContentSearchInput>
          <input type="text" placeholder="Buscar por Curso" />
        </HomeDownContentSearchInput>

        <HomeDownFilterContentSearchInput>
          <HomeSelectOptionSearch>
            <select>
              <option>Salas</option>
              <option>Professores</option>
            </select>
          </HomeSelectOptionSearch>

          <HomeSelectFilterOptionSearch>
            <InputCheckbox colorsColor={1}>
              <HomeCheckBox>
                <HomeCheckBoxIndicator>
                  <Check size={30} weight="bold" />
                </HomeCheckBoxIndicator>
              </HomeCheckBox>{" "}
              <span>Todos</span>
            </InputCheckbox>
            <InputCheckbox colorsColor={2}>
              <HomeCheckBox>
                <HomeCheckBoxIndicator>
                  <Check size={30} weight="bold" />
                </HomeCheckBoxIndicator>
              </HomeCheckBox>{" "}
              <span>Manhã</span>
            </InputCheckbox>
            <InputCheckbox colorsColor={3}>
              <HomeCheckBox>
                <HomeCheckBoxIndicator>
                  <Check size={30} weight="bold" />
                </HomeCheckBoxIndicator>
              </HomeCheckBox>
              <span>Tarde</span>
            </InputCheckbox>
            <InputCheckbox colorsColor={4}>
              <HomeCheckBox>
                <HomeCheckBoxIndicator>
                  <Check size={30} weight="bold" />
                </HomeCheckBoxIndicator>
              </HomeCheckBox>
              <span>Noite</span>
            </InputCheckbox>

            <HoverCard.Root openDelay={2}>
              <HoverCard.Trigger asChild>
                <Info size={30} opacity={0.5} />
              </HoverCard.Trigger>
              <SubtitlteHover />
            </HoverCard.Root>
          </HomeSelectFilterOptionSearch>
        </HomeDownFilterContentSearchInput>
    </HomeSearchInputContainer>
  );
}
