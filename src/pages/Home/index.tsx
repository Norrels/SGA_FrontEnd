import { ArrowLeft, ArrowRight, Calendar, Check, Info } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  HomeButtonContainer,
  HomeButtonCreate,
  HomeCheckBox,
  HomeCheckBoxIndicator,
  HomeContainer,
  HomeContent,
  HomeDownContentSearchInput,
  HomeDownFilterContentSearchInput,
  HomeSearchInput,
  HomeSelectFilterOptionSearch,
  HomeSelectOptionSearch,
  HomeTextContentSearchInput,
  HomeTitleContainer,
  HomeUpContentSearchInput,
  InputCheckbox,
} from "./style";
import { ModalCreateNewClass } from "./components/ModalCreateNewClass";
import * as HoverCard from "@radix-ui/react-hover-card";
import { SubtitlteHover } from "./components/SubtitleHover";
import { Calender } from "./components/Calender";

export function Home() {
 

  return (
    <HomeContainer>
      <HomeContent>
        <HomeTitleContainer>
          <h1>Bem Vindo</h1>
          <p>Selecione um tipo de curso e crie uma nova aula</p>
          <HomeButtonContainer>
            <HomeButtonCreate buttonsColor={1}>
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <button>Regular</button>
                </Dialog.Trigger>
                <ModalCreateNewClass name="regular" />
              </Dialog.Root>
            </HomeButtonCreate>
            <HomeButtonCreate buttonsColor={2}>
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <button>FIC</button>
                </Dialog.Trigger>
                <ModalCreateNewClass name="FIC" />
              </Dialog.Root>
            </HomeButtonCreate>
            <HomeButtonCreate buttonsColor={3}>
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <button>Customizavel</button>
                </Dialog.Trigger>
                <ModalCreateNewClass name="customizável" />
              </Dialog.Root>
            </HomeButtonCreate>
          </HomeButtonContainer>
        </HomeTitleContainer>

        <HomeSearchInput>
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
        </HomeSearchInput>
        
        <Calender/>
      </HomeContent>
    </HomeContainer>
  );
}
