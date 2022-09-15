import { ArrowLeft, ArrowRight, Calendar, Info } from "phosphor-react";
import {
  HomeButtonContainer,
  HomeButtonCreate,
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

export function Home() {
  return (
    <HomeContainer>
      <HomeContent>
        <HomeTitleContainer>
          <h1>Bem Vindo</h1>
          <p>Selecione um tipo de curso e crie uma nova aula</p>
          <HomeButtonContainer>
            <HomeButtonCreate buttonsColor={1}>
              <button>Regular</button>
            </HomeButtonCreate>
            <HomeButtonCreate buttonsColor={2}>
              <button>FIC</button>
            </HomeButtonCreate>
            <HomeButtonCreate buttonsColor={3}>
              <button>Customizavel</button>
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
                <input type="checkbox" /> <span>Todos</span>
              </InputCheckbox>
              <InputCheckbox colorsColor={2}>
                <input type="checkbox" /> <span>Manhã</span>
              </InputCheckbox>
              <InputCheckbox colorsColor={3}>
                <input type="checkbox" /> <span>Tarde</span>
              </InputCheckbox>
              <InputCheckbox colorsColor={4}>
                <input type="checkbox" /> <span>Noite</span>
              </InputCheckbox>
              <InputCheckbox colorsColor={1}>
                <Info size={32} />
              </InputCheckbox>
            </HomeSelectFilterOptionSearch>
          </HomeDownFilterContentSearchInput>
        </HomeSearchInput>
      </HomeContent>
    </HomeContainer>
  );
}
